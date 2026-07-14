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

  // Initialize variables state with default values
  PROMPTS_DATA.forEach(prompt => {
    userVariables[prompt.id] = {};
    prompt.variables.forEach(v => {
      userVariables[prompt.id][v.id] = v.default;
    });

    // Custom steps initialization for gpt_step_image
    if (prompt.id === "gpt_step_image") {
      userVariables[prompt.id]["step_1"] = "הכנת המזרק, חיטוי מקום ההזרקה ושטיפת ידיים יסודית";
      userVariables[prompt.id]["step_2"] = "ביצוע ההזרקה בזווית נכונה ולחיצה איטית על הבוכנה";
      userVariables[prompt.id]["step_3"] = "הוצאת המחט בבטחה, פינוי למכל ייעודי והדרכת המטופל למעקב";
      userVariables[prompt.id]["step_4"] = "מעקב אחר רמות הסוכר בדם ורישום המדדים באפליקציה";
      userVariables[prompt.id]["step_5"] = "פנייה לצוות הרפואי בכל מקרה של אירוע חריג";
      userVariables[prompt.id]["step_6"] = "אחסון האינסולין במקרר בהתאם להנחיות";
      userVariables[prompt.id]["step_7"] = "מעקב שבועי אחר מגמות הסוכר בדם";
      userVariables[prompt.id]["step_8"] = "רישום המדדים ודיווח תקופתי לרופא המטפל";
      userVariables[prompt.id]["step_9"] = "שמירה על תזונה נכונה ופעילות גופנית מותאמת";
      userVariables[prompt.id]["step_10"] = "בדיקות תקופתיות קבועות של תפקודי הכליה והעיניים";
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
        <select id="input-STEPS_COUNT" class="steps-count-select" style="width: 100%; background: var(--bg-dark); color: #fff; border: 1px solid var(--panel-border); padding: 0.6rem; border-radius: 8px; font-family: inherit;">
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

    if (prompt.background.sources && prompt.background.sources.length > 0) {
      bodyHTML += `
        <div class="drawer-sources" style="margin-top: 1.5rem; border-top: 1px solid var(--panel-border); padding-top: 1.5rem;">
          <h4 style="color: #fff; font-size: 1.1rem; margin-bottom: 0.75rem;">מקורות והשראה אקדמית</h4>
      `;
      prompt.background.sources.forEach(src => {
        bodyHTML += `
          <div class="source-item" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4" style="width:16px;height:16px;color:var(--primary-teal);"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
            <a href="${src.url}" target="_blank" rel="noopener noreferrer" style="color: var(--primary-teal); text-decoration: none; border-bottom: 1px dashed var(--primary-teal);">${src.name}</a>
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
