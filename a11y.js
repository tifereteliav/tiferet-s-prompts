/**
 * Accessibility layer for Tiferet's Prompts
 * ------------------------------------------------------------
 * Targets Israeli Standard IS 5568 (WCAG 2.0 level AA) as required by the
 * Equal Rights for Persons with Disabilities (Service Accessibility
 * Adjustments) Regulations, 2013.
 *
 * Responsibilities:
 *  1. Progressive enhancement of dynamically rendered UI (keyboard access,
 *     roles, aria-pressed, decorative SVG hiding) via a MutationObserver,
 *     so index.js rendering logic stays untouched.
 *  2. Focus management (workspace, drawer dialog with focus trap).
 *  3. Screen-reader announcements (copy confirmation).
 *  4. A self-hosted accessibility toolbar with persisted preferences.
 *
 * Works on any page that includes it (index.html, accessibility.html).
 */
(function () {
  "use strict";

  var STORAGE_KEY = "tp-a11y-prefs";
  var FONT_STEPS = [100, 115, 130, 150, 175];
  var root = document.documentElement;

  /* ------------------------------------------------------------------
   * Preferences (applied ASAP to avoid a flash of un-adjusted content)
   * ------------------------------------------------------------------ */
  var MODES = [
    { key: "contrast", cls: "a11y-contrast", label: "ניגודיות גבוהה", icon: "◐" },
    { key: "grayscale", cls: "a11y-grayscale", label: "גווני אפור", icon: "▦" },
    { key: "links", cls: "a11y-links", label: "הדגשת קישורים", icon: "🔗" },
    { key: "readable", cls: "a11y-readable-font", label: "גופן קריא", icon: "Aa" },
    { key: "spacing", cls: "a11y-spacing", label: "ריווח טקסט", icon: "↕" },
    { key: "motion", cls: "a11y-no-motion", label: "עצירת אנימציות", icon: "⏸" },
    { key: "cursor", cls: "a11y-big-cursor", label: "סמן גדול", icon: "➤" }
  ];

  function loadPrefs() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function savePrefs(p) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch (e) { /* storage unavailable – ignore */ }
  }

  var prefs = loadPrefs();

  function applyPrefs() {
    var step = FONT_STEPS.indexOf(prefs.font) === -1 ? 100 : prefs.font;
    root.style.fontSize = step === 100 ? "" : step + "%";
    MODES.forEach(function (m) {
      root.classList.toggle(m.cls, !!prefs[m.key]);
    });
  }

  applyPrefs();

  /* ------------------------------------------------------------------
   * DOM-ready work
   * ------------------------------------------------------------------ */
  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    var liveRegion = ensureLiveRegion();

    /* ---------- 1. Progressive enhancement of dynamic content ---------- */
    var groupCounter = 0;

    function enhance() {
      // Decorative SVG icons: hide from assistive tech
      document.querySelectorAll("svg:not([aria-hidden]):not([role='img'])").forEach(function (svg) {
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("focusable", "false");
      });

      // Prompt cards -> keyboard-operable buttons
      document.querySelectorAll(".prompt-card").forEach(function (card) {
        if (!card.hasAttribute("tabindex")) {
          card.tabIndex = 0;
          card.setAttribute("role", "button");
          var title = card.querySelector(".prompt-card-title");
          var cat = card.querySelector(".prompt-category");
          if (title) {
            card.setAttribute(
              "aria-label",
              "פתיחת " + title.textContent.trim() + (cat ? " – קטגוריה: " + cat.textContent.trim() : "")
            );
          }
        }
      });

      // Slash command chips -> toggle buttons
      document.querySelectorAll(".command-chip").forEach(function (chip) {
        if (!chip.hasAttribute("tabindex")) {
          chip.tabIndex = 0;
          chip.setAttribute("role", "button");
        }
        chip.setAttribute("aria-pressed", chip.classList.contains("selected") ? "true" : "false");
      });

      // Option buttons: expose selected state
      document.querySelectorAll(".mode-btn, .ar-btn").forEach(function (btn) {
        btn.setAttribute("aria-pressed", btn.classList.contains("active") ? "true" : "false");
      });

      // Button groups: role=group labelled by the preceding visual label
      document.querySelectorAll(".mode-toggle-group, .ar-toggle-group").forEach(function (group) {
        if (group.hasAttribute("role")) return;
        group.setAttribute("role", "group");
        var lbl = group.previousElementSibling;
        if (lbl && (lbl.tagName === "LABEL" || lbl.classList.contains("var-group-label"))) {
          if (!lbl.id) lbl.id = "a11y-group-label-" + (++groupCounter);
          group.setAttribute("aria-labelledby", lbl.id);
        }
      });

      // Selected commands bar can receive focus after a removal
      var bar = document.getElementById("selected-commands-bar");
      if (bar && !bar.hasAttribute("tabindex")) {
        bar.tabIndex = -1;
        bar.setAttribute("aria-label", "פקודות שנבחרו");
      }
    }

    var scheduled = false;
    function scheduleEnhance() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        enhance();
      });
    }

    enhance();
    new MutationObserver(scheduleEnhance).observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"]
    });

    /* ---------- 2. Keyboard activation for role=button elements ---------- */
    document.addEventListener("keydown", function (e) {
      var el = e.target;
      if (!el || el.getAttribute("role") !== "button" || el.tagName === "BUTTON" || el.tagName === "A") return;
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        el.click();
      }
    });

    // Keep focus sensible after removing a selected command
    document.addEventListener("click", function (e) {
      if (!e.target.closest || !e.target.closest(".remove-cmd")) return;
      requestAnimationFrame(function () {
        var next = document.querySelector("#selected-commands-bar .remove-cmd");
        var bar = document.getElementById("selected-commands-bar");
        if (next) next.focus();
        else if (bar) bar.focus();
      });
    });

    /* ---------- 3. Workspace focus management ---------- */
    var workspace = document.getElementById("workspace");
    var workspaceTitle = document.getElementById("workspace-title");
    var lastCardId = null;

    document.addEventListener("click", function (e) {
      var card = e.target.closest && e.target.closest(".prompt-card");
      if (card) lastCardId = card.dataset.id;
    }, true);

    if (workspace && workspaceTitle) {
      workspaceTitle.tabIndex = -1;
      var wasActive = workspace.classList.contains("active");
      new MutationObserver(function () {
        var isActive = workspace.classList.contains("active");
        if (isActive === wasActive) return;
        wasActive = isActive;
        if (isActive) {
          setTimeout(function () { workspaceTitle.focus({ preventScroll: true }); }, 80);
        } else if (lastCardId) {
          var card = document.querySelector('.prompt-card[data-id="' + lastCardId + '"]');
          if (card) setTimeout(function () { card.focus({ preventScroll: true }); }, 80);
        }
      }).observe(workspace, { attributes: true, attributeFilter: ["class"] });
    }

    /* ---------- 4. Drawer as accessible modal dialog ---------- */
    var drawer = document.getElementById("drawer");
    var drawerReturnFocus = null;

    function focusables(container) {
      return Array.prototype.filter.call(
        container.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'),
        function (el) { return el.offsetParent !== null || el === document.activeElement; }
      );
    }

    if (drawer) {
      var drawerOpen = drawer.classList.contains("open");
      new MutationObserver(function () {
        var isOpen = drawer.classList.contains("open");
        if (isOpen === drawerOpen) return;
        drawerOpen = isOpen;
        if (isOpen) {
          drawerReturnFocus = document.activeElement;
          drawer.setAttribute("aria-hidden", "false");
          var title = document.getElementById("drawer-title");
          setTimeout(function () {
            if (title) {
              title.tabIndex = -1;
              title.focus();
            }
          }, 60);
        } else {
          drawer.setAttribute("aria-hidden", "true");
          if (drawerReturnFocus && document.contains(drawerReturnFocus)) {
            drawerReturnFocus.focus();
          }
        }
      }).observe(drawer, { attributes: true, attributeFilter: ["class"] });

      drawer.addEventListener("keydown", function (e) {
        if (e.key !== "Tab" || !drawer.classList.contains("open")) return;
        var items = focusables(drawer);
        if (!items.length) return;
        var first = items[0];
        var last = items[items.length - 1];
        if (e.shiftKey && (document.activeElement === first || !drawer.contains(document.activeElement) || document.activeElement.id === "drawer-title")) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      });
    }

    /* ---------- 5. Screen-reader announcement for copy toast ---------- */
    var toast = document.getElementById("toast-copy");
    if (toast) {
      new MutationObserver(function () {
        if (toast.classList.contains("show")) {
          var text = (toast.querySelector(".toast-text") || toast).textContent.trim();
          announce(text);
        }
      }).observe(toast, { attributes: true, attributeFilter: ["class"] });
    }

    function announce(msg) {
      liveRegion.textContent = "";
      setTimeout(function () { liveRegion.textContent = msg; }, 50);
    }

    /* ---------- 6. Accessibility toolbar ---------- */
    buildToolbar(announce);
  });

  function ensureLiveRegion() {
    var el = document.getElementById("a11y-live");
    if (!el) {
      el = document.createElement("div");
      el.id = "a11y-live";
      el.className = "sr-only";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      el.setAttribute("aria-atomic", "true");
      document.body.appendChild(el);
    }
    return el;
  }

  function buildToolbar(announce) {
    var statementUrl = "accessibility.html";

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "a11y-toggle";
    toggle.id = "a11y-toggle";
    toggle.setAttribute("aria-label", "תפריט נגישות");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "a11y-panel");
    toggle.title = "תפריט נגישות";
    toggle.innerHTML =
      '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor">' +
      '<circle cx="12" cy="4" r="2"/>' +
      '<path d="M19 8.5c0 .55-.45 1-1 1h-4v3.2l2.4 7.1a1 1 0 01-1.9.6L12.4 15h-.8l-2.1 5.4a1 1 0 01-1.9-.6L10 12.7V9.5H6a1 1 0 010-2h12c.55 0 1 .45 1 1z"/>' +
      "</svg>";

    var panel = document.createElement("div");
    panel.className = "a11y-panel";
    panel.id = "a11y-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "false");
    panel.setAttribute("aria-labelledby", "a11y-panel-title");
    panel.hidden = true;

    var modesHtml = MODES.map(function (m) {
      return (
        '<button type="button" class="a11y-btn" data-mode="' + m.key + '" aria-pressed="' + (!!prefs[m.key]) + '">' +
        '<span class="a11y-ico" aria-hidden="true">' + m.icon + "</span>" +
        "<span>" + m.label + "</span></button>"
      );
    }).join("");

    panel.innerHTML =
      '<div class="a11y-panel-header">' +
      '<h2 id="a11y-panel-title">תפריט נגישות</h2>' +
      '<button type="button" class="a11y-close" aria-label="סגירת תפריט הנגישות">&times;</button>' +
      "</div>" +
      '<div class="a11y-font-row" role="group" aria-label="גודל טקסט">' +
      '<button type="button" class="a11y-btn" data-font="down" aria-label="הקטנת טקסט"><span class="a11y-ico" aria-hidden="true">A−</span></button>' +
      '<output id="a11y-font-value" aria-live="polite"></output>' +
      '<button type="button" class="a11y-btn" data-font="up" aria-label="הגדלת טקסט"><span class="a11y-ico" aria-hidden="true">A+</span></button>' +
      "</div>" +
      '<div class="a11y-grid">' + modesHtml + "</div>" +
      '<div class="a11y-footer-row">' +
      '<a href="' + statementUrl + '">הצהרת נגישות</a>' +
      '<button type="button" class="a11y-reset">איפוס הגדרות</button>' +
      "</div>";

    document.body.appendChild(toggle);
    document.body.appendChild(panel);

    var fontOut = panel.querySelector("#a11y-font-value");

    function refreshFontLabel() {
      var v = FONT_STEPS.indexOf(prefs.font) === -1 ? 100 : prefs.font;
      fontOut.textContent = "גודל טקסט: " + v + "%";
    }
    refreshFontLabel();

    function openPanel() {
      panel.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      panel.querySelector(".a11y-close").focus();
    }

    function closePanel(returnFocus) {
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      if (returnFocus) toggle.focus();
    }

    toggle.addEventListener("click", function () {
      if (panel.hidden) openPanel();
      else closePanel(true);
    });

    panel.querySelector(".a11y-close").addEventListener("click", function () {
      closePanel(true);
    });

    panel.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        e.stopPropagation();
        closePanel(true);
      }
    });

    document.addEventListener("click", function (e) {
      if (!panel.hidden && !panel.contains(e.target) && !toggle.contains(e.target)) {
        closePanel(false);
      }
    });

    panel.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;

      if (btn.dataset.font) {
        var idx = FONT_STEPS.indexOf(prefs.font);
        if (idx === -1) idx = 0;
        idx = btn.dataset.font === "up" ? Math.min(idx + 1, FONT_STEPS.length - 1) : Math.max(idx - 1, 0);
        prefs.font = FONT_STEPS[idx];
        savePrefs(prefs);
        applyPrefs();
        refreshFontLabel();
        return;
      }

      if (btn.dataset.mode) {
        var key = btn.dataset.mode;
        prefs[key] = !prefs[key];
        btn.setAttribute("aria-pressed", String(!!prefs[key]));
        savePrefs(prefs);
        applyPrefs();
        return;
      }

      if (btn.classList.contains("a11y-reset")) {
        prefs = {};
        savePrefs(prefs);
        applyPrefs();
        refreshFontLabel();
        panel.querySelectorAll("[data-mode]").forEach(function (b) {
          b.setAttribute("aria-pressed", "false");
        });
        announce("הגדרות הנגישות אופסו");
      }
    });

    // Footer "open accessibility menu" buttons (if present on page)
    document.querySelectorAll("[data-open-a11y]").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        openPanel();
      });
    });
  }
})();
