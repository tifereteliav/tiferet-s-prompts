/**
 * Application logic for MedComms Prompt Hub
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  // Application State
  let activePromptId = null;
  const userVariables = {}; // Stores user inputs for variables across prompts

  // DOM Elements
  const promptsListContainer = document.getElementById("prompts-list");
  const workspaceTitle = document.getElementById("workspace-title");
  const variablesForm = document.getElementById("variables-form");
  const promptPreview = document.getElementById("prompt-preview");
  const searchInput = document.getElementById("search-input");
  
  // Buttons
  const btnCopy = document.getElementById("btn-copy");
  const btnOpenDrawer = document.getElementById("btn-open-drawer");
  const btnCloseDrawer = document.getElementById("btn-close-drawer");
  
  // Drawer Elements
  const drawer = document.getElementById("drawer");
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const drawerTitle = document.getElementById("drawer-title");
  const drawerSubtitle = document.getElementById("drawer-subtitle");
  const drawerBody = document.getElementById("drawer-body");
  
  // Toast
  const toastCopy = document.getElementById("toast-copy");

  // Initialize variables state with default values
  PROMPTS_DATA.forEach(prompt => {
    userVariables[prompt.id] = {};
    prompt.variables.forEach(v => {
      userVariables[prompt.id][v.id] = v.default;
    });
  });

  // Render Prompt Cards (Minimalist elegant cards)
  function renderPromptCards(filterQuery = "") {
    promptsListContainer.innerHTML = "";
    
    const query = filterQuery.trim().toLowerCase();
    const filteredPrompts = PROMPTS_DATA.filter(prompt => {
      return (
        prompt.title.toLowerCase().includes(query) ||
        prompt.subtitle.toLowerCase().includes(query) ||
        prompt.description.toLowerCase().includes(query) ||
        prompt.category.toLowerCase().includes(query)
      );
    });

    if (filteredPrompts.length === 0) {
      promptsListContainer.innerHTML = `
        <div class="bento-card span-12" style="text-align: center; padding: 3rem;">
          <p style="color: var(--text-muted);">לא נמצאו פרומפטים.</p>
        </div>
      `;
      return;
    }

    filteredPrompts.forEach(prompt => {
      const card = document.createElement("div");
      card.className = `bento-card prompt-card ${prompt.id === activePromptId ? 'prompt-card-active' : ''}`;
      card.dataset.id = prompt.id;
      
      card.innerHTML = `
        <div class="prompt-icon">
          ${prompt.icon}
        </div>
        <h3>${prompt.title}</h3>
        <div class="prompt-meta">
          <span class="prompt-category">${prompt.category}</span>
        </div>
      `;
      
      card.addEventListener("click", () => {
        selectPrompt(prompt.id);
      });
      
      promptsListContainer.appendChild(card);
    });
  }

  // Switch Selected Prompt Workspace
  function selectPrompt(promptId) {
    activePromptId = promptId;
    
    // Show and activate workspace with animation class
    const workspace = document.getElementById("workspace");
    workspace.classList.add("active");
    
    // Update active class on prompt cards
    document.querySelectorAll(".prompt-card").forEach(card => {
      if (card.dataset.id === promptId) {
        card.classList.add("prompt-card-active");
      } else {
        card.classList.remove("prompt-card-active");
      }
    });

    const prompt = PROMPTS_DATA.find(p => p.id === promptId);
    if (!prompt) return;

    // Update Workspace title
    workspaceTitle.innerHTML = `
      ${prompt.icon}
      התאמת משתני ${prompt.title}
    `;

    // Generate variables inputs
    variablesForm.innerHTML = "";
    if (prompt.variables.length === 0) {
      variablesForm.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted); border: 1px dashed var(--panel-border); border-radius: 10px; background: rgba(255, 255, 255, 0.01); margin-top: 0.5rem;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8" style="width:36px;height:36px;margin: 0 auto 0.75rem auto;color: var(--primary-teal);display:block;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p style="font-size: 0.95rem; font-weight: 500; color: #fff; margin-bottom: 0.25rem;">פרומפט מוכן להעתקה</p>
          <p style="font-size: 0.8rem; line-height: 1.4;">פרומפט זה הינו סטטי ומוכן לשימוש ישיר. אין צורך בהתאמת משתנים.</p>
        </div>
      `;
    } else {
      prompt.variables.forEach(variable => {
        const inputGroup = document.createElement("div");
        inputGroup.className = "var-input-group";
        
        const label = document.createElement("label");
        label.setAttribute("for", `input-${variable.id}`);
        label.innerText = variable.label;
        
        let inputElement;
        const currentValue = userVariables[promptId][variable.id];
        
        // Use textarea for long descriptions, input text for shorter items
        if (variable.id === "CLINICAL_TOPIC" || variable.id === "TECH_NAME" || variable.id === "CLINICAL_PROTOCOL") {
          inputElement = document.createElement("textarea");
          inputElement.rows = 3;
        } else {
          inputElement = document.createElement("input");
          inputElement.type = "text";
        }
        
        inputElement.id = `input-${variable.id}`;
        inputElement.value = currentValue;
        inputElement.placeholder = variable.placeholder;
        
        // Real-time input updates code preview
        inputElement.addEventListener("input", (e) => {
          userVariables[promptId][variable.id] = e.target.value;
          updateCodePreview();
        });
        
        inputGroup.appendChild(label);
        inputGroup.appendChild(inputElement);
        variablesForm.appendChild(inputGroup);
      });
    }

    // Update the live system prompt preview
    updateCodePreview();

    // Scroll workspace into view smoothly
    setTimeout(() => {
      workspace.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  // Update System Prompt Code Block with highlighted tags
  function updateCodePreview() {
    if (!activePromptId) return;
    const prompt = PROMPTS_DATA.find(p => p.id === activePromptId);
    if (!prompt) return;

    let finalPromptText = prompt.template;
    
    // Replace all placeholders like {CLINICAL_TOPIC} and wrap them with <mark> tags in preview
    let htmlPreviewText = escapeHTML(prompt.template);
    
    prompt.variables.forEach(v => {
      const value = userVariables[activePromptId][v.id] || "";
      const escapedValue = escapeHTML(value);
      
      // Real plain text replacement
      finalPromptText = finalPromptText.replaceAll(`{${v.id}}`, value);
      
      // Highlighted HTML preview replacement
      htmlPreviewText = htmlPreviewText.replaceAll(`{${v.id}}`, `<mark>${escapedValue}</mark>`);
    });

    // Write to DOM preview
    promptPreview.innerHTML = htmlPreviewText;
    
    // Attach current plain text output to copy button data attribute
    btnCopy.dataset.clipboardText = finalPromptText;
  }

  // Safe HTML Escaper to prevent rendering markup inside prompt code block
  function escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Copy to Clipboard Action
  btnCopy.addEventListener("click", () => {
    const textToCopy = btnCopy.dataset.clipboardText;
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast();
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

  // Show Toast Alert Notification
  function showToast() {
    toastCopy.classList.add("show");
    
    // Add micro haptic animation indicator to copy button
    btnCopy.style.transform = "scale(0.95)";
    setTimeout(() => {
      btnCopy.style.transform = "";
    }, 150);

    setTimeout(() => {
      toastCopy.classList.remove("show");
    }, 3000);
  }

  // Drawer Controls
  btnOpenDrawer.addEventListener("click", () => {
    if (!activePromptId) return;
    const prompt = PROMPTS_DATA.find(p => p.id === activePromptId);
    if (!prompt || !prompt.background) return;

    drawerTitle.innerText = prompt.background.title;
    drawerSubtitle.innerText = prompt.background.subtitle;
    
    // Compile background contents into single HTML blocks
    let bodyHTML = `
      <p><strong>מבוא:</strong> ${prompt.background.introduction.replace(/\n/g, "<br>")}</p>
    `;
    
    prompt.background.sections.forEach(section => {
      bodyHTML += `
        <h4>${section.heading}</h4>
        <div>${section.content}</div>
      `;
    });

    if (prompt.background.sources && prompt.background.sources.length > 0) {
      bodyHTML += `
        <div class="drawer-sources">
          <h4>מקורות והשראה אקדמית</h4>
      `;
      prompt.background.sources.forEach(src => {
        bodyHTML += `
          <div class="source-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4" style="width:16px;height:16px;color:var(--primary-teal);"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
            <a href="${src.url}" target="_blank" rel="noopener noreferrer">${src.name}</a>
          </div>
        `;
      });
      bodyHTML += `</div>`;
    }

    drawerBody.innerHTML = bodyHTML;
    
    // Open drawer transitions
    drawer.classList.add("open");
    drawerBackdrop.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  });

  // Close Drawer
  function closeDrawer() {
    drawer.classList.remove("open");
    drawerBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  btnCloseDrawer.addEventListener("click", closeDrawer);
  drawerBackdrop.addEventListener("click", closeDrawer);

  // Search Filter Handler (safely checked if exists)
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderPromptCards(e.target.value);
    });
  }

  // Escape key closes drawer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  });

  // Launch initial render
  renderPromptCards();
});
