/**
 * Application logic for MedComms Prompt Hub
 */

document.addEventListener("DOMContentLoaded", () => {
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

  // Unique Slash Commands Catalog (40 Commands across 5 Categories)
  const UNIQUE_COMMAND_CATALOG = [
    {
      category: "לפרק ולראות בפנים – מה שהמעטפת מסתירה",
      commands: [
        { code: "/xray", desc: "רואים את המבנה הפנימי דרך המעטפת, שכבה אחרי שכבה", mode: "image_based" },
        { code: "/explodedview", desc: "כל הרכיבים מרחפים בנפרד ומסודרים במרווחים", mode: "image_based" },
        { code: "/cutaway", desc: "חלק מהמעטפת מוסר ומגלה מה יש מתחת", mode: "image_based" },
        { code: "/crosssection", desc: "חיתוך ישר דרך האובייקט, כמו לתוך אותו בסכין", mode: "image_based" },
        { code: "/anatomy", desc: "כל חלק מופרד ומקבל שם משלו", mode: "image_based" },
        { code: "/inside", desc: "מבט אל המנגנון שמניע את הדבר", mode: "image_based" },
        { code: "/layers", desc: "השכבות נפרשות מלמטה למעלה", mode: "image_based" }
      ]
    },
    {
      category: "להסביר תהליך וקשרים – איך דברים עובדים ומי מחובר למי",
      commands: [
        { code: "/diagram", desc: "מושג מצויר עם חצים ותוויות", mode: "text_based" },
        { code: "/flowchart", desc: "צעד אחרי צעד, כולל נקודות החלטה", mode: "text_based" },
        { code: "/mindmap", desc: "נושא מרכזי שמסתעף החוצה", mode: "text_based" },
        { code: "/process", desc: "כל השלבים מהתחלה עד הסוף", mode: "text_based" },
        { code: "/cycle", desc: "תהליך שחוזר על עצמו בלולאה", mode: "text_based" },
        { code: "/journey", desc: "הדרך מנקודת המבט של האדם שעובר אותה", mode: "text_based" },
        { code: "/timeline", desc: "אירועים לפי סדר כרונולוגי", mode: "text_based" },
        { code: "/roadmap", desc: "תחנות בדרך אל יעד", mode: "text_based" },
        { code: "/ecosystem", desc: "כל השחקנים בתחום ומי מחובר למי", mode: "text_based" },
        { code: "/network", desc: "צמתים וקווים שמחברים ביניהם", mode: "text_based" }
      ]
    },
    {
      category: "להשוות ולהראות שינוי – זה מול זה, אז מול היום",
      commands: [
        { code: "/comparison", desc: "זה מול זה, לפי אותם קריטריונים", mode: "text_based" },
        { code: "/versus", desc: "שני צדדים בעימות ויזואלי", mode: "text_based" },
        { code: "/beforeafter", desc: "אותו דבר בדיוק, שני מצבים", mode: "image_based" },
        { code: "/thenvsnow", desc: "עבר מול הווה באותו פריים", mode: "text_based" },
        { code: "/evolution", desc: "התפתחות לאורך זמן, שלב אחרי שלב", mode: "text_based" },
        { code: "/scale", desc: "השוואת גדלים זה לצד זה", mode: "image_based" },
        { code: "/future", desc: "איך זה ייקרא בעוד כמה שנים", mode: "text_based" },
        { code: "/heatmap", desc: "עוצמה שמוצגת בצבע", mode: "text_based" }
      ]
    },
    {
      category: "זווית מבט ושרטוט – מאיפה מסתכלים ובאיזה סגנון",
      commands: [
        { code: "/isometric", desc: "תלת-ממד בזווית 3/4, בלי עיוות פרספקטיבה", mode: "image_based" },
        { code: "/birdseye", desc: "הכל מלמעלה, כמו מרחפן", mode: "image_based" },
        { code: "/360view", desc: "אותו אובייקט מכמה כיוונים בפריים אחד", mode: "image_based" },
        { code: "/microscopic", desc: "מבט מיקרוסקופי אל הפרטים הקטנים", mode: "image_based" },
        { code: "/macroscopic", desc: "מתרחקים עד שרואים את כל המערכת", mode: "text_based" },
        { code: "/map", desc: "גיאוגרפית או מפת מושגים", mode: "text_based" },
        { code: "/blueprint", desc: "קווים לבנים על כחול, עם מידות", mode: "image_based" },
        { code: "/schematic", desc: "שרטוט פשוט וסימפולי, בלי קישוט", mode: "image_based" }
      ]
    },
    {
      category: "מוצר, מסך וסיפור – דברים שעוד לא קיימים",
      commands: [
        { code: "/wireframe", desc: "מבנה אתר או אפליקציה בלי עיצוב", mode: "text_based" },
        { code: "/mockup", desc: "המוצר כאילו הוא כבר קיים במציאות", mode: "image_based" },
        { code: "/prototype", desc: "גרסה מוקדמת וגסה של מוצר", mode: "text_based" },
        { code: "/architecture", desc: "מבנה מערכת והרכיבים שלה", mode: "text_based" },
        { code: "/dashboard", desc: "מסך נתונים עם מדדים וגרפים", mode: "text_based" },
        { code: "/storyboard", desc: "סצנה אחרי סצנה, כמו לפני צילומים", mode: "text_based" },
        { code: "/comic", desc: "הסבר בפאנלים עם בועות דיבור", mode: "text_based" },
        { code: "/visualize", desc: "רעיון מופשט שהופך לתמונה", mode: "text_based" }
      ]
    },
    {
      category: "הזמנות, ברכות ומיתוג – נייר, טיפוגרפיה ואווירה",
      commands: [
        { code: "/invitation", desc: "פריסת הזמנה יוקרתית עם שוליים נקיים ומרווחי נשימה", mode: "text_based" },
        { code: "/formal", desc: "הזמנה רשמית ומכובדת לכנסים, ימי עיון וישיבות צוות", mode: "text_based" },
        { code: "/conference", desc: "פריסת הזמנה לכנס או יום עיון עם סדר יום ומרצים", mode: "text_based" },
        { code: "/agenda", desc: "הזמנה מובנית עם לוח זמנים, שעות ונושאי הרצאות", mode: "text_based" },
        { code: "/badge", desc: "תג שם, כרטיס אורח או תווית משתתף לכנס", mode: "text_based" },
        { code: "/certificate", desc: "תעודת הוקרה, תעודת השתתפות או תעודת סיום יום עיון", mode: "text_based" },
        { code: "/card", desc: "מבנה קלאסי של כרטיס ברכה מתקפל או גלויה מעוצבת", mode: "text_based" },
        { code: "/goldfoil", desc: "הטבעת זהב או כסף מבריקה (Gold Foil Stamping) על האותיות והשוליים", mode: "image_based" },
        { code: "/emboss", desc: "הטבעה שקועה או בולטת בנייר (Letterpress / Debossing) ללא צבע", mode: "image_based" },
        { code: "/calligraphy", desc: "אותיות קליגרפיות אמנותיות בעזרת ציפורן או מברשת זהב עדינה", mode: "text_based" },
        { code: "/mockup", desc: "הצגת הברכה/הזמנה כרכיב פיזי אמיתי מצולם בסטודיו על נייר פשתן/כותנה", mode: "image_based" },
        { code: "/flatlay", desc: "צילום מלמעלה (Knolling) של הברכה לצד מעטפה, חותמת שעווה ופרחים", mode: "image_based" },
        { code: "/watercolor", desc: "איורי צבעי מים רכים (עלים, פרחים עדינים, אלמנטים מרגיעים)", mode: "text_based" },
        { code: "/stationery", desc: "ערכת נייר מיתוגית מלאה (כרטיס, מעטפה, מדבקה וסרט משי)", mode: "text_based" },
        { code: "/botanical", desc: "עיטורי צמחייה, עלים עדינים וענפי זית במסגרת ההזמנה", mode: "text_based" }
      ]
    }
  ];

  // Initialize variables state with default values
  PROMPTS_DATA.forEach(prompt => {
    userVariables[prompt.id] = {};
    prompt.variables.forEach(v => {
      userVariables[prompt.id][v.id] = v.default;
    });

    // Custom steps initialization for gpt_step_image
    if (prompt.id === "gpt_step_image") {
      userVariables[prompt.id]["step_1"] = "";
      userVariables[prompt.id]["step_2"] = "";
      userVariables[prompt.id]["step_3"] = "";
      userVariables[prompt.id]["step_4"] = "";
      userVariables[prompt.id]["step_5"] = "";
      userVariables[prompt.id]["step_6"] = "";
      userVariables[prompt.id]["step_7"] = "";
      userVariables[prompt.id]["step_8"] = "";
      userVariables[prompt.id]["step_9"] = "";
      userVariables[prompt.id]["step_10"] = "";
    }

    // Custom initialization for branding_headshots
    if (prompt.id === "branding_headshots") {
      userVariables[prompt.id]["GENDER"] = "woman_covered";
      userVariables[prompt.id]["SCENARIO"] = "3d_letters";
      userVariables[prompt.id]["CUSTOM_SCENARIO"] = "";
      userVariables[prompt.id]["WARDROBE_STYLE"] = "tailored_contrast";
      userVariables[prompt.id]["CUSTOM_WARDROBE"] = "";
      userVariables[prompt.id]["NAME_TEXT"] = "Tiferet";
      userVariables[prompt.id]["ENGRAVED_TEXT"] = 'חג ט"ו בשבט שמח!';
      userVariables[prompt.id]["DISPLAY_ITEMS"] = "an exquisite arrangement of premium Tu BiShvat fruits—glistening Medjool dates, honey-glazed apricots, ruby-red pomegranate seeds, and vibrant tropical fruits—styled like high-end jewelry";
      userVariables[prompt.id]["CAMERA_LENS"] = "85mm";
      userVariables[prompt.id]["LIGHTING"] = "softbox_rim";
      userVariables[prompt.id]["REALISM_MODE"] = "authentic_skin";
      userVariables[prompt.id]["ACTION_MODE"] = "generate";
      userVariables[prompt.id]["EDIT_INSTRUCTION"] = "change blazer color to deep midnight navy";
      userVariables[prompt.id]["ASPECT_RATIO"] = "1:1";
    }

    // Custom initialization for unique_images
    if (prompt.id === "unique_images") {
      userVariables[prompt.id]["MODE"] = "image_based";
      userVariables[prompt.id]["AUDIENCE"] = "clinical";
      userVariables[prompt.id]["TOPIC"] = "";
      userVariables[prompt.id]["SELECTED_COMMANDS"] = [];
      userVariables[prompt.id]["ASPECT_RATIO"] = "16:9";
    }
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
        <div class="prompt-meta">
          <span class="prompt-category">${prompt.category}</span>
          <h3 class="prompt-card-title">${prompt.title}</h3>
          <p class="prompt-card-desc">${prompt.description}</p>
        </div>
      `;
      
      card.addEventListener("click", () => {
        selectPrompt(prompt.id);
      });
      
      promptsListContainer.appendChild(card);
    });
  }

  // Select Prompt and load into workspace
  function selectPrompt(promptId) {
    activePromptId = promptId;
    
    // Show and activate workspace with animation class
    const workspace = document.getElementById("workspace");
    workspace.classList.add("active");
    document.body.classList.add("workspace-active");
    
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
    if (promptId === "gpt_step_image") {
      // 1. Topic input
      const topicGroup = document.createElement("div");
      topicGroup.className = "var-input-group";
      topicGroup.innerHTML = `
        <label for="input-TOPIC">נושא כללי של ההדרכה</label>
        <textarea id="input-TOPIC" rows="2">${userVariables[promptId]["TOPIC"] || ""}</textarea>
      `;
      variablesForm.appendChild(topicGroup);
      
      // 2. Steps Count select
      const countGroup = document.createElement("div");
      countGroup.className = "var-input-group";
      const currentCount = parseInt(userVariables[promptId]["STEPS_COUNT"] || "3");
      countGroup.innerHTML = `
        <label for="input-STEPS_COUNT">מספר השלבים בהדרכה</label>
        <select id="input-STEPS_COUNT" class="steps-count-select">
          <option value="2" ${currentCount === 2 ? 'selected' : ''}>2 שלבים</option>
          <option value="3" ${currentCount === 3 ? 'selected' : ''}>3 שלבים</option>
          <option value="4" ${currentCount === 4 ? 'selected' : ''}>4 שלבים</option>
          <option value="5" ${currentCount === 5 ? 'selected' : ''}>5 שלבים</option>
          <option value="6" ${currentCount === 6 ? 'selected' : ''}>6 שלבים</option>
          <option value="7" ${currentCount === 7 ? 'selected' : ''}>7 שלבים</option>
          <option value="8" ${currentCount === 8 ? 'selected' : ''}>8 שלבים</option>
          <option value="9" ${currentCount === 9 ? 'selected' : ''}>9 שלבים</option>
          <option value="10" ${currentCount === 10 ? 'selected' : ''}>10 שלבים</option>
        </select>
      `;
      variablesForm.appendChild(countGroup);

      // 3. Dynamic steps container
      const stepsContainer = document.createElement("div");
      stepsContainer.id = "dynamic-steps-container";
      variablesForm.appendChild(stepsContainer);

      const renderStepInputs = (count) => {
        stepsContainer.innerHTML = "";
        for (let i = 1; i <= count; i++) {
          const stepKey = `step_${i}`;
          const defaultVal = userVariables[promptId][stepKey] || "";
          
          const stepGroup = document.createElement("div");
          stepGroup.className = "var-input-group";
          stepGroup.style.marginTop = "0.75rem";
          stepGroup.innerHTML = `
            <label for="input-${stepKey}">תיאור שלב ${i}</label>
            <input type="text" id="input-${stepKey}" value="${defaultVal}" placeholder="הזן מה להציג בשלב ${i}..." />
          `;
          stepsContainer.appendChild(stepGroup);

          // Bind event listener
          const input = stepGroup.querySelector(`#input-${stepKey}`);
          input.addEventListener("input", (e) => {
            userVariables[promptId][stepKey] = e.target.value;
            updateCodePreview();
          });
        }
      };

      // Initial render
      renderStepInputs(currentCount);

      // Bind topic event listener
      const topicInput = topicGroup.querySelector("#input-TOPIC");
      topicInput.addEventListener("input", (e) => {
        userVariables[promptId]["TOPIC"] = e.target.value;
        updateCodePreview();
      });

      // Bind select event listener
      const countSelect = countGroup.querySelector("#input-STEPS_COUNT");
      countSelect.addEventListener("change", (e) => {
        const val = parseInt(e.target.value);
        userVariables[promptId]["STEPS_COUNT"] = val.toString();
        renderStepInputs(val);
        updateCodePreview();
      });
      
    } else if (promptId === "unique_images") {
      // 1. Mode selection (Image-to-Image vs Text-to-Image)
      const modeGroup = document.createElement("div");
      modeGroup.className = "var-input-group";
      const currentMode = userVariables[promptId]["MODE"] || "image_based";
      
      modeGroup.innerHTML = `
        <label>סוג יצירת התמונה (מקור)</label>
        <div class="mode-toggle-group">
          <button type="button" class="mode-btn ${currentMode === 'image_based' ? 'active' : ''}" data-mode="image_based">
            📸 על בסיס תמונה שלכם (Refinement)
          </button>
          <button type="button" class="mode-btn ${currentMode === 'text_based' ? 'active' : ''}" data-mode="text_based">
            ✨ מאפס, מנושא (Concept)
          </button>
        </div>
      `;
      variablesForm.appendChild(modeGroup);

      modeGroup.querySelectorAll(".mode-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          modeGroup.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          userVariables[promptId]["MODE"] = btn.dataset.mode;
          updateCodePreview();
        });
      });

      // 2. Medical Target Audience selection
      const audienceGroup = document.createElement("div");
      audienceGroup.className = "var-input-group";
      const currentAudience = userVariables[promptId]["AUDIENCE"] || "clinical";
      audienceGroup.innerHTML = `
        <label for="input-AUDIENCE">קהל יעד / סגנון מבוקש</label>
        <select id="input-AUDIENCE" class="steps-count-select">
          <option value="clinical" ${currentAudience === 'clinical' ? 'selected' : ''}>🩺 צוותים קליניים ורופאים</option>
          <option value="patient" ${currentAudience === 'patient' ? 'selected' : ''}>💚 מטופלים ומשפחות</option>
          <option value="tech" ${currentAudience === 'tech' ? 'selected' : ''}>🚀 מיתוג וחדשנות HealthTech</option>
          <option value="gala_greeting" ${currentAudience === 'gala_greeting' ? 'selected' : ''}>✨ הזמנות, ברכות ואירועי שיא</option>
        </select>
      `;
      variablesForm.appendChild(audienceGroup);

      audienceGroup.querySelector("#input-AUDIENCE").addEventListener("change", (e) => {
        userVariables[promptId]["AUDIENCE"] = e.target.value;
        renderCatalogCategories();
        updateCodePreview();
      });

      // 3. Aspect Ratio Selection (16:9, 1:1, 9:16)
      const arGroup = document.createElement("div");
      arGroup.className = "var-input-group";
      const currentAR = userVariables[promptId]["ASPECT_RATIO"] || "16:9";
      arGroup.innerHTML = `
        <label>גודל תמונה / יחס מכלול (Aspect Ratio)</label>
        <div class="ar-toggle-group">
          <button type="button" class="ar-btn ${currentAR === '16:9' ? 'active' : ''}" data-ar="16:9">
            <span class="ar-icon">16:9</span>
            <span class="ar-label">לרוחב / מסכים</span>
          </button>
          <button type="button" class="ar-btn ${currentAR === '1:1' ? 'active' : ''}" data-ar="1:1">
            <span class="ar-icon">1:1</span>
            <span class="ar-label">ריבוע / פוסטים</span>
          </button>
          <button type="button" class="ar-btn ${currentAR === '9:16' ? 'active' : ''}" data-ar="9:16">
            <span class="ar-icon">9:16</span>
            <span class="ar-label">לאורך / סטוריז</span>
          </button>
        </div>
      `;
      variablesForm.appendChild(arGroup);

      arGroup.querySelectorAll(".ar-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          arGroup.querySelectorAll(".ar-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          userVariables[promptId]["ASPECT_RATIO"] = btn.dataset.ar;
          updateCodePreview();
        });
      });

      // 4. Medical Topic / Subject input
      const topicGroup = document.createElement("div");
      topicGroup.className = "var-input-group";
      topicGroup.innerHTML = `
        <label for="input-TOPIC">נושא קליני / תיאור התמונה המבוקשת</label>
        <textarea id="input-TOPIC" rows="2" placeholder="הזן את שם המכשיר, המושג או התהליך הרפואי...">${userVariables[promptId]["TOPIC"] || ""}</textarea>
      `;
      variablesForm.appendChild(topicGroup);

      topicGroup.querySelector("#input-TOPIC").addEventListener("input", (e) => {
        userVariables[promptId]["TOPIC"] = e.target.value;
        updateCodePreview();
      });

      // 5. Selected commands display bar
      const selectedBarGroup = document.createElement("div");
      selectedBarGroup.className = "var-input-group";
      selectedBarGroup.innerHTML = `
        <label>פקודות סלאש שנבחרו לשילוב (לחצו על הפקודות למטה להוספה/הסרה)</label>
        <div id="selected-commands-bar" class="selected-commands-bar"></div>
      `;
      variablesForm.appendChild(selectedBarGroup);

      const selectedBar = selectedBarGroup.querySelector("#selected-commands-bar");

      // Function to render selected commands tags
      const renderSelectedBar = () => {
        selectedBar.innerHTML = "";
        const selectedArr = userVariables[promptId]["SELECTED_COMMANDS"] || [];
        if (selectedArr.length === 0) {
          selectedBar.innerHTML = `<span style="font-size: 0.8rem; color: var(--text-muted);">טרם נבחרו פקודות. לחצו על כרטיסיות הפקודות למטה.</span>`;
          return;
        }

        selectedArr.forEach(cmdCode => {
          const tag = document.createElement("span");
          tag.className = "selected-cmd-tag";
          tag.innerHTML = `
            ${cmdCode}
            <span class="remove-cmd" title="הסר פקודה">&times;</span>
          `;
          tag.querySelector(".remove-cmd").addEventListener("click", (e) => {
            e.stopPropagation();
            userVariables[promptId]["SELECTED_COMMANDS"] = userVariables[promptId]["SELECTED_COMMANDS"].filter(c => c !== cmdCode);
            renderSelectedBar();
            updateChipsState();
            updateCodePreview();
          });
          selectedBar.appendChild(tag);
        });
      };

      // 6. Render command categories (dynamically reordered if audience is gala_greeting)
      const catalogContainer = document.createElement("div");
      catalogContainer.className = "command-catalog-container";

      const updateChipsState = () => {
        const currentCmds = userVariables[promptId]["SELECTED_COMMANDS"] || [];
        catalogContainer.querySelectorAll(".command-chip").forEach(chip => {
          if (currentCmds.includes(chip.dataset.code)) {
            chip.classList.add("selected");
          } else {
            chip.classList.remove("selected");
          }
        });
      };

      const renderCatalogCategories = () => {
        catalogContainer.innerHTML = "";
        
        let categoriesToRender = [...UNIQUE_COMMAND_CATALOG];
        const audienceVal = userVariables[promptId]["AUDIENCE"];

        // Reorder categories based on selected audience
        if (audienceVal === "gala_greeting") {
          const galaCat = categoriesToRender.find(c => c.category.includes("הזמנות, ברכות ומיתוג"));
          if (galaCat) {
            categoriesToRender = [galaCat, ...categoriesToRender.filter(c => c !== galaCat)];
          }
        } else if (audienceVal === "patient") {
          const patientCat = categoriesToRender.find(c => c.category.includes("להסביר תהליך וקשרים"));
          if (patientCat) {
            categoriesToRender = [patientCat, ...categoriesToRender.filter(c => c !== patientCat)];
          }
        }

        categoriesToRender.forEach(cat => {
          const catBlock = document.createElement("div");
          catBlock.className = "command-category-block";

          const catTitle = document.createElement("div");
          catTitle.className = "command-category-title";
          catTitle.innerText = cat.category;
          catBlock.appendChild(catTitle);

          const chipsGrid = document.createElement("div");
          chipsGrid.className = "command-chips-grid";

          cat.commands.forEach(cmd => {
            const chip = document.createElement("div");
            chip.className = "command-chip";
            chip.dataset.code = cmd.code;

            const isImageBased = cmd.mode === "image_based";
            const badgeText = isImageBased ? "על תמונה שלכם" : "מאפס, מנושא";
            const badgeClass = isImageBased ? "badge-image-based" : "badge-text-based";

            chip.innerHTML = `
              <div class="command-chip-header">
                <span class="command-code">${cmd.code}</span>
                <span class="command-target-badge ${badgeClass}">${badgeText}</span>
              </div>
              <p class="command-desc">${cmd.desc}</p>
            `;

            chip.addEventListener("click", () => {
              let currentCmds = userVariables[promptId]["SELECTED_COMMANDS"] || [];
              if (currentCmds.includes(cmd.code)) {
                currentCmds = currentCmds.filter(c => c !== cmd.code);
              } else {
                currentCmds.push(cmd.code);
              }
              userVariables[promptId]["SELECTED_COMMANDS"] = currentCmds;
              renderSelectedBar();
              updateChipsState();
              updateCodePreview();
            });

            chipsGrid.appendChild(chip);
          });

          catBlock.appendChild(chipsGrid);
          catalogContainer.appendChild(catBlock);
        });

        updateChipsState();
      };

      variablesForm.appendChild(catalogContainer);

      // Initial renders
      renderSelectedBar();
      renderCatalogCategories();

    } else if (promptId === "branding_headshots") {
      // Helper Banner
      const helperBanner = document.createElement("div");
      helperBanner.className = "var-helper-badge";
      helperBanner.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
        <span>מערכת הנדסת פרומפטים לתמונות תדמית: התאמה מגדרית, מפרט טקסטיל מוחשי ודירקטיבות תאורה ועדשות</span>
      `;
      variablesForm.appendChild(helperBanner);

      // 1. Gender & Hair / Head-covering Selection
      const genderGroup = document.createElement("div");
      genderGroup.className = "var-input-group";
      const currentGender = userVariables[promptId]["GENDER"] || "woman_covered";
      
      genderGroup.innerHTML = `
        <label>1. הגדרת מגדר וסממני זהות / שיער (בסיס אנטומי וסממני דמות)</label>
        <div class="mode-toggle-group cols-3">
          <button type="button" class="mode-btn ${currentGender === 'woman_covered' ? 'active' : ''}" data-gender="woman_covered">
            🧕 אישה (כיסוי ראש צנוע)
          </button>
          <button type="button" class="mode-btn ${currentGender === 'woman_styled' ? 'active' : ''}" data-gender="woman_styled">
            👩 אישה (שיער מעוצב פזור)
          </button>
          <button type="button" class="mode-btn ${currentGender === 'man' ? 'active' : ''}" data-gender="man">
            👨 גבר (חליפה וסממנים גבריים)
          </button>
        </div>
      `;
      variablesForm.appendChild(genderGroup);

      // 2. Scenario & Concept Preset Selection
      const scenarioGroup = document.createElement("div");
      scenarioGroup.className = "var-input-group";
      const currentScenario = userVariables[promptId]["SCENARIO"] || "3d_letters";
      scenarioGroup.innerHTML = `
        <label for="input-SCENARIO">2. קונספט וסביבת הצילום (קומפוזיציה ותפאורה)</label>
        <select id="input-SCENARIO" class="steps-count-select">
          <option value="3d_letters" ${currentScenario === '3d_letters' ? 'selected' : ''}>🔤 אותיות 3D ענקיות מזהב 18K וקריסטל (Zen-Tech Studio - דוגמאות 6, 7, 8)</option>
          <option value="marble_table" ${currentScenario === 'marble_table' ? 'selected' : ''}>🏛️ שולחן שיש קררה לבן, פירות/מוצרים וכיתוב זהב חרוט (דוגמאות 1, 2)</option>
          <option value="open_executive_office" ${currentScenario === 'open_executive_office' ? 'selected' : ''}>🏢 משרד מנהלים מרווח ומואר - ללא שולחן מפריד לפתיחות (דוגמה 3)</option>
          <option value="linkedin_headshot" ${currentScenario === 'linkedin_headshot' ? 'selected' : ''}>💼 הדשוט סמכותי ומנהיגותי ל-LinkedIn בזווית נמוכה קלה (דוגמה 4)</option>
          <option value="social_avatar" ${currentScenario === 'social_avatar' ? 'selected' : ''}>📱 תמונת פרופיל סטודיו מוארת ונקייה לרשתות חברתיות (דוגמה 5)</option>
          <option value="executive_lounge" ${currentScenario === 'executive_lounge' ? 'selected' : ''}>☕ לאונג' מנהלים יוקרתי עם קיר עץ אקוסטי וסביבת עבודה</option>
          <option value="custom" ${currentScenario === 'custom' ? 'selected' : ''}>✍️ סצנה בהתאמה אישית חופשית (Custom Scenario)</option>
        </select>
      `;
      variablesForm.appendChild(scenarioGroup);

      // Dynamic container for scenario fields
      const scenarioDetailsContainer = document.createElement("div");
      scenarioDetailsContainer.id = "scenario-details-container";
      variablesForm.appendChild(scenarioDetailsContainer);

      const renderScenarioFields = (scen) => {
        scenarioDetailsContainer.innerHTML = "";

        if (scen === "3d_letters") {
          const nameGroup = document.createElement("div");
          nameGroup.className = "var-input-group";
          nameGroup.innerHTML = `
            <label for="input-NAME_TEXT">שם הדמות / המותג המעוצב באותיות 3D מזהב וקריסטל</label>
            <input type="text" id="input-NAME_TEXT" value="${escapeHTML(userVariables[promptId]["NAME_TEXT"] || "Tiferet")}" placeholder="הקלד שם (באנגלית או עברית, למשל: Tiferet)..." />
          `;
          scenarioDetailsContainer.appendChild(nameGroup);
          nameGroup.querySelector("#input-NAME_TEXT").addEventListener("input", (e) => {
            userVariables[promptId]["NAME_TEXT"] = e.target.value;
            updateCodePreview();
          });
        } else if (scen === "marble_table") {
          const textGroup = document.createElement("div");
          textGroup.className = "var-input-group";
          textGroup.innerHTML = `
            <label for="input-ENGRAVED_TEXT">הכיתוב שייחרט באותיות זהב 18K על שולחן השיש</label>
            <input type="text" id="input-ENGRAVED_TEXT" value="${escapeHTML(userVariables[promptId]["ENGRAVED_TEXT"] || 'חג ט\"ו בשבט שמח!')}" placeholder="הקלד את הכיתוב שרוצים שיופיע חרוט בזהב..." />
          `;
          scenarioDetailsContainer.appendChild(textGroup);
          textGroup.querySelector("#input-ENGRAVED_TEXT").addEventListener("input", (e) => {
            userVariables[promptId]["ENGRAVED_TEXT"] = e.target.value;
            updateCodePreview();
          });

          const itemsGroup = document.createElement("div");
          itemsGroup.className = "var-input-group";
          itemsGroup.innerHTML = `
            <label for="input-DISPLAY_ITEMS">סידור פריטים / מוצרים על שולחן השיש (פירות, ירקות או כל פריט מיתוגי)</label>
            <textarea id="input-DISPLAY_ITEMS" rows="2" placeholder="למשל: סידור פירות ט&quot;ו בשבט יוקרתיים, לפטופ יוקרתי, או מוצרי החברה...">${escapeHTML(userVariables[promptId]["DISPLAY_ITEMS"] || "")}</textarea>
          `;
          scenarioDetailsContainer.appendChild(itemsGroup);
          itemsGroup.querySelector("#input-DISPLAY_ITEMS").addEventListener("input", (e) => {
            userVariables[promptId]["DISPLAY_ITEMS"] = e.target.value;
            updateCodePreview();
          });
        } else if (scen === "custom") {
          const customGroup = document.createElement("div");
          customGroup.className = "var-input-group";
          customGroup.innerHTML = `
            <label for="input-CUSTOM_SCENARIO">תיאור סצנה ומיקום בהתאמה אישית</label>
            <textarea id="input-CUSTOM_SCENARIO" rows="2" placeholder="תאר את הרקע, הסביבה והקומפוזיציה המבוקשת...">${escapeHTML(userVariables[promptId]["CUSTOM_SCENARIO"] || "")}</textarea>
          `;
          scenarioDetailsContainer.appendChild(customGroup);
          customGroup.querySelector("#input-CUSTOM_SCENARIO").addEventListener("input", (e) => {
            userVariables[promptId]["CUSTOM_SCENARIO"] = e.target.value;
            updateCodePreview();
          });
        }
      };

      renderScenarioFields(currentScenario);

      scenarioGroup.querySelector("#input-SCENARIO").addEventListener("change", (e) => {
        userVariables[promptId]["SCENARIO"] = e.target.value;
        renderScenarioFields(e.target.value);
        updateCodePreview();
      });

      // 3. Wardrobe & Fabrics (Materials, Not Vibes - Rule 1)
      const wardrobeGroup = document.createElement("div");
      wardrobeGroup.className = "var-input-group";
      
      wardrobeGroup.innerHTML = `
        <label for="input-WARDROBE_STYLE">3. מפרט טקסטיל וגזרה מגדרית (Materials Specification)</label>
        <select id="input-WARDROBE_STYLE" class="steps-count-select"></select>
        <div id="custom-wardrobe-container" style="display: none; margin-top: 0.5rem;">
          <textarea id="input-CUSTOM_WARDROBE" rows="2" placeholder="תאר את סוג האריג, הצבעים וגזרת הלבוש (למשל: Navy blue wool blazer, crisp white poplin shirt)...">${escapeHTML(userVariables[promptId]["CUSTOM_WARDROBE"] || "")}</textarea>
        </div>
      `;
      variablesForm.appendChild(wardrobeGroup);

      const wardrobeSelect = wardrobeGroup.querySelector("#input-WARDROBE_STYLE");
      const customWardrobeContainer = wardrobeGroup.querySelector("#custom-wardrobe-container");
      const customWardrobeInput = wardrobeGroup.querySelector("#input-CUSTOM_WARDROBE");

      const populateWardrobeOptions = (gender) => {
        wardrobeSelect.innerHTML = "";
        let options = [];

        if (gender === "man") {
          options = [
            { val: "tailored_business", text: "👔 מחויט עסקי קלאסי (חליפת צמר כהה, חולצה מכופתרת לבנה צחורה מכותנה פופלין)" },
            { val: "tailored_contrast", text: "🕶️ High-Contrast יוקרתי (חולצה לבנה מכופתרת תחת בלייזר שחור מחויט ומכנסי גרפיט)" },
            { val: "smart_casual", text: "👕 סמארט קז'ואל מפשתן (חולצת פשתן חומה/לבנה באריג טבעי, בלייזר קליל ומכנסי צ'ינו)" },
            { val: "healthtech_clinical", text: "🩺 רפואי / HealthTech (חלוק רופאים לבן מגוהץ עם צווארון חד או סקראבס נייבי יוקרתיים)" },
            { val: "luxury_gala", text: "✨ ערב יוקרתי ואירועי גאלה (טוקסידו שחור עם דשי סאטן מבריקים ועניבת פרפר)" },
            { val: "custom", text: "✍️ לבוש בהתאמה אישית (הקלד חופשי)" }
          ];
        } else if (gender === "woman_styled") {
          options = [
            { val: "tailored_feminine_cinched", text: "👑 חליפה נשית מחוטבת עם מותן מודגשת (Chic Contoured Waist - גזרה נשית מחמיאה)" },
            { val: "tailored_contrast", text: "🕶️ High-Contrast נשי מחוטב (טופ משי נשפך ובלייזר שנהב בגזרה נשית מותאמת)" },
            { val: "chanel_tweed", text: "✨ ז'קט שאנל / טוויד פריזאי יוקרתי וכפתורי פנינה (ללא דשים גבריים - Chanel-Style Tweed)" },
            { val: "silk_feminine_suit", text: "🌸 חליפת מכנסיים נשית עם חולצת משי נשפכת (Fluid Silk Drape & Soft Shoulders)" },
            { val: "smart_casual", text: "👕 סמארט קז'ואל נשי מפשתן ומשי (טופ משי ובלייזר פשתן רך בגוון אבן)" },
            { val: "healthtech_clinical", text: "🩺 רפואי / HealthTech בגזרה נשית מותאמת (חלוק רופאה מותאם גוף או סקראבס מעוצבים)" },
            { val: "luxury_gala", text: "💎 ערב יוקרתי ואירועי גאלה (שמלת ערב מרהיבה עם טקסטורות עשירות וגזרה נשית)" },
            { val: "custom", text: "✍️ לבוש בהתאמה אישית (הקלד חופשי)" }
          ];
        } else {
          // woman_covered
          options = [
            { val: "tailored_contrast", text: "🕶️ High-Contrast נשי מחוטב (שמלה שחורה צנועה זורמת ובלייזר שנהב מותאם לגוף)" },
            { val: "tailored_feminine_cinched", text: "👑 חליפה נשית צנועה מחוטבת (Feminine Cinched Suit - תפרי פרינסס וגזרה נשית)" },
            { val: "chanel_tweed", text: "✨ ז'קט שאנל / טוויד פריזאי יוקרתי וכפתורי פנינה (ללא דשים גבריים מעל שמלה שחורה)" },
            { val: "smart_casual", text: "👕 סמארט קז'ואל נשי איכותי (שמלת פשתן ארוכה ובלייזר אבן/שנהב עם כיסוי ראש הרמוני)" },
            { val: "healthtech_clinical", text: "🩺 רפואי / HealthTech בגזרה נשית מותאמת (חלוק רופאה מותאם גוף מעל שמלה אלגנטית)" },
            { val: "luxury_gala", text: "💎 ערב יוקרתי ואירועי גאלה (שמלת ערב צנועה יוקרתית עם טקסטורות עשירות ובלייזר שנהב מעודן)" },
            { val: "custom", text: "✍️ לבוש בהתאמה אישית (הקלד חופשי)" }
          ];
        }

        const currentVal = userVariables[promptId]["WARDROBE_STYLE"] || "tailored_contrast";
        options.forEach(opt => {
          const el = document.createElement("option");
          el.value = opt.val;
          el.innerText = opt.text;
          if (opt.val === currentVal) el.selected = true;
          wardrobeSelect.appendChild(el);
        });

        customWardrobeContainer.style.display = wardrobeSelect.value === "custom" ? "block" : "none";
      };

      populateWardrobeOptions(currentGender);

      wardrobeSelect.addEventListener("change", (e) => {
        userVariables[promptId]["WARDROBE_STYLE"] = e.target.value;
        customWardrobeContainer.style.display = e.target.value === "custom" ? "block" : "none";
        updateCodePreview();
      });

      customWardrobeInput.addEventListener("input", (e) => {
        userVariables[promptId]["CUSTOM_WARDROBE"] = e.target.value;
        updateCodePreview();
      });

      // Gender button click handlers
      genderGroup.querySelectorAll(".mode-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          genderGroup.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          const selectedGender = btn.dataset.gender;
          userVariables[promptId]["GENDER"] = selectedGender;
          populateWardrobeOptions(selectedGender);
          updateCodePreview();
        });
      });

      // 4. Camera Lens & Aesthetics (Rule 4 from images)
      const lensGroup = document.createElement("div");
      lensGroup.className = "var-input-group";
      const currentLens = userVariables[promptId]["CAMERA_LENS"] || "85mm";
      lensGroup.innerHTML = `
        <label for="input-CAMERA_LENS">4. מפרט אופטי ועומק שדה (Focal Length & Lens Aesthetics)</label>
        <select id="input-CAMERA_LENS" class="steps-count-select">
          <option value="85mm" ${currentLens === '85mm' ? 'selected' : ''}>📷 85mm f/1.8 – הברירת-מחדל המושלמת לפורטרט מחמיא והפרדת רקע רכה (Blooming Bokeh)</option>
          <option value="100mm" ${currentLens === '100mm' ? 'selected' : ''}>🔍 100mm f/1.4 – תקריב פנים הדוק ל-LinkedIn ופוקוס חד על העיניים (Extreme Detail)</option>
          <option value="50mm" ${currentLens === '50mm' ? 'selected' : ''}>🌿 50mm f/1.8 – מראה תיעודי, טבעי ונקי ללא עיוותי פרספקטיבה (Documentary Clean)</option>
          <option value="35mm" ${currentLens === '35mm' ? 'selected' : ''}>📱 35mm – יומיומי ואותנטי, לכידת סביבת העבודה הרחבה</option>
          <option value="camera_roll"  ${currentLens === 'camera_roll' ? 'selected' : ''}>📸 סגנון דוקומנטרי אותנטי (Handheld / Camera Roll Aesthetic)</option>
        </select>
      `;
      variablesForm.appendChild(lensGroup);

      lensGroup.querySelector("#input-CAMERA_LENS").addEventListener("change", (e) => {
        userVariables[promptId]["CAMERA_LENS"] = e.target.value;
        updateCodePreview();
      });

      // 5. Directional Lighting (Rule 2 from images)
      const lightingGroup = document.createElement("div");
      lightingGroup.className = "var-input-group";
      const currentLighting = userVariables[promptId]["LIGHTING"] || "softbox_rim";
      lightingGroup.innerHTML = `
        <label for="input-LIGHTING">5. ארכיטקטורת תאורה וכיווניות צללים (Directional Lighting Architecture)</label>
        <select id="input-LIGHTING" class="steps-count-select">
          <option value="softbox_rim" ${currentLighting === 'softbox_rim' ? 'selected' : ''}>💡 סופט-בוקס סטודיו ממוקד ותאורת שוליים מוזהבת (Dedicated Soft-Box & Golden Rim Light)</option>
          <option value="window_leaf" ${currentLighting === 'window_leaf' ? 'selected' : ''}>🪟 אור חלון טבעי מהצד עם צללים שבורים אותנטיים (Soft window light casting leaf-like shadows)</option>
          <option value="sun_drenched" ${currentLighting === 'sun_drenched' ? 'selected' : ''}>☀️ אור יום טבעי שוטף וקרני שמש עדינות (Sun-drenched natural daylight)</option>
          <option value="high_key_shadowless" ${currentLighting === 'high_key_shadowless' ? 'selected' : ''}>⚡ High-Key Studio זוהר ונקי ללא צללים (Radiant shadowless high-key)</option>
        </select>
      `;
      variablesForm.appendChild(lightingGroup);

      lightingGroup.querySelector("#input-LIGHTING").addEventListener("change", (e) => {
        userVariables[promptId]["LIGHTING"] = e.target.value;
        updateCodePreview();
      });

      // 6. Realism & Skin Texture Mode (Rule 3 from images)
      const realismGroup = document.createElement("div");
      realismGroup.className = "var-input-group";
      const currentRealism = userVariables[promptId]["REALISM_MODE"] || "authentic_skin";
      realismGroup.innerHTML = `
        <label>6. דירקטיבת אותנטיות אנושית (עור טבעי מול מונחי באזז)</label>
        <div class="mode-toggle-group cols-2">
          <button type="button" class="mode-btn ${currentRealism === 'authentic_skin' ? 'active' : ''}" data-realism="authentic_skin">
            🌿 ריאליזם אותנטי (נקבוביות עור, פגמים טבעיים)
          </button>
          <button type="button" class="mode-btn ${currentRealism === 'polished_studio' ? 'active' : ''}" data-realism="polished_studio">
            💎 סטודיו מלוטש והיי-אנד (8K Masterpiece Style)
          </button>
        </div>
      `;
      variablesForm.appendChild(realismGroup);

      realismGroup.querySelectorAll(".mode-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          realismGroup.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          userVariables[promptId]["REALISM_MODE"] = btn.dataset.realism;
          updateCodePreview();
        });
      });

      // 7. Action Mode: Generate vs Edit (Rule 5 from images: Edit, Don't Regenerate)
      const actionGroup = document.createElement("div");
      actionGroup.className = "var-input-group";
      const currentAction = userVariables[promptId]["ACTION_MODE"] || "generate";
      actionGroup.innerHTML = `
        <label>7. מצב פעולה (יצירה חדשה / עריכה נקודתית)</label>
        <div class="mode-toggle-group cols-2">
          <button type="button" class="mode-btn ${currentAction === 'generate' ? 'active' : ''}" data-action="generate">
            ✨ יצירת תמונה חדשה מאפס
          </button>
          <button type="button" class="mode-btn ${currentAction === 'edit' ? 'active' : ''}" data-action="edit">
            🎯 הוראת עריכה נקודתית (שימור 100% קיים)
          </button>
        </div>
        <div id="edit-instruction-container" style="display: ${currentAction === 'edit' ? 'block' : 'none'}; margin-top: 0.75rem;">
          <label for="input-EDIT_INSTRUCTION" style="color: var(--primary-teal);">מה ברצונך לשנות בתמונה הקיימת? (make no other changes)</label>
          <input type="text" id="input-EDIT_INSTRUCTION" value="${escapeHTML(userVariables[promptId]["EDIT_INSTRUCTION"] || "change blazer color to deep midnight navy")}" placeholder="למשל: change blazer color to emerald green או add warm gentle smile..." />
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">מתודולוגיית עריכה נקודתית: שימור מלא של תווי הפנים, התאורה והקומפוזיציה, תוך יישום שינוי ממוקד ויחיד.</p>
        </div>
      `;
      variablesForm.appendChild(actionGroup);

      const editContainer = actionGroup.querySelector("#edit-instruction-container");
      const editInput = actionGroup.querySelector("#input-EDIT_INSTRUCTION");

      actionGroup.querySelectorAll(".mode-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          actionGroup.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          const mode = btn.dataset.action;
          userVariables[promptId]["ACTION_MODE"] = mode;
          editContainer.style.display = mode === "edit" ? "block" : "none";
          updateCodePreview();
        });
      });

      editInput.addEventListener("input", (e) => {
        userVariables[promptId]["EDIT_INSTRUCTION"] = e.target.value;
        updateCodePreview();
      });

      // 8. Aspect Ratio Selection
      const arGroup = document.createElement("div");
      arGroup.className = "var-input-group";
      const currentAR = userVariables[promptId]["ASPECT_RATIO"] || "1:1";
      arGroup.innerHTML = `
        <label>8. יחס גובה-רוחב (Aspect Ratio)</label>
        <div class="ar-toggle-group" style="grid-template-columns: repeat(4, 1fr);">
          <button type="button" class="ar-btn ${currentAR === '1:1' ? 'active' : ''}" data-ar="1:1">
            <span class="ar-icon">1:1</span>
            <span class="ar-label">ריבוע / פרופיל</span>
          </button>
          <button type="button" class="ar-btn ${currentAR === '4:5' ? 'active' : ''}" data-ar="4:5">
            <span class="ar-icon">4:5</span>
            <span class="ar-label">פורטרט / פיד</span>
          </button>
          <button type="button" class="ar-btn ${currentAR === '9:16' ? 'active' : ''}" data-ar="9:16">
            <span class="ar-icon">9:16</span>
            <span class="ar-label">לאורך / סטורי</span>
          </button>
          <button type="button" class="ar-btn ${currentAR === '16:9' ? 'active' : ''}" data-ar="16:9">
            <span class="ar-icon">16:9</span>
            <span class="ar-label">לרוחב / אתר</span>
          </button>
        </div>
      `;
      variablesForm.appendChild(arGroup);

      arGroup.querySelectorAll(".ar-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          arGroup.querySelectorAll(".ar-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          userVariables[promptId]["ASPECT_RATIO"] = btn.dataset.ar;
          updateCodePreview();
        });
      });

    } else if (prompt.variables.length === 0) {
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
        
        const currentValue = userVariables[promptId][variable.id] || "";

        const isLogoPrompt = (promptId === "ai_logo" || promptId === "ai_logo_strategy" || promptId === "ai_logo_direct");
        const hasPreset = (
          (isLogoPrompt && ["LOGO_STYLE", "COLOR_PALETTE", "BUSINESS_FIELD", "BRAND_VALUES", "VISUAL_ELEMENTS"].includes(variable.id)) ||
          (!isLogoPrompt && ["COLOR_PALETTE", "TARGET_AUDIENCE", "DESIGN_STYLE", "DEPTH_LEVEL"].includes(variable.id))
        );

        if (hasPreset) {
          const selectElement = document.createElement("select");
          selectElement.className = "steps-count-select";
          selectElement.style.marginBottom = "0.5rem";
          
          let presetOptions = [];
          if (isLogoPrompt) {
            if (variable.id === "LOGO_STYLE") {
              presetOptions = [
                { name: "בחר סגנון עיצובי ללוגו...", value: "" },
                { name: "✨ סמל מינימליסטי גיאומטרי (Flat Minimal Geometric - שטוח, מדויק ואייקוני)", value: "Minimalist Geometric & Smart Negative Space: סמל גיאומטרי שטוח, מודרני ונקי, עם מטאפורה חכמה וחלל שלילי המשלב בין דופק/גל לבבי לבין מגן ביטחון וצמיחה" },
                { name: "💡 סמל חכם עם חלל שלילי ומטאפורה כפולה (Clever Negative Space & Dual Metaphor)", value: "Smart Negative Space & Clever Dual Metaphor: שילוב מתוחכם בין שתי משמעויות בתוך סילואט נקי ובלתי נשכח המייצר אפקט WOW מידי" },
                { name: "👑 מונוגרם אותיות יוקרתי (Luxury Monogram Lettermark - שילוב אותיות המותג)", value: "Luxury Monogram Lettermark: שזירה אמנותית של ראשי התיבות של המותג בקווי פרימיום מעודנים ואלגנטיות יוקרתית" },
                { name: "✒️ קו אחד רציף מינימליסטי (Continuous Single-Line Art - זורם ואורגני)", value: "Continuous Single-Line Art: קו וקטורי יחיד ורציף היוצר צורה זורמת, אורגנית, הרמונית ומעודנת ביותר" },
                { name: "🛡️ אמבלם מודרני ותגית טכנולוגית (Modern Tech Emblem & Badge - יציב וסמכותי)", value: "Modern Tech Emblem & Badge: סמל גיאומטרי סגור ומאוזן, בעל נוכחות סמכותית ומראה דיגיטלי מתקדם לשנת 2026" },
                { name: "🔤 לוגו טיפוגרפי נקי ומובחן (Clean Modern Wordmark - פונט ייחודי וקריא)", value: "Clean Modern Wordmark: טיפוגרפיה גיאומטרית בהתאמה אישית, חיתוכי אותיות ייחודיים ופוקוס מלא על שם המותג" },
                { name: "✍️ מותאם אישית (הקלד מלל חופשי בשדה למטה)", value: "custom" }
              ];
            } else if (variable.id === "COLOR_PALETTE") {
              presetOptions = [
                { name: "בחר פלטת צבעים...", value: "" },
                { name: "🩺 כחול קליני עמוק וטורקיז רפואי (אמינות, ביטחון וחדשנות דיגיטלית)", value: "Clinical Deep Blue & Luminous Cyan: כחול כהה עמוק (#0B192C) המסמל אמינות וסמכות, וטורקיז-ציאן זוהר (#00CBCB) המסמל חדשנות דיגיטלית וחיות" },
                { name: "✨ שחור פחם וזהב מוברש (יוקרה עילאית, פרמיום ואלגנטיות מוקפדת)", value: "Luxury Charcoal & Brushed Gold: שחור פחם עמוק (#121212), זהב מוברש יוקרתי (#D4AF37), ונגיעות שמפניה בהירות" },
                { name: "🌿 ירוק מרווה וגווני אדמה (טבע, בריאות, צמיחה והרמוניה אורגנית)", value: "Sage Green & Warm Earth: ירוק מרווה מרגיע (#6B8E7B), טרקוטה חמימה (#C87D55), וגוון פשתן בהיר (#FAF9F6)" },
                { name: "⚡ סגול עמוק וציאן ניאון (חדשנות עתידנית, בינה מלאכותית ו-High-Tech)", value: "Deep Violet & Neon Cyan: סגול לילה עמוק (#140C24), תכלת ניאון זוהר (#22D3EE), וסגול אולטרה-ויולט (#A855F7)" },
                { name: "🖤 מונוכרום שחור-לבן מינימליסטי (על-זמני, עוצמתי ונקי מכל הסחת דעת)", value: "Timeless Monochrome: שחור מלא אבסולוטי (#000000) על גבי לבן צח ונקי (#FFFFFF), מקסימום ניגודיות וסילואט אייקוני" },
                { name: "🔥 כתום שקיעה ואינדיגו (יצירתיות, אנרגיה ותעוזה עסקית)", value: "Sunset Orange & Deep Indigo: כתום אנרגטי חם (#F97316), כחול אינדיגו עמוק וסמכותי (#1E1B4B), ולבן בוהק" },
                { name: "🚨 כחול נייבי כהה ואדום נועז (נוכחות חדה, סמכות ועוצמה)", value: "Navy Blue & Bold Accent Red: כחול כהה סמכותי (#0F172A), לבן נקי, ואדום בוהק (#EF4444) להדגשה חדה" },
                { name: "✍️ מותאם אישית (הקלד מלל חופשי בשדה למטה)", value: "custom" }
              ];
            } else if (variable.id === "VISUAL_ELEMENTS") {
              presetOptions = [
                { name: "בחר קטגוריית סמלים ואלמנטים ויזואליים...", value: "" },
                { name: "🩺 רפואה, בריאות וחיים (Health, Care & Medical) - ללא קלישאות נדושות", value: "רפואה, בריאות וחיים: גל דופק אלגנטי, צורת מגן צמיחה, מבנה תא/מולקולה מודרני, או צללית לב מינימליסטית (ללא קלישאות גנריות, ללא סטטוסקופים נדושים וללא צללים כבדים)" },
                { name: "🚀 טכנולוגיה, דאטה וחדשנות (Tech, Data & Digital Innovation)", value: "טכנולוגיה, דאטה וחדשנות: צמתים מחוברים, קו זרימה דיגיטלי, סמל אינסוף גיאומטרי, פיקסל/קובייה מודרנית (קווים נקיים, מינימליסטיים וסילואט מובהק)" },
                { name: "🌿 צמיחה, טבע וקיימות (Nature, Growth & Organic Harmony)", value: "צמיחה, טבע וקיימות: ניצן/עלה עדין, גל מים זורם, שמש מינימליסטית או קווים אורגניים רכים בהרמוניה גיאומטרית נקייה" },
                { name: "💎 יוקרה, איכות עילית ובלעדיות (Luxury, Prestige & Fine Craft)", value: "יוקרה ואיכות עילית: קריסטל גיאומטרי, חיתוך יהלום שטוח, כתר מינימליסטי מעודן או אלמנט אדריכלי מאופק ומלוטש" },
                { name: "📐 צורות גיאומטריות טהורות ומופשטות (Abstract & Pure Geometry)", value: "צורות גיאומטריות מופשטות: מעגלים שזורים, חיתוך זוויתי מדויק, משולשים יציבים והרמוניה אופטית נקייה ללא סמלים פיגורטיביים" },
                { name: "🔤 מונוגרם אותיות בלבד ללא סמל פיגורטיבי (Monogram / Letters Only)", value: "מונוגרם אותיות בלבד: שזירה טיפוגרפית של ראשי התיבות של המותג בקווי פרימיום מדויקים ללא שום סמל או איור נלווה" },
                { name: "💼 עסקים, פיננסים וניהול אסטרטגי (Business, Finance & Strategic Growth)", value: "עסקים, פיננסים וצמיחה: עמודת צמיחה מינימליסטית, עוגן יציבות, מבנה מגן מודרני או חץ משולב בחלל שלילי מתוחכם" },
                { name: "✍️ אחר / התאמה אישית (הקלד אלמנטים חופשיים בשדה למטה)", value: "custom" }
              ];
            } else if (variable.id === "BUSINESS_FIELD") {
              presetOptions = [
                { name: "בחר תחום פעילות לדוגמה או הקלד חופשי...", value: "" },
                { name: "🩺 סטארטאפ בריאות דיגיטלית ובינה מלאכותית (HealthTech & AI Diagnostics)", value: "פלטפורמת בינה מלאכותית לניטור מדדים רפואיים וחיזוי בריאותי מותאם אישית למטופלים ומרפאות" },
                { name: "🏥 מרכז רפואי, קליניקה פרטית או מרפאת מומחים", value: "מרפאת מומחים רב-תחומית המעניקה רפואה מותאמת אישית, שירות מקצועי מתקדם וחוויית מטופל מרגיעה ובטוחה" },
                { name: "🚀 חברת תוכנה, פלטפורמת SaaS וטכנולוגיית ענן", value: "חברת תוכנה המספקת פתרונות אוטומציה מבוססי ענן וניהול נתונים חכם לעסקים וארגונים גלובליים" },
                { name: "✨ מותג יוקרה, עיצוב פרימיום ואירוח", value: "מותג בוטיק יוקרתי המציע מוצרי עיצוב, אופנה ואירוח ברמת גימור עילאית ובלעדית" },
                { name: "🌿 מותג וולנס, תזונה בריאה ואורח חיים", value: "מיזם בריאות ואורח חיים טבעי המציע תוספי תזונה, סדנאות ואימונים מבוססי מדע לגוף ולנפש" },
                { name: "💼 פירמת ייעוץ עסקי, פיננסים ופינטק", value: "פירמה לייעוץ אסטרטגי, פתרונות פינטק וניהול השקעות מתקדם ליזמים וחברות צמיחה" },
                { name: "✍️ מותאם אישית (הקלד מלל חופשי בשדה למטה)", value: "custom" }
              ];
            } else if (variable.id === "BRAND_VALUES") {
              presetOptions = [
                { name: "בחר שילוב ערכים או הקלד חופשי...", value: "" },
                { name: "🛡️ אמינות, חדשנות פורצת דרך וביטחון קליני", value: "אמינות קלינית ללא פשרות, חדשנות טכנולוגית פורצת דרך, אופטימיות, חמימות ופשטות שמעניקה שקט נפשי" },
                { name: "👑 יוקרה, אלגנטיות, בלעדיות ומצוינות עילית", value: "יוקרה מאופקת, אלגנטיות מוקפדת, בלעדיות, דיוק חסר פשרות ומצוינות ברמה הגבוהה ביותר" },
                { name: "💡 פשטות, נגישות, ידידותיות ושקיפות מלאה", value: "פשטות אינטואיטיבית, שקיפות, יחס אישי חם, נגישות בגובה העיניים וחוויית משתמש נטולת מאמץ" },
                { name: "⚡ תעוזה, יצירתיות, אנרגיה ודינמיות מהפכנית", value: "תעוזה עסקית, חשיבה מחוץ לקופסה, אנרגיה סוחפת, דינמיות מתמדת וחדשנות משבשת" },
                { name: "✍️ מותאם אישית (הקלד מלל חופשי בשדה למטה)", value: "custom" }
              ];
            }
          } else {
            if (variable.id === "TARGET_AUDIENCE") {
              presetOptions = [
                { name: "בחר קהל יעד...", value: "" },
                { name: "📢 אוכלוסייה כללית וקהל רחב (הדרכות כלליות, הרצאות וקידום מודעות)", value: "General Public & Broad Community: Accessible, highly engaging language, relatable analogies, clear visual hierarchy, clear educational structure, and empowering call-to-action." },
                { name: "🎓 עובדים, חניכים ומשתתפי סדנה / הדרכה (למידה ופיתוח מקצועי)", value: "Trainees, Employees & Workshop Participants: Practical instructional focus, actionable takeaways, step-by-step guidance, clear operational structure, and skill-building emphasis." },
                { name: "🩺 צוותים קליניים ורופאים (קרדיולוגים, רופאי משפחה, אחיות מוסמכות)", value: "Healthcare & Clinical Staff (Physicians, Specialists, Nurses): Focus on anatomical accuracy, evidence-based data tables, clinical trial metrics, structured protocol workflows, and authoritative professional tone." },
                { name: "💚 מטופלים, בני משפחותיהם ומתמודדים", value: "Patients & Families: Focus on anxiety reduction, plain language formatting, warm empathetic tone, clear step-by-step visual guidance, and relatable friendly visual metaphors." },
                { name: "🚀 מנהלים בכירים, משקיעים ודירקטוריון (Execs & Investors)", value: "Executives & Investors: Focus on market ROI, strategic value proposition, scalable product architecture, high-impact key metrics, and strategic launch roadmap." },
                { name: "✍️ מותאם אישית (הקלד מלל חופשי בשדה למטה)", value: "custom" }
              ];
            } else if (variable.id === "DEPTH_LEVEL") {
              presetOptions = [
                { name: "בחר רמת פירוט...", value: "" },
                { name: "⚡ תמציתי וממוקד (נקודות מפתח, מדדים בולטים ומסרים קצרים - להצגה פרונטלית)", value: "High-Level Executive Highlights: Concise, punchy, low-text presentation format designed for live presentation. Limit text to max 15-20 words per card/slide component. Feature giant key metrics (e.g. 85%, 3.5X, $10M+), bold single-sentence takeaways, and powerful visual anchors that the speaker can elaborate on orally." },
                { name: "📘 פירוט מעמיק ומקיף (הסברים מלאים, דוגמאות מפורטות והקשר רחב - לקריאה עצמאית ולמידה)", value: "Comprehensive Deep Dive: Rich, fully fleshed-out self-contained instructional content designed for asynchronous reading and self-paced study. Provide thorough explanatory text, structured sub-points, detailed real-world examples, comprehensive context, and complete educational takeaways on every slide." },
                { name: "✍️ מותאם אישית (הקלד מלל חופשי בשדה למטה)", value: "custom" }
              ];
            } else if (variable.id === "DESIGN_STYLE") {
              presetOptions = [
                { name: "בחר סגנון עיצובי...", value: "" },
                { name: "🔥 סגנון WOW שיווקי מטורף (High-Impact Visual Drama, Vivid & 3D Floating Assets)", value: "High-Impact Cinematic WOW & 3D Visual Drama: STRICTLY NO PLAIN WHITE SLIDES! Master dark atmospheric backdrops (Dark Obsidian #090d16 / Deep Charcoal) with luminous gradient meshes and subtle depth texturing. Feature photorealistic 3D floating visual elements (isometric icons, floating glass spheres, glowing symbols) embedded into slide backgrounds. Use glassmorphism bento containers, high-contrast visual focal points, bold headline typography (50pt+), and dynamic asymmetrical layouts designed to deliver a jaw-dropping, unforgettable 10x presentation experience." },
                { name: "👑 יוקרתי, סמכותי ומנהלי (Luxury Executive & Editorial Masterclass)", value: "Luxury Executive & Editorial Masterclass: Ultra-premium publication aesthetic. Rich dark monochromatic or deep slate surfaces accented with metallic foil highlights (brushed gold/bronze/champagne). Elegant serif and clean geometric typography, generous negative space, subtle surface shadows, and magazine-worthy layout composition." },
                { name: "🚀 טכנולוגי מודרני בנטו גריד (Futuristic Bento Grid & Modern Tech)", value: "Futuristic Bento Grid & Digital Tech: 2026 Bento Grid architecture with sleek rounded containers (border-radius 16px), subtle glass reflection panels, glowing digital indicators, crisp sans-serif typography, UI dashboard visualizers, and streamlined modern tech aesthetic." },
                { name: "🔬 מדעי, קליני ואקדמי מובנה (Structured Academic & Scientific Rigor)", value: "Structured Academic & Scientific Rigor: High-precision publication aesthetic. Rigid structured grid layout, crisp data callout cards, step-by-step flowchart diagrams, integrated diagram callouts, evidence comparison tables, and WCAG AAA accessibility." },
                { name: "💚 חם, אמפתי ואורגני (Warm Empathetic & Organic Care)", value: "Warm Empathetic & Organic: Reassuring low-stress visual atmosphere. Soft organic rounded containers, generous negative space, warm comforting illustration style with friendly human features, plain-language formatting, and peaceful visual flow." },
                { name: "✍️ מותאם אישית (הקלד מלל חופשי בשדה למטה)", value: "custom" }
              ];
            } else if (variable.id === "COLOR_PALETTE") {
              presetOptions = [
                { name: "בחר פלטת צבעים...", value: "" },
                { name: "🔥 ניאון זוהר וניגודיות גבוהה (Vivid High-Contrast Neon)", value: "Vivid High-Contrast Neon: Deep obsidian backdrop (#090d16), vibrant neon cyan (#22d3ee), electric purple (#a855f7), and high-contrast glowing accents." },
                { name: "🩺 כחול עמוק וטורקיז רפואי (Clinical Deep Blue & Medical Teal)", value: "Clinical Deep Blue & Medical Teal: Deep navy backdrop (#0a192f), medical teal (#00cbcb), crisp slate secondary accents, and high-contrast text." },
                { name: "✨ זהב יוקרתי וכחול לילה (Luxury Gold & Midnight Navy)", value: "Luxury Gold & Midnight Navy: Deep midnight navy backdrop (#080e1e), brushed metallic gold accents (#d4af37), champagne highlight text, and subtle warm glass surfaces." },
                { name: "🌿 ירוק מרווה וגווני אדמה חמימים (Sage Green & Warm Earth)", value: "Sage Green & Warm Earth: Soft natural linen backdrop (#f7f5f0), sage green (#7a9a85), warm terracotta accents (#c87d55), and soothing organic hues." },
                { name: "⚡ סגול עמוק וטורקיז זוהר (Deep Violet & Luminous Turquoise)", value: "Deep Violet & Luminous Turquoise: Rich dark violet backdrop (#140c24), luminous turquoise (#00f2fe), soft lavender panels, and high-energy highlights." },
                { name: "🚨 כחול כהה ואדום קליני להדגשה (Navy Blue & Clinical Alert Red)", value: "Navy Blue & Clinical Alert Red: Authoritative dark navy background (#0f172a), crisp white structural grids, and high-visibility clinical red accents for urgent metrics." },
                { name: "🖤 מונוכרומטי כהה ואפור פחם (Dark Charcoal Monochromatic & Platinum)", value: "Dark Charcoal Monochromatic & Platinum: Deep charcoal gray backdrop (#121212), platinum white panels, subtle silver borders, and high-contrast slate text." },
                { name: "✍️ מותאם אישית (הקלד מלל חופשי בשדה למטה)", value: "custom" }
              ];
            }
          }
          
          let matched = false;
          presetOptions.forEach(p => {
            const opt = document.createElement("option");
            opt.value = p.value;
            opt.innerText = p.name;
            if (currentValue === p.value && p.value !== "") {
              opt.selected = true;
              matched = true;
            }
            selectElement.appendChild(opt);
          });
          
          if (!matched && currentValue !== "") {
            selectElement.value = "custom";
          }
          
          const textInput = document.createElement("textarea");
          textInput.rows = 2;
          textInput.id = `input-${variable.id}`;
          textInput.value = currentValue;
          textInput.placeholder = variable.placeholder;
          
          selectElement.addEventListener("change", (e) => {
            if (e.target.value === "custom") {
              textInput.value = "";
              textInput.focus();
              userVariables[promptId][variable.id] = "";
            } else {
              textInput.value = e.target.value;
              userVariables[promptId][variable.id] = e.target.value;
            }
            updateCodePreview();
          });
          
          textInput.addEventListener("input", (e) => {
            userVariables[promptId][variable.id] = e.target.value;
            if (!presetOptions.some(p => p.value === e.target.value && p.value !== "custom")) {
              selectElement.value = "custom";
            }
            updateCodePreview();
          });
          
          inputGroup.appendChild(label);
          inputGroup.appendChild(selectElement);
          inputGroup.appendChild(textInput);
          variablesForm.appendChild(inputGroup);
          return;
        }
        
        let inputElement;
        
        // Use textarea for long descriptions, input text for shorter items
        if (variable.id === "CLINICAL_TOPIC" || variable.id === "TECH_NAME" || variable.id === "CLINICAL_PROTOCOL" || variable.id === "VISUAL_ELEMENTS" || variable.id === "BUSINESS_FIELD" || variable.id === "BRAND_VALUES") {
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

    // Scroll smoothly to top since workspace is now the main view
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }

  // Update System Prompt Code Block with highlighted tags
  function updateCodePreview() {
    if (!activePromptId) return;
    const prompt = PROMPTS_DATA.find(p => p.id === activePromptId);
    if (!prompt) return;

    let finalPromptText = prompt.template;
    
    // Replace all placeholders like {CLINICAL_TOPIC} and wrap them with <mark> tags in preview
    let htmlPreviewText = escapeHTML(prompt.template);
    
    if (activePromptId === "gpt_step_image") {
      const topicVal = userVariables["gpt_step_image"]["TOPIC"] || "";
      const countVal = parseInt(userVariables["gpt_step_image"]["STEPS_COUNT"] || "3");
      
      let stepsListText = "";
      let stepsListHtml = "";
      
      for (let i = 1; i <= countVal; i++) {
        const stepVal = userVariables["gpt_step_image"][`step_${i}`] || "";
        stepsListText += `- Step ${i}: ${stepVal}\n`;
        stepsListHtml += `- Step ${i}: <mark>${escapeHTML(stepVal)}</mark>\n`;
      }
      
      // Trim ending newline
      stepsListText = stepsListText.trim();
      stepsListHtml = stepsListHtml.trim();

      // Replace in final text
      finalPromptText = finalPromptText.replaceAll("{TOPIC}", topicVal);
      finalPromptText = finalPromptText.replaceAll("{STEPS_COUNT}", countVal.toString());
      finalPromptText = finalPromptText.replaceAll("{STEPS_LIST}", stepsListText);

      // Replace in HTML preview
      htmlPreviewText = htmlPreviewText.replaceAll("{TOPIC}", `<mark>${escapeHTML(topicVal)}</mark>`);
      htmlPreviewText = htmlPreviewText.replaceAll("{STEPS_COUNT}", `<mark>${countVal}</mark>`);
      htmlPreviewText = htmlPreviewText.replaceAll("{STEPS_LIST}", stepsListHtml);
    } else if (activePromptId === "unique_images") {
      const topicVal = userVariables["unique_images"]["TOPIC"] || "";
      const modeVal = userVariables["unique_images"]["MODE"] || "image_based";
      const audienceVal = userVariables["unique_images"]["AUDIENCE"] || "clinical";
      const selectedCmds = userVariables["unique_images"]["SELECTED_COMMANDS"] || [];

      const cmdText = selectedCmds.join(" ");

      let modeDesc = "";
      if (modeVal === "image_based") {
        modeDesc = "Created as a high-precision visual enhancement based on your reference image, maintaining structural fidelity while revealing concealed inner components.";
      } else {
        modeDesc = "Created from scratch based on the concept topic, synthesizing a clean, highly comprehensive visual representation.";
      }

      let audienceDir = "";
      if (audienceVal === "clinical") {
        audienceDir = "Tailored for clinical staff and physicians: emphasize medical-grade accuracy, anatomical precision, crisp scientific annotations, and professional diagnostic lighting.";
      } else if (audienceVal === "patient") {
        audienceDir = "Tailored for patients and families: warm, comforting, highly reassuring visual presentation, using friendly line art and soft tones, avoiding scary medical textures or anxiety-inducing elements.";
      } else if (audienceVal === "gala_greeting") {
        audienceDir = "Tailored for high-end luxury invitations and celebratory greetings: exquisite typography, premium paper texture, gold foil accents, elegant layout, and warm ambient studio lighting.";
      } else {
        audienceDir = "Tailored for HealthTech innovation & branding: sleek 2026 digital aesthetics, glassmorphism UI elements, premium bento grid layout, and transformative teal accent highlights.";
      }

      const arVal = userVariables["unique_images"]["ASPECT_RATIO"] || "16:9";

      finalPromptText = finalPromptText.replaceAll("{COMMANDS}", cmdText);
      finalPromptText = finalPromptText.replaceAll("{TOPIC}", topicVal);
      finalPromptText = finalPromptText.replaceAll("{MODE_DESCRIPTION}", modeDesc);
      finalPromptText = finalPromptText.replaceAll("{AUDIENCE_DIRECTIVE}", audienceDir);
      finalPromptText = finalPromptText.replaceAll("{ASPECT_RATIO}", arVal);

      htmlPreviewText = htmlPreviewText.replaceAll("{COMMANDS}", `<mark>${escapeHTML(cmdText)}</mark>`);
      htmlPreviewText = htmlPreviewText.replaceAll("{TOPIC}", `<mark>${escapeHTML(topicVal)}</mark>`);
      htmlPreviewText = htmlPreviewText.replaceAll("{MODE_DESCRIPTION}", `<mark>${escapeHTML(modeDesc)}</mark>`);
      htmlPreviewText = htmlPreviewText.replaceAll("{AUDIENCE_DIRECTIVE}", `<mark>${escapeHTML(audienceDir)}</mark>`);
      htmlPreviewText = htmlPreviewText.replaceAll("{ASPECT_RATIO}", `<mark>${escapeHTML(arVal)}</mark>`);
    } else if (activePromptId === "branding_headshots") {
      const vars = userVariables["branding_headshots"];
      const gender = vars["GENDER"] || "woman_covered";
      const scenario = vars["SCENARIO"] || "3d_letters";
      const wardrobeStyle = vars["WARDROBE_STYLE"] || "tailored_contrast";
      const customWardrobe = vars["CUSTOM_WARDROBE"] || "";
      const customScenario = vars["CUSTOM_SCENARIO"] || "";
      const nameText = vars["NAME_TEXT"] || "Tiferet";
      const engravedText = vars["ENGRAVED_TEXT"] || 'חג ט"ו בשבט שמח!';
      const displayItems = vars["DISPLAY_ITEMS"] || "";
      const cameraLens = vars["CAMERA_LENS"] || "85mm";
      const lighting = vars["LIGHTING"] || "softbox_rim";
      const realismMode = vars["REALISM_MODE"] || "authentic_skin";
      const actionMode = vars["ACTION_MODE"] || "generate";
      const editInstruction = vars["EDIT_INSTRUCTION"] || "change blazer color to deep midnight navy";
      const ar = vars["ASPECT_RATIO"] || "1:1";

      if (actionMode === "edit") {
        finalPromptText = `[IMAGE EDIT INSTRUCTION - EDIT, DON'T REGENERATE]: Strictly maintain the exact character identity, facial structure, skin texture, lighting, and core scene composition 100% identical. Make only the following specific modification: "${editInstruction}". Make no other changes.`;
        htmlPreviewText = `<strong>[IMAGE EDIT INSTRUCTION - EDIT, DON'T REGENERATE]:</strong><br><br>Strictly maintain the exact character identity, facial structure, skin texture, lighting, and core scene composition 100% identical.<br><br>Make only the following specific modification: <mark>"${escapeHTML(editInstruction)}"</mark>.<br><br>Make no other changes.`;
      } else {
        // Pronouns & Identity
        let pronounCap = "She";
        let pronounLower = "she";
        let pronounPoss = "her";
        let pronounObj = "her";
        let subjectDesc = "";

        if (gender === "man") {
          pronounCap = "He";
          pronounLower = "he";
          pronounPoss = "his";
          pronounObj = "him";
          subjectDesc = "a man with a sharp, professional appearance and neatly styled hair, strictly maintaining his exact identity and masculine facial features";
        } else if (gender === "woman_styled") {
          subjectDesc = "the character, strictly maintaining her exact identity and facial structure. Her hair is styled in an elegant, polished blowout, framing her face";
        } else {
          // woman_covered
          subjectDesc = "the character, strictly maintaining her exact identity, facial structure, and modest head covering";
        }

        // Realism Prefix (Rule 3 from images)
        let opening = "";
        if (realismMode === "authentic_skin") {
          opening = `A cinematic, authentic photographic portrait of ${subjectDesc}. Natural realistic skin texture with visible pores and subtle natural imperfections for authentic human realism.`;
        } else {
          opening = `A cinematic, hyper-realistic 8K masterpiece portrait of ${subjectDesc}.`;
        }

        // Wardrobe (Materials, Not Vibes - Rule 1 from images)
        let wardrobeText = "";
        if (wardrobeStyle === "custom" && customWardrobe.trim()) {
          wardrobeText = `${pronounCap} wears ${customWardrobe.trim()}.`;
        } else if (gender === "man") {
          switch (wardrobeStyle) {
            case "tailored_business":
              wardrobeText = `He is wearing a classic high-end business ensemble: a crisp, tailored white button-down shirt in fine poplin cotton, tucked into dark charcoal or jet-black tailored trousers, layered under a matching sharp-cut dark navy or black wool blazer.`;
              break;
            case "tailored_contrast":
              wardrobeText = `He wears a sharp high-contrast professional ensemble: a crisp white poplin shirt layered under a structured jet-black tailored blazer with dark charcoal trousers, with rich fabric textures.`;
              break;
            case "smart_casual":
              wardrobeText = `He wears an authentic modern smart-casual outfit: a chocolate brown linen shirt with natural linen fabric weave, paired with tailored stone-colored chinos and a light unconstructed blazer.`;
              break;
            case "healthtech_clinical":
              wardrobeText = `He wears a pristine, tailored medical coat in crisp white twill over a light-blue button-down shirt, projecting clinical authority, warmth, and innovation.`;
              break;
            case "luxury_gala":
              wardrobeText = `He wears an ultra-luxurious tailored black tuxedo with satin peak lapels, a crisp pleated white tuxedo shirt, and a classic black silk bow tie.`;
              break;
            default:
              wardrobeText = `He wears a tailored dark blazer over a crisp white button-down shirt with fine fabric textures.`;
          }
        } else if (gender === "woman_styled") {
          switch (wardrobeStyle) {
            case "tailored_feminine_cinched":
              wardrobeText = `She wears an exquisitely tailored feminine suit: a chic, tailored feminine blazer with an elegant contoured waistline (cinched waist), delicate princess seams, and softer natural shoulders, paired with high-waisted tailored trousers and a soft silk blouse, strictly avoiding boxy or masculine cuts.`;
              break;
            case "tailored_contrast":
              wardrobeText = `She wears an effortlessly chic feminine ensemble: a soft, fluid black silk camisole top with a graceful drape, layered under a bespoke ivory blazer featuring a contoured feminine waistline (cinched waist), slender curved lapels, and feminine shoulder lines, paired with high-waisted tailored trousers (strictly avoiding boxy or masculine suit cuts).`;
              break;
            case "chanel_tweed":
              wardrobeText = `She wears an iconic luxury Chanel-style collarless tweed jacket in cream and gold weave with delicate pearl buttons, worn over a fine black silk top and tailored trousers—classic, glamorous, and purely feminine.`;
              break;
            case "silk_feminine_suit":
              wardrobeText = `She wears an elegant modern feminine suit: a fluid, lustrous silk blouse with delicate draped gathers, layered under a chic feminine jacket with softly sculpted shoulders and tailored slim trousers.`;
              break;
            case "smart_casual":
              wardrobeText = `She wears an effortless luxury feminine smart-casual look: an ivory silk blouse layered under a relaxed, softly draped linen blazer in a warm stone shade, paired with tailored trousers and refined fabric textures.`;
              break;
            case "healthtech_clinical":
              wardrobeText = `She wears a pristine, tailored doctor's lab coat designed specifically with a contoured feminine waistline and soft shoulders over an elegant navy blouse, exuding medical excellence and compassionate leadership.`;
              break;
            case "luxury_gala":
              wardrobeText = `She wears a breathtaking evening gown with sculpted feminine drapery, tactile luxury fabric textures, and subtle sparkling accents.`;
              break;
            default:
              wardrobeText = `She wears a chic, tailored feminine suit jacket with a contoured waistline over a delicate silk blouse, celebrating a graceful feminine silhouette.`;
          }
        } else {
          // woman_covered
          switch (wardrobeStyle) {
            case "tailored_contrast":
              wardrobeText = `She wears an exquisitely tailored high-contrast feminine ensemble: an elegant flowing jet-black modest dress with a softly cinched waist, layered under a chic bespoke ivory blazer featuring a graceful contoured feminine waistline (cinched waist), delicate curved lapels, and soft natural shoulders, completely tailored for a feminine silhouette (strictly avoiding boxy or masculine suit cuts).`;
              break;
            case "tailored_feminine_cinched":
              wardrobeText = `She wears a chic, tailored feminine suit jacket with subtle waist darts (cinched waist), graceful curved lapels, and soft natural shoulders over a fluid black modest dress, radiating refined feminine authority and graceful poise (avoiding oversized or masculine cuts).`;
              break;
            case "chanel_tweed":
              wardrobeText = `She wears a luxury Parisian-style collarless tweed jacket in ivory and gold weave with delicate pearl buttons and soft feminine trims, worn over an elegant modest black dress—timeless, sophisticated, and undeniably feminine.`;
              break;
            case "smart_casual":
              wardrobeText = `She wears a refined modest smart-casual ensemble: a long flowing linen dress in rich earthy tones paired with an unconstructed, softly draped stone blazer and a harmonizing head covering.`;
              break;
            case "healthtech_clinical":
              wardrobeText = `She wears a pristine tailored white clinical coat with a contoured feminine waistline over an elegant modest black ensemble, combining medical authority with welcoming feminine warmth.`;
              break;
            case "luxury_gala":
              wardrobeText = `She wears a bespoke high-end modest gala dress with rich woven textures and a softly defined feminine waist, layered under an ivory tailored blazer with subtle golden accents.`;
              break;
            default:
              wardrobeText = `She wears a chic feminine ivory blazer with a contoured waistline over a jet-black modest dress, tailored gracefully for a woman's silhouette.`;
          }
        }

        // Scenario & Composition
        let scenarioText = "";
        switch (scenario) {
          case "3d_letters":
            scenarioText = `${pronounCap} is sitting elegantly and confidently on large, uniform 3D letters spelling "${nameText}"—each letter features an identical, high-tech luxury design: a core of polished 18K gold encased in sleek, seamless transparent crystalline glass. The subject looks directly at the camera with a bold, visionary, and approachable expression. The background is a bright, minimalist "Zen-Tech" studio with a soft-focus light blue and white gradient, featuring a cascading green plant in the top left corner for a touch of organic freshness. The floor is a white polished surface with soft, realistic reflections of the gold letters.`;
            break;
          case "marble_table":
            scenarioText = `${pronounCap} is seated with grace and confidence behind a pristine, white Carrara marble display table. The background is transformed into a breathtaking, sun-drenched natural vista, featuring a blooming almond orchard and rolling green hills under a clear, soft-blue sky. Ethereal daylight filters through the white and pink blossoms, creating a dreamy, high-end outdoor atmosphere. On the table, ${displayItems || "an exquisite arrangement of premium Tu BiShvat fruits"}. Centered on the marble table, the Hebrew text "${engravedText}" is elegantly engraved in polished, 3D 18K gold calligraphy.`;
            break;
          case "open_executive_office":
            scenarioText = `${pronounCap} is sitting elegantly in a premium executive chair, positioned in the center of a spacious, airy room with no desk visible in front of ${pronounObj}, creating a sense of openness and accessibility. ${pronounPoss.charAt(0).toUpperCase() + pronounPoss.slice(1)} expression features a warm, genuine, and professional smile, radiating confidence and approachability. The setting is a contemporary, sun-drenched modern office flooded with natural, bright daylight. In the background, a minimalist white floor-to-ceiling bookshelf and a lush, vibrant green indoor plant are visible, rendered with a soft-focus cinematic bokeh (slightly blurred) to create depth.`;
            break;
          case "linkedin_headshot":
            scenarioText = `A tight, high-impact professional headshot for LinkedIn. The camera is positioned at a slight low-angle to project natural authority and leadership. Looking directly into the lens with a confident, genuine, and charismatic professional smile. The face is the primary focus. The background is a bright, minimalist executive suite with a high-end, creamy bokeh effect showing hints of a white bookshelf and soft greenery.`;
            break;
          case "social_avatar":
            scenarioText = `A tight, centered professional headshot optimized for a social media profile picture. The camera is positioned at a subtle low-angle to project natural authority and leadership. Looking directly into the lens with a confident, genuine, and charismatic professional smile. The face is the primary focus, captured in an extreme close-up. The background is a bright, luminous off-white minimalist studio backdrop, creating a clean and airy professional atmosphere.`;
            break;
          case "executive_lounge":
            scenarioText = `${pronounCap} is seated in a luxury executive lounge armchair, with an open and engaging posture looking toward the lens. The background features warm acoustic wood slat panelling, a curated collection of design volumes, and a distant architectural glass facade overlooking an urban morning skyline with creamy blurred bokeh.`;
            break;
          case "custom":
            scenarioText = customScenario.trim() || `${pronounCap} is seated in a modern professional setting, looking directly into the lens with a warm and confident expression.`;
            break;
        }

        // Lighting (Rule 2 from images)
        let lightingText = "";
        switch (lighting) {
          case "softbox_rim":
            lightingText = `The lighting is high-key and sophisticated, featuring a dedicated soft-box key light that illuminates ${pronounPoss} face with a healthy radiant glow, while a subtle golden rim light separates ${pronounObj} from the background.`;
            break;
          case "window_leaf":
            lightingText = `The scene is illuminated by soft natural window light from the side, casting gentle, irregular leaf-like shadows across the scene to create authentic real-world depth.`;
            break;
          case "sun_drenched":
            lightingText = `The scene is flooded with bright, natural sun-drenched daylight with subtle golden sunbeams highlighting the luxury fabric textures.`;
            break;
          case "high_key_shadowless":
            lightingText = `Illuminated by intensive high-key studio lighting that eliminates harsh shadows and creates a radiant, bright glow on the facial features with professional clarity.`;
            break;
        }

        // Camera Lens & Aesthetics (Rule 4 from images)
        let cameraText = "";
        switch (cameraLens) {
          case "85mm":
            cameraText = `Shot with an 85mm prime lens at f/1.8 for extreme clarity and a shallow depth of field, emphasizing luxury fabric textures against a soft, creamy blooming bokeh.`;
            break;
          case "100mm":
            cameraText = `Shot with a 100mm f/1.4 lens for extreme facial detail, sharp eye catchlights, and a shallow depth of field.`;
            break;
          case "50mm":
            cameraText = `Captured with a 50mm f/1.8 lens providing a natural, clean, documentary-grade perspective with authentic facial proportions.`;
            break;
          case "35mm":
            cameraText = `Shot with a 35mm lens for an authentic, everyday environmental feel capturing the subject naturally within the space.`;
            break;
          case "camera_roll":
            cameraText = `Authentic camera roll aesthetic: Shot on iPhone, natural candid handheld framing, AF pulled slightly to the background, incomplete HDR correction, direct flash aesthetic for undeniable human realism.`;
            break;
        }

        const arParam = `--ar ${ar}`;
        let antiMasculineNegative = "";
        if (gender === "woman_covered" || gender === "woman_styled") {
          antiMasculineNegative = "--no masculine cut, boxy suit, oversized male shoulders, necktie, male clothing";
        }

        finalPromptText = `${opening} ${scenarioText} ${wardrobeText} ${lightingText} ${cameraText} ${arParam} ${antiMasculineNegative}`.trim();

        htmlPreviewText = `${escapeHTML(opening)}<br><br>` +
          `<mark>${escapeHTML(scenarioText)}</mark><br><br>` +
          `<mark>${escapeHTML(wardrobeText)}</mark><br><br>` +
          `<mark>${escapeHTML(lightingText)}</mark><br><br>` +
          `<mark>${escapeHTML(cameraText)}</mark><br><br>` +
          `<mark>${escapeHTML(arParam)}</mark>` +
          (antiMasculineNegative ? `<br><br><mark style="background: rgba(239, 68, 68, 0.2); color: #fca5a5; border-color: rgba(239, 68, 68, 0.4);">${escapeHTML(antiMasculineNegative)}</mark>` : "");
      }
    } else {
      prompt.variables.forEach(v => {
        const value = userVariables[activePromptId][v.id] || "";
        const escapedValue = escapeHTML(value);
        
        // Real plain text replacement
        finalPromptText = finalPromptText.replaceAll(`{${v.id}}`, value);
        
        // Highlighted HTML preview replacement
        htmlPreviewText = htmlPreviewText.replaceAll(`{${v.id}}`, `<mark>${escapedValue}</mark>`);
      });
    }

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
        <div class="drawer-section" style="margin-top: 1.5rem; border-top: 1px solid var(--panel-border); padding-top: 1.5rem;">
          <h4 style="color: var(--primary-teal); font-size: 1.1rem; margin-bottom: 0.75rem;">${section.heading}</h4>
          <div>${section.content}</div>
        </div>
      `;
    });



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

  // Back to prompts list click handler
  const btnBackToPrompts = document.getElementById("btn-back-to-prompts");
  if (btnBackToPrompts) {
    btnBackToPrompts.addEventListener("click", () => {
      document.body.classList.remove("workspace-active");
      const workspace = document.getElementById("workspace");
      workspace.classList.remove("active");
      activePromptId = null;
      
      // Clear active cards
      document.querySelectorAll(".prompt-card").forEach(card => {
        card.classList.remove("prompt-card-active");
      });
      
      // Scroll smoothly back to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Launch initial render
  renderPromptCards();
});
