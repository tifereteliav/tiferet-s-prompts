/**
 * Prompts Data for the HealthTech & MedComms Prompt Hub
 * This file contains the template text, variables, and rich background details
 * for the presentation, video script, and infographic prompts.
 */

const PROMPTS_DATA = [
  {
    id: "presentation",
    title: "פרומפט למצגת רפואית קלינית",
    subtitle: "Medical Presentation Design Prompt",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0V18m0 0V21m0-3h7.5m0 0V21m-7.5-6h7.5M5.25 5.25h13.5v7.5H5.25v-7.5z" /></svg>`,
    category: "מצגות ותקשורת רפואית",
    description: "עיצוב מצגות רפואיות קליניות המשלבות את תיאוריית העומס הקוגניטיבי (CLT) עם אסתטיקת השקה יוקרטית.",
    variables: [
      {
        id: "SLIDE_COUNT",
        label: "מספר השקפים במצגת",
        placeholder: "הזן מספר שקפים רצוי (למשל: 10, 12, 15)...",
        default: "10"
      },
      {
        id: "CLINICAL_TOPIC",
        label: "נושא קליני / מוצר",
        placeholder: "הזן את הנושא המדעי או הקליני...",
        default: "שילוב מערכות בינה מלאכותית בניטור חולים מרחוק למניעת אי-ספיקת לב חריפה"
      },
      {
        id: "TARGET_AUDIENCE",
        label: "קהל יעד",
        placeholder: "הזן את קהל היעד (למשל: רופאים, מטופלים)...",
        default: "צוותים קליניים (קרדיולוגים, רופאי משפחה, אחיות מוסמכות) ומטופלים מועמדים לתוכנית הניטור הביתית"
      },
      {
        id: "OUTPUT_LANGUAGE",
        label: "שפת פלט והגדרות כיוון",
        placeholder: "למשל: עברית עם יישור מימין לשמאל...",
        default: "Hebrew (עברית בהירה, תקנית, מדויקת מבחינה רפואית ומנוסחת באמפתיה רבה) מעוצב מימין לשמאל כמו שמקובל בעברית"
      }
    ],
    template: `You are a Senior Medical Communications Information Designer and an Elite HealthTech Brand Strategist. Your task is to generate a comprehensive, visually breathtaking, and scientifically rigorous {SLIDE_COUNT}-slide presentation based on the clinical topic provided below. The output must seamlessly synthesize the educational discipline of Cognitive Load Theory (CLT) with the modern, high-end visual aesthetic of a top-tier premium product launch.

[CLINICAL TOPIC INPUT]: "{CLINICAL_TOPIC}"
[TARGET AUDIENCE]: "{TARGET_AUDIENCE}"
[OUTPUT LANGUAGE]: "{OUTPUT_LANGUAGE}"`,
    background: {
      title: "מדריך לארכיטקטורת מצגות רפואיות",
      subtitle: "המדריך המלא לשילוב אופטימיזציה קוגניטיבית ואסתטיקה שיווקית עילית",
      introduction: `תקשורת רפואית (Medical Communications) ניצבת בפני אתגר כפול בעידן הדיגיטלי: העברת מידע קליני ומדעי מורכב ברמת דיוק קיצונית, לצד שימור קשב ומעורבות רגשית של קהלי יעד מגוונים, החל מרופאים מומחים ועד למטופלים ובני משפחותיהם. מצגות רפואיות קלאסיות סובלות לרוב מ"הצפת נתונים" (Data Dumping), שימוש מופרז בז'רגון מקצועי ותבניות עיצוב מיושנות, המובילים לעומס קוגניטיבי מוגבר ולפגיעה קשה בהבנת המסר. מנגד, עולם השיווק המודרני ועיצוב המותגים פיתחו שיטות חזותיות מתקדמות המפרקות מורכבות ומייצרות חוויית משתמש אינטואיטיבית ומושכת.

כדי לגשר על פער זה, נדרשת גישה מערכתית המשלבת את חוקי העיצוב השיווקי המובילים של שנת 2026 יחד עם עקרונות פסיכולוגיים קוגניטיביים מבוססים. שימוש מושכל בכלי בינה מלאכותית ליצירת מצגות (כגון Gamma, Twistly או Smallppt) מאפשר להפוך דפי מידע יבשים לנרטיבים חזותיים דינמיים. דוח זה מציג ניתוח מעמיק של תיאוריית העומס הקוגניטיבי, מגמות העיצוב השיווקי המובילות, מתודולוגיית הנדסת הפרומפטים ל-AI, ומספק את קוד הפרומפט המערכתי המתקדמת ביותר לייצור מצגות רפואיות פורצות דרך.`,
      sections: [
        {
          heading: "חלק א: תיאוריית העומס הקוגניטיבי (CLT) בתקשורת רפואית חזותית",
          content: `<p>תיאוריית העומס הקוגניטיבי (Cognitive Load Theory) מניחה כי זיכרון העבודה האנושי מוגבל ביותר בקיבולת וברמת שימור המידע שלו. בעת קליטת מידע רפואי חדש – בין אם מדובר ברופאה הנדרשת להבין מנגנון פעולה (MOA) של תרופה חדשה ובין אם במטופל הלומד על תהליך שיקום לאחר ניתוח – המוח מעבד שלושה סוגי עומס קוגניטיבי:</p>
          <ul>
            <li><strong>עומס פנימי (Intrinsic Load):</strong> נובע מהמורכבות המובנית של התוכן המדעי עצמו.</li>
            <li><strong>עומס חיצוני (Extraneous Load):</strong> נובע מאופן הצגת המידע ומאלמנטים מסיחים בעיצוב.</li>
            <li><strong>עומס גרמני (Germane Load):</strong> המאמץ המושקע על ידי המוח בבניית תבניות חשיבה (schemas) והטמעת המידע בזיכרון לטווח ארוך.</li>
          </ul>
          <p>כדי למקסם את הלמידה, עיצוב המצגת חייב להפחית באופן דרסטי את העומס החיצוני ולנהל נכון את העומס הפנימי. עקרונות אלו מתורגמים ישירות להנחיות עיצוב חזותיות קפדניות במיוחד. עיקרון פיצול הקשב (Split-Attention Effect) דורש להימנע מהפרדה בין טקסט לתרשים; שילוב תוויות הסבר ישירות על גבי חלקי האיור מונע מהלומד לבצע דילוגים מנטליים מתישים. עיקרון היתירות (Redundancy Principle) קובע כי הוספת כיתוב מילולי מפורט לצד איור שמסביר את עצמו יוצרת עומס יתר המפריע לקליטה. בנוסף, עיקרון המודאליות החושית (Modality Principle) מראה כי שילוב של מידע חזותי פשוט עם הסבר קולי או טקסט מינימלי מרווח מביא לתוצאות הבנה עדיפות משמעותית.</p>
          <p>תקשורת בריאותית המיועדת למטופלים דורשת התאמה עיצובית רחבה עוד יותר. מחקרים בתחום אוריינות הבריאות מראים כי שימוש באיורים קוויים פשוטים ונקיים עדיף על פני צילומי תקריב רפואיים, שכן צילומים מכילים לרוב פרטים מסיחים ויוצרים לעיתים רתיעה רגשית. איורים אנושיים חייבים לכלול תווי פנים ברורים (עיניים, אף ופה) על מנת לייצר אמפתיה ותחושת ביטחון, ויש להקפיד על ניגודיות חזותית מוחלטת של לפחות 7:1 בין הטקסט לרקע כדי להבטיח נגישות מלאה.</p>
          
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>עיקרון קוגניטיבי</th>
                  <th>תיאור המנגנון הפסיכולוגי</th>
                  <th>יישום עיצובי במצגת רפואית</th>
                  <th>השפעה על קהל היעד</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>מניעת פיצול קשב</strong></td>
                  <td>ביטול הצורך של הלומד לחבר באופן מנטלי מקורות מידע מרוחקים.</td>
                  <td>שילוב כותרות, מדדים ותוויות הסבר ישירות בתוך האיור האנטומי או הגרף הקליני.</td>
                  <td>הבנה מהירה של הקשרים הביולוגיים ומניעת התעייפות מנטלית של הצוות הרפואי.</td>
                </tr>
                <tr>
                  <td><strong>ניהול עומס פנימי (Scaffolding)</strong></td>
                  <td>פירוק תהליכים מורכבים לשלבים ליניאריים מבוססי קו זמן.</td>
                  <td>שימוש בפריסות קלפים מדורגות המציגות רק שלב אחד בכל פעם, והסתרת מידע מורכב בנספחים.</td>
                  <td>הפחתת חרדה אצל מטופלים ושיפור תהליך קבלת ההחלטות הקליני.</td>
                </tr>
                <tr>
                  <td><strong>עיקרון המודאליות</strong></td>
                  <td>ניצול יעיל של ערוצי העיבוד החזותיים והשמעתיים במקביל בזיכרון העבודה.</td>
                  <td>הצגת אנימציה חזותית ממוקדת של מנגנון הפעולה לצד הסבר קולי או טקסט קצר מרווח היטב.</td>
                  <td>הגברת שיעור שימור המידע בקרב צוותים רפואיים ומניעת טעויות טיפוליות.</td>
                </tr>
                <tr>
                  <td><strong>עיקרון היתירות</strong></td>
                  <td>הימנעות מהצגת מידע זהה בערוצים חזותיים ומילוליים חופפים המעמיסים על הזיכרון.</td>
                  <td>ביטול כתוביות טקסטואליות מפורטות כאשר הגרף או התרשים מסבירים את המגמה בבירור.</td>
                  <td>מיקוד הקשב של המאזינים בפרשנות הקלינית ובהשלכות המעשיות של הטיפול.</td>
                </tr>
              </tbody>
            </table>
          </div>`
        },
        {
          heading: "חלק ב: מגמות עיצוב שיווקי מתקדם לשנת 2026 והחלתן על עולם הרפואה",
          content: `<p>אסתטיקת העיצוב המודרנית עברה מהפכה משמעותית. העיצוב השטוח והחד-ממדי (Flat Design) ששלט בעשור האחרון נתפס כיום כמיושן ומנוכר. במקומו, מגמות העיצוב לשנת 2026 מציגות מראה טקטילי, דינמי ורגיש יותר המשלב עומק חזותי עדין, צללים רכים ואפקטים דמויי זכוכית (Glassmorphism) כדי לארגן את המידע בצורה היררכית ונעימה לעין.</p>
          <p>אחת המגמות הבולטות ביותר היא השימוש בפריסות <strong>"גריד בנטו" (Bento Grid Layout)</strong>. פריסה זו, השואבת השראה מקופסאות האוכל היפניות, מחלקת את השקף לקופסאות מודולריות מעוגלות-קצוות, כאשר כל קופסה מארחת אלמנט מידע בודד – כגון מדד מפתח (KPI), ציטוט של מטופל, תרשים זרימה או הדמיה רפואית. מבנה מודולרי זה מסייע בהפחתת העומס הקוגניטיבי, יוצר סדר חזותי ברור, ומבטיח כי המצגת תהיה "עמידה למכשירים ניידים" (Mobile-Resilient) וקריאה בקלות גם על גבי מסכים קטנים של טלפונים ניידים או טאבלטים.</p>
          <p>מבחינת צבעוניות, עידן ה"כחול התאגידי הקר" (Cold Corporate Blue) כברירת מחדל חלף מן העולם. פלטות הצבעים החדשניות נשענות על גוונים מרגיעים, חמימים ואנושיים יותר כגון ירוק עמוק, סגול עמוק, אפור חם וגווני נייר טבעיים (Wax Paper). לצד גוונים אלו, משולב <strong>"טיל טרנספורמטיבי" (Transformative Teal)</strong> כצבע השנה, המשמש כצבע הדגשה ממוקד וחד. בתחום הרפואי, השימוש בצבע זה נועד להנחות את עין הצופה ישירות אל הנתון הקליני המשמעותי ביותר בשקף, כגון שיעור השיפור בהישרדות המטופלים או הפחתה באחוז האשפוזים החוזרים.</p>
          <p>הטיפוגרפיה הפכה לגיבור החזותי המרכזי של השקף (Bold Typography-Led Slides). כותרות גדולות, בולטות וגיאומטריות בגדלים של 44–64 pt קובעות את קצב הקריאה ומאפשרות לצופה להבין את תמצית המסר תוך שניות בודדות, גם בקריאה אסינכרונית ללא מרצה. טקסט הגוף נשמר בגדלים קריאים של 24–32 pt עם מרווחים נדיבים, תוך הגבלה קשוחה לשתי משפחות גופנים לכל היותר לשמירה על ניקיון עיצובי.</p>
          
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>ממד חזותי</th>
                  <th>האסתטיקה המיושנת (רוויה ועמוסה)</th>
                  <th>האסתטיקה המודרנית לשנת 2026 (שיווק עילי)</th>
                  <th>השלכות על הבנת המטופל והצוות הרפואי</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>פריסת שקף וחלוקת חלל</strong></td>
                  <td>תבניות נוקשות, רשימות תבליטים צפופות, שימוש בכל קצה פנוי בשקף.</td>
                  <td>גריד בנטו (Bento Grid) מודולרי, תיבות בעלות פינות מעוגלות ומרחבי נשימה לבנים (White Space).</td>
                  <td>חלוקת המידע לתאים קלים לעיכול; שיפור הקריאות במכשירים ניידים.</td>
                </tr>
                <tr>
                  <td><strong>פלטת צבעים</strong></td>
                  <td>שימוש מופרז בכחול מוסדי מנוכר וקריר ובאפור משעמם ללא נקודות מיקוד.</td>
                  <td>שילוב גוונים חמימים וטבעיים עם נגיעות של Transformative Teal להדגשת נתוני מפתח.</td>
                  <td>הפחתת רמת החרדה הקלינית ויצירת חוויה אמפתית, אנושית ואמינה.</td>
                </tr>
                <tr>
                  <td><strong>טיפוגרפיה והיררכיה</strong></td>
                  <td>שימוש בגופנים קטנים ומרובים, כותרות אינפורמטיביות יבשות (למשל, "תוצאות ניסוי קליני").</td>
                  <td>כותרות גיאומטריות דומיננטיות (44-64pt) המביעות תובנה אקטיבית, וגופנים משתנים (Variable Fonts).</td>
                  <td>הבנה מיידית של השורה התחתונה הקלינית תוך 15 שניות, גם ללא קריינות.</td>
                </tr>
                <tr>
                  <td><strong>סגנון אילוסטרציות</strong></td>
                  <td>סמלים שטוחים וגנריים, צילומי מלאי מנוכרים או דיאגרמות מעבדה מורכבות.</td>
                  <td>איורים קוויים נקיים עם תווי פנים ריאליסטיים, שילוב אלמנטים תלת-ממדיים רכים.</td>
                  <td>מניעת פרשנויות מוטעות בהוראות הטיפול, שיפור ההיענות להנחיות קליניות.</td>
                </tr>
              </tbody>
            </table>
          </div>`
        },
        {
          heading: "חלק ג: ארכיטקטורת הנדסת פרומפטים לבינה מלאכותית רפואית",
          content: `<p>כדי להוביל כלי בינה מלאכותית יוצרת (כגון Gamma, Smallppt או Twistly) להפקת מצגת המשלבת שלמות עיצובית שיווקית עם דיוק קליני מחמיר, יש להזין פרומפט מובנה ועשיר המגדיר במפורש את כל מגבלות העיצוב והתוכן. חלוקת הפרומפט לרכיבים מוגדרים מסייעת למודל לפעול כמעצב מנוסה ולא כסוכן גנרי. חוקי היסוד:</p>
          <ol>
            <li><strong>הגדרת זהות ומומחיות (Role and Persona Constraints):</strong> יש להנחות את המודל לפעול כמעצב מידע רפואי בכיר (Senior MedComms Designer) שעובד בשיתוף פעולה עם מנהל מותג שיווקי מתעשיית ה-HealthTech.</li>
            <li><strong>שליטה מוחלטת בגרפים ונתונים (No AI Data Hallucination):</strong> "ספק ל-AI את הנתונים המדויקים והגדר לו מה הגרף חייב להוכיח". אין לאפשר למודל להעריך או להמציא אחוזים ומדדים.</li>
            <li><strong>ניהול שלב תרשים הזרימה המבני (The Outline Rule):</strong> יש להקדיש לפחות 60 שניות לבחינת ראשי הפרקים לפני אישור הייצור בכלי כמו Gamma, כדי לוודא זרימה לוגית קלינית תקינה.</li>
            <li><strong>טכניקת "הדבקת טקסט גולמי" (Paste in Text):</strong> עבור מצגות רפואיות בעלות עומק מדעי, מומלץ להשתמש באפשרות של הדבקת הערות מחקר, סיכומי ניסויים או מסמכי מדיניות ישירות לתוך כלי ה-AI.</li>
          </ol>`
        },
        {
          heading: "חלק ד: קוד הפרומפט המערכתי המוביל (The Master System Prompt)",
          content: `<p>הפרומפט המערכתי המוביל (The Master System Prompt) המפורט לאנגלית – השפה בה מנועי ה-AI העיצוביים מעבדים הוראות פריסה ומשתנים מורכבים ברמת הדיוק הגבוהה ביותר:</p>
          <div class="table-container" style="margin: 1.5rem 0;">
            <pre style="padding: 1.5rem; font-family: monospace; font-size: 0.85rem; color: #d1d5db; white-space: pre-wrap; direction: ltr; text-align: left; background: rgba(8, 11, 19, 0.6); line-height: 1.6;">You are a Senior Medical Communications Information Designer and an Elite HealthTech Brand Strategist. Your task is to generate a comprehensive, visually breathtaking, and scientifically rigorous {SLIDE_COUNT}-slide presentation based on the clinical topic provided below. The output must seamlessly synthesize the educational discipline of Cognitive Load Theory (CLT) with the modern, high-end visual aesthetic of a top-tier premium product launch.

[CLINICAL TOPIC INPUT]: "שילוב מערכות בינה מלאכותית בניטור חולים מרחוק למניעת אי-ספיקת לב חריפה"
[TARGET AUDIENCE]: "צוותים קליניים (קרדיולוגים, רופאי משפחה, אחיות מוסמכות) ומטופלים מועמדים לתוכנית הניטור הביתית"
[OUTPUT LANGUAGE]: "Hebrew (עברית בהירה, תקנית, מדויקת מבחינה רפואית ומנוסחת באמפתיה רבה)"

PART 1: COMPREHENSIVE DESIGN TOKENS & SYSTEM
LAYOUT & FRAMEWORK: Utilize a modular, asymmetrical "Bento Grid" layout. Group related concepts into distinct rounded cards/containers (border-radius: 12px, subtle background surface colors, and soft depth shadows). Use generous negative space (white space) to separate blocks. Avoid rigid, traditional, text-heavy bulleted templates.

COLOR THEORY: Implement a restorative, human-centric palette.
Primary Background: Warm Neutrals (Wax Paper / soft linen white) to prevent eye strain.
Text & Core Structural Graphics: Deep Slate/Charcoal Gray (avoid pure black for a softer, more premium look).
Core Accent Tone: Transformative Teal (Hex #008080). Use this color strictly as a tactical tool to highlight key data points, critical clinical metrics, or pivotal milestones. Never use cold, generic corporate blue as the default.

TYPOGRAPHY & HIERARCHY: Limit to exactly two font families.
Active Slide Headers: Large, bold, geometric typefaces (44-64pt). Headers must state the primary scientific insight or core takeaway, not just generic topic names.
Readable Body Text: High-legibility sans-serif fonts (24-32pt) with a line spacing of 1.5.

ACCESSIBILITY Standards: Maintain a strict 7:1 color contrast ratio across all text elements and backgrounds to guarantee absolute legibility under dim hospital lighting or on mobile screens.

PART 2: COGNITIVE OVERLOAD PREVENTION CRITERIA (CLT RULES)
ONE INSIGHT PER SLIDE: Structure every single slide around one clear clinical question or core message. If a data visualization contains multiple complex insights, partition them across separate slides.

INTEGRATED ANNOTATIONS (AVOID SPLIT ATTENTION): Ensure all chart labels, annotations, and key callouts are embedded directly onto the visual elements using minimal pointers or arrows. Do not use distant legends that force the viewer to look back and forth to decode the colors.

MODALITY & REDUNDANCY ELIMINATION: Replace heavy paragraphs with streamlined, high-contrast vector illustrations, clinical flowcharts, or simple timelines. If a diagram is self-explanatory, minimize accompanying explanatory text to prevent cognitive redundancy.

HUMANIZING CONTEXT & EMPATHY: For patient-facing materials, use clean line drawings showcasing recognizable human features (always display eyes, nose, and mouth on human figures) to build immediate psychological trust. Simplify jargon into plain language without diluting credibility.

PART 3: THE HIGH-END MEDICAL NARRATIVE FRAMEWORK (10-SLIDE FLOW)
Construct the presentation precisely according to this professional biomedical structure:
1. Cover Slide: Elegant category-defining title capturing the clinical urgency.
2. Clinical Problem: The severe patient burden and clinical urgency of acute heart failure.
3. The Gap: Why existing monitoring solutions fall short (unnecessary clinical friction, delayed alerts).
4. Our Solution: Introducing the AI platform's clinical value proposition.
5. Mechanism of Action (MOA): Simple, modular, step-by-step visual of how the AI algorithm analyzes biometric data.
6. Clinical Evidence & Proof: Visualizing key clinical validation metrics (with the most vital statistic highlighted in Transformative Teal).
7. Patient Journey & Timeline: A clean, empathetic timeline illustrating the seamless at-home monitoring experience.
8. Healthcare Integration: Showing how data flows into clinical triage workflows without adding administrative burden.
9. Regulatory Realism & Safety: Outlining FDA clearances, medical-grade security, and data protection.
10. Actionable Next Steps: Clear enrollment paths for clinics and onboarding resources for patients.

Verify all Hebrew translations for absolute grammatical correctness, ensuring a professional, respectful, yet warm and accessible tone. Do not generate placeholder texts.</pre>
          </div>`
        },
        {
          heading: "חלק ה: ניתוח מקרי בוחן של מצגות רפואיות וביוטכנולוגיות מובילות",
          content: `<p>ניתוח מקרי בוחן של חברות ביוטכנולוגיה וטכנולוגיה רפואית פורצות דרך, אשר גייסו מאות מיליוני דולרים והובילו מהפכות קליניות, מספק תובנות מעשיות יוצאות דופן:</p>
          <ul>
            <li><strong>Grail (גילוי סרטן מוקדם):</strong> נמנעה במצגותיה מלנסות ללמד גנומיקה מורכבת. במקום זאת, מיקדה את הנרטיב בעיצוב חזותי שהציג את הפתרון כהכרח מערכתי ואת התוצאות הקליניות המדידות (שיעורי הישרדות ועלויות טיפול).</li>
            <li><strong>Tempus (פלטפורמת נתונים מבוססת AI):</strong> בחרה שלא להציג את ה-AI כמעשה קסמים, אלא כתשתית קבלת החלטות המשתלבת ישירות בתוך סביבת העבודה הקיימת של האונקולוגים, המייצרת ערך הולך וגדל.</li>
            <li><strong>Moderna (טכנולוגיית mRNA):</strong> הציגה מודל של "מנוע ביולוגי הניתן לשכפול" (Platform Biotech) כדי להפחית סיכון בינארי של כישלון פיתוח תרופה בודדת.</li>
            <li><strong>Cerevia Neurosciences (בינה מלאכותית לדמנציה):</strong> שילבה בין ראיות קליניות מורכבות למסלול הטיפול של החולה באמצעות <strong>מערכת השכבות (The Layered System)</strong> המפרידה בין המסר המרכזי, ההסבר החזותי של מנגנון הפעולה, הנתונים התומכים והנספח המדעי.</li>
          </ul>`
        },
        {
          heading: "חלק ו: מסקנות והמלצות אופרטיביות לניהול תהליך היצירה",
          content: `<p>כדי להבטיח שמצגות ההדרכה הרפואיות יעמדו בסטנדרטים הגבוהים ביותר, מומלץ לאמץ את שלושת העקרונות הבאים:</p>
          <ul>
            <li><strong>עריכה אסינכרונית קודמת לכל (Asynchronous Resilience):</strong> רוב המצגות הרפואיות כיום נקראות ללא נוכחות מרצה. העיצוב המודולרי והכותרות האקטיביות צריכים לאפשר הבנה מלאה של הנרטיב תוך דפדוף מהיר.</li>
            <li><strong>שימוש קפדני במערכות עיצוב (Design Systems):</strong> הגדר את פלטת הצבעים, משפחות הגופנים וסגנונות הכרטיסיות ברמת הגדרות הבסיס (Master Template) של כלי ה-AI.</li>
            <li><strong>עבודה בשכבות מידע (The Layered Approach):</strong> חלוקת כל שקף ל-4 שכבות קוגניטיביות ברורות: כותרת עליונה (תובנה), מערכת חזותית מרכזית (תרשים/איור), נתונים תומכים (מדדים/מספרים בולטים), ונספח (מידע מורכב בסוף המצגת).</li>
          </ul>`
        }
      ],
      sources: [
        { name: "Costello Medical - Graphic Design in MedComms", url: "https://www.costellomedical.com" },
        { name: "CDC - Visual Communication Resources", url: "https://www.cdc.gov" },
        { name: "RunwayTeam - Biotech Pitch Deck Guide", url: "https://runwayteam.co" },
        { name: "MDPI - Cognitive Load Theory in Health Sciences", url: "https://www.mdpi.com" },
        { name: "Dribbble - Bento Slides Design Inspiration", url: "https://dribbble.com" }
      ]
    }
  },
  {
    id: "video_script",
    title: "פרומפט לסרטון סקירה כללית",
    subtitle: "Overview Explainer Video Prompt",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l-4.5 3v-6l4.5 3z" /></svg>`,
    category: "סרטוני הסברה והדרכה",
    description: "הפקת סרטון סקירה חזותי קצר ומעוצב בסגנון Bento Grid וחדשנות דיגיטלית רפואית.",
    variables: [],
    template: `High-end promotional video showcasing a digital health application interface designed for patient onboarding, presented in a modern Bento Grid layout. The screen consists of rounded, compartmentalized cards with a sophisticated glassmorphism effect and subtle drop shadows. The background is a clean, calm, warm grey gradient. Inside the main central card, a high-fidelity 3D rendering of a modern, sleek medical device is slowly rotating. An adjacent card displays a simple, animated heart-rate wave pulsing in transformative teal, alongside a bold, clean geometric sans-serif typography reading 'Daily Care'. Camera behavior: A precise, smooth horizontal pan and gentle push-in tracking shot, isolating key interactive elements. The transitions between the grid modules are seamless and fluid, conveying a sense of simplicity, digital innovation, and complete control over one's health journey. Calming and highly professional aesthetic, 16:9 aspect ratio.`,
    background: {
      title: "ארכיטקטורת מדיה טיפולית",
      subtitle: "עקרונות עיצוב חזותי והנדסת פרומפטים מתקדמת לסרטוני סקירה רפואיים להדרכת מטופלים",
      introduction: `המפגש בין עולם השיווק הדיגיטלי המתקדם לבין עולם הבריאות וחינוך המטופלים מחייב הגדרה מחדש של הכלים הויזואליים המשמשים להעברת מידע רפואי. בעוד שאנשי שיווק מובילים משתמשים באנימציות תלת-ממדיות עשירות, פריסות מסך מודולריות ומעברים דינמיים כדי ללכוד את תשומת הלב של הצרכן, הדרכת מטופלים דורשת דיוק קליני, הפחתת חרדה והנגשה קוגניטיבית מוקפדת. כשל תקשורתי בהסבר רפואי אינו מתבטא רק בירידה במדדי מעורבות, אלא עלול להוביל לטעויות בנטילת תרופות, חוסר היענות לטיפול ועלייה ברמות המתח של החולה. באמצעות יישום עקרונות עיצוב מתקדמים והנדסת פרומפטים מדעית למנועי בינה מלאכותית יוצרת וידאו, ניתן להפיק סרטוני סקירה רפואיים המשלבים את האסתטיקה היוקרתית ביותר של עולם השיווק עם המטרות הטיפוליות והחינוכיות של מערכת הבריאות.`,
      sections: [
        {
          heading: "חלק א: המבנה הנרטיבי של סרטון סקירה רפואי: שילוב פסיכולוגיית שיווק ואוריינות בריאות",
          content: `<p>סרטון סקירה רפואי מוצלח נבנה על בסיס רצף נרטיבי המנחה את המטופל לאורך מסע קוגניטיבי מוגדר, בדומה למבנה של מצגות גיוס הון רפואיות מובילות שנועדו לפשט מושגים מורכבים עבור משקיעים. במקום להעמיס על המטופל נתונים קליניים יבשים וז'רגון רפואי מורכב כבר מתחילת הסרטון, הנרטיב השיווקי-טיפולי מתמקד בערך ובחוויה האישית. הסרטון נפתח בהצגה ברורה של הבעיה הרפואית מנקודת מבטו של המטופל, במטרה לענות מיד על השאלה הפנימית "האם המידע הזה מיועד עבורי?". משם, הסרטון מוביל את הצופה דרך הבנת הפער הטיפולי הקיים, מציג את הפתרון המוצע בצורה ויזואלית מפושטת, ומספק הוכחות ליעילותו.</p>
          <p>כדי להבטיח את הבנת התוכן, על התסריט להשתמש בשפה פשוטה (Plain Language), תוך שימוש בלשון פנייה ישירה ("אנחנו" ו"אתה"), שימוש בזמן הווה ובקול פעיל (Active Voice) במקום סביל. הימנעות מוחלטת מראשי תיבות רפואיים שאינם מוסברים וממונחים לטיניים מורכבים מסייעת לשמור על רמת קשב גבוהה ולמנוע עומס קוגניטיבי. טבלה 1 מציגה את השלבים המרכיבים סרטון סקירה רפואי פרימיום:</p>
          
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>שלב נרטיבי</th>
                  <th>תפקיד שיווקי וחינוכי</th>
                  <th>יישום חזותי וטקסטואלי בסרטון</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>הגדרת הבעיה והחולה</strong></td>
                  <td>יצירת אמפתיה והזדהות מיידית; הגדרת קהל היעד באופן אינטואיטיבי.</td>
                  <td>הצגת דמות מטופל מאוירת בעלת הבעות פנים אנושיות וברורות, המשדרת את הסימפטומים או את הקושי בחיי היום-יום.</td>
                </tr>
                <tr>
                  <td><strong>חשיפת הפער הטיפולי</strong></td>
                  <td>הסבר מדוע הגישות המסורתיות אינן מספיקות, ללא יצירת פאניקה או חרדה.</td>
                  <td>אנימציה נקייה המציגה את מגבלות הטיפול הקיים באמצעות תרשימי זרימה פשוטים ומעברים חלקים.</td>
                </tr>
                <tr>
                  <td><strong>הצגת הפתרון והמנגנון</strong></td>
                  <td>הצגת הטיפול או המכשיר החדש כפתרון טבעי וישיר לפער שהוצג.</td>
                  <td>מעבר לאנימציה תלת-ממדית ממוקדת המציגה את מנגנון הפעולה הפיזיולוגי בצורה נקייה ומבוקרת.</td>
                </tr>
                <tr>
                  <td><strong>הוכחת יעילות מפושטת</strong></td>
                  <td>בניית אמון וביטחון על בסיס נתונים קליניים מוכחים.</td>
                  <td>הצגת נתונים סטטיסטיים באמצעות גרפים מפושטים, שימוש במילים קלות כמו "חצי" במקום "49%", והדגשת אחוזי שיפור ברורים.</td>
                </tr>
                <tr>
                  <td><strong>הנחיה מעשית לפעולה</strong></td>
                  <td>הפחתת חרדת אי-הודאות והצגת הצעדים הבאים של המטופל בתהליך.</td>
                  <td>הצגת ממשק דיגיטלי ידידותי, תרשים זרימה של שלבי הטיפול הבאים, ופרטי התקשרות ברורים.</td>
                </tr>
              </tbody>
            </table>
          </div>`
        },
        {
          heading: "חלק ב: עקרונות העיצוב החזותי לשנת 2026: אסתטיקת פרימיום ומזעור עומס קוגניטיבי",
          content: `<p>תעשיית העיצוב הרפואי בשנת 2026 זונחת לחלוטין את הגישה המוסדית הקרה, המאופיינת בגווני כחול-בית-חולים ואפור מנוכר, לטובת עיצובים חמים, אנושיים ומזמינים השואבים השראה מעולמות הוולנס (Wellness) והאירוח (Hospitality). המטרה הויזואלית היא לייצר סביבה אסתטית מרגיעה המפחיתה את העומס החיצוני (Extraneous Load) המוטל על המוח של המטופל, ובכך לאפשר לו להקצות את משאבי הקשב שלו להבנת התוכן הרפואי עצמו.</p>
          <p><strong>פלטות צבעים משקמות וצבעי דגש אסטרטגיים:</strong> העיצוב המודרני מבוסס על פלטות צבעים משקמות (Restorative Palettes) המשלבות גווני אדמה בהירים, גוונים נייטרליים חמים (Warm Neutrals) ונגיעות קלות של ירוק טבעי או סגול עמוק להשראת רוגע. <em>"כחול-ירקרק טרנספורמטיבי" (Transformative Teal)</em> משמש כצבע הדגש המרכזי של שנת 2026. השימוש בו נעשה במשורה ובאופן ממוקד ביותר, למשל כדי להדגיש את המעבר של החומר הפעיל בגוף, לסמן איבר פתולוגי ספציפי או להבליט נתון מספרי קריטי.</p>
          <p><strong>פריסת ממשק מודולרית (Bento Grid):</strong> חלוקת המסך לתיבות מודולריות בעלות פינות מעוגלות (Rounded Corners) ועומק תלת-ממדי עדין (באמצעות צללים רכים ואפקטים של זכוכית חצי-שקופה) מאפשרת להציג מספר סוגי מידע במקביל מבלי ליצור תחושת כאוס. לדוגמה, המסך יכול להכיל תיבה מרכזית גדולה המציגה את הדמיית הטיפול בתלת-ממד, ותיבה צדדית קטנה יותר המציגה את שלבי התהליך בצורה כרונולוגית.</p>
          <p><strong>דמויות אנושיות וטיפוגרפיה:</strong> כאשר מציגים אנשים או מטופלים, יש להימנע מצלליות מופשטות ומנוכרות ולעצב דמויות בעלות תווי פנים ברורים (עיניים, אף ופה) המביעות רגשות חיוביים. כותרות הסרטון מעוצבות בגופנים גאומטריים נקיים ללא עיטורים (Sans-serif) בעלי נוכחות חזקה ומשקלים בולטים, בעוד שטקסט הגוף נשמר בגודל קריא ומרווח, תוך שמירה על ניגודיות גבוהה של לפחות 7:1.</p>
          
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>אלמנט חזותי</th>
                  <th>מפרט עיצובי מומלץ (2026)</th>
                  <th>רציונל קוגניטיבי וקליני</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>יחס ניגודיות (Contrast Ratio)</strong></td>
                  <td>מינימום 7:1 בין הטקסט לרקע (נמדד לפי כלי WebAIM).</td>
                  <td>מאפשר קריאה קלה למטופלים בעלי לקויות ראייה או תחת תנאי תאורה משתנים ומסכים ניידים.</td>
                </tr>
                <tr>
                  <td><strong>סוג הגופן (Font Family)</strong></td>
                  <td>גופני סנס-סריף נקיים וגאומטריים (כגון Arial או Calibri המותאמים למסכים).</td>
                  <td>מניעת רעש ויזואלי בעיניים; גופנים אלו נסרקים מהר יותר במוח בהשוואה לגופני סריף מעוטרים.</td>
                </tr>
                <tr>
                  <td><strong>היררכיית גדלים (Typography Scale)</strong></td>
                  <td>כותרות בולטות במיקומים מרכזיים, גוף טקסט מוגבל ל-24–32 pt בלבד.</td>
                  <td>יצירת סדר עדיפויות קריאה ברור; המוח מזהה מיד מהו המסר המרכזי ומהו המידע התומך.</td>
                </tr>
                <tr>
                  <td><strong>מרווח שורות (Line Height)</strong></td>
                  <td>מרווח קבוע של לפחות 1.5.</td>
                  <td>יצירת מרווח נשימה ויזואלי (White Space) המקל על המעקב של העין בין שורה לשורה ומניעת עומס קוגניטיבי.</td>
                </tr>
              </tbody>
            </table>
          </div>`
        },
        {
          heading: "חלק ג: הנדסת פרומפטים מתקדמת למנועי וידאו: Sora 2 ו-Runway Gen-3",
          content: `<p>כתיבת פרומפט מקפאקצי עבור מחוללי וידאו מבוססי בינה מלאכותית דורשת הבנה של הדינמיקה הזמנית, הפיזיקה של התנועה והתנהגות המצלמה. בניגוד לפרומפטים לתמונות, פרומפטים של וידאו חייבים להגדיר בצורה מפורשת כיצד הסצנה משתנה לאורך זמן, כיצד המצלמה נעה במרחב ומהו הקצב התנועתי של הנושא.</p>
          <ul>
            <li><strong>OpenAI Sora 2:</strong> מצטיין בריאליזם פיזיקלי מורכב, שמירה על עקביות תלת-ממדית של איברים זזים לאורך זמן, ויצירה סימולטנית של סאונד ווידאו מסונכרנים.</li>
            <li><strong>Runway Gen-3 Alpha:</strong> מציע כלים מדויקים לשליטה בתנועת אלמנטים ספציפיים (Motion Brush) ומסלולי מצלמה מוגדרים (Director Mode), מה שהופך אותו לאידיאלי לשילוב ממשקים דיגיטליים וקווים גרפיים מבוקרים.</li>
          </ul>
          
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>פרמטר פרומפט</th>
                  <th>תפקיד הנדסי במודל ה-AI</th>
                  <th>התאמה למדיה רפואית-שיווקית</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>הגדרת הנושא (Subject)</strong></td>
                  <td>קביעת המראה של הדמות, האיבר או המכשיר הקליני.</td>
                  <td>תיאור נקי, היגייני וסגנוני; הימנעות ממרקמים מלחיצים, דם או פתולוגיות קיצוניות.</td>
                </tr>
                <tr>
                  <td><strong>תנועת המצלמה (Camera Dynamics)</strong></td>
                  <td>הכתבת כיוון, מהירות ואופי תנועת העדשה במרחב.</td>
                  <td>תנועות חלקות ואיטיות (כגון Slow orbit או Cinematic push-in) המשדרות יוקרה ומאפשרות הבנה קלה.</td>
                </tr>
                <tr>
                  <td><strong>תאורה ואווירה (Lighting & Atmosphere)</strong></td>
                  <td>קביעת סגנון התאורה, הטמפרטורה והצללים בסצנה.</td>
                  <td>תאורת סטודיו רכה (Soft volumetric light), הימנעות מצללים כהים, ושימוש בטמפרטורת צבע חמימה.</td>
                </tr>
                <tr>
                  <td><strong>פלטת צבעים (Color Palette)</strong></td>
                  <td>הגדרת גווני הבסיס וצבעי הדגש המבוקשים במדויק.</td>
                  <td>שימוש בגוונים משקמים (Warm neutrals) בשילוב כחול-ירקרק (Teal) כצבע דגש אסטרטגי.</td>
                </tr>
                <tr>
                  <td><strong>קצב ותנועת הנושא (Tempo & Subject Motion)</strong></td>
                  <td>הגדרת אופי התנועה של הנושא עצמו בתוך הפריים.</td>
                  <td>תנועות איטיות, הרמוניות ומבוקרות המדגישות את הפונקציונליות והבטיחות של ההליך.</td>
                </tr>
              </tbody>
            </table>
          </div>`
        },
        {
          heading: "חלק ד: תבניות פרומפטים מומלצות להפקת סרטון סקירה רפואי",
          content: `<p>שני פרומפטים מפורטים ומנוסחים באנגלית (השפה המועדפת על מנועי ה-AI להשגת תוצאות מדויקות):</p>
          <p><strong>פרומפט 1: סקירה אנטומית ותהליך טיפולי (אופטימיזציה למודל Sora 2)</strong></p>
          <div class="table-container" style="margin: 1rem 0;">
            <pre style="padding: 1.25rem; font-family: monospace; font-size: 0.85rem; color: #d1d5db; white-space: pre-wrap; direction: ltr; text-align: left; background: rgba(8, 11, 19, 0.6); line-height: 1.5;">Cinematic 3D medical animation of a stylized, elegant human bronchial tube system during a gentle therapeutic inhalation process. The anatomical structure is rendered with a clean, high-end matte finish in warm cream and soft beige tones, completely omitting harsh red or blood-like textures to ensure patient comfort. Soft, volumetric studio lighting gently illuminates the scene from the top-left, casting soft shadows. A single, distinct stream of microscopic, glowing particles in transformative teal flows smoothly and rhythmically through the airway, illustrating effective drug delivery. Camera behavior: A slow, continuous clockwise orbit with a shallow depth of field, keeping the focus entirely on the particle absorption while the background remains cleanly blurred. The overall tempo is calm and slow-motion, conveying deep relief, precision, and clinical safety. High-end, premium aesthetic, 4k, 60fps.</pre>
          </div>
          <p><strong>פרומפט 2: ממשק משתמש דיגיטלי ומסע המטופל (אופטימיזציה למודל Runway Gen-3)</strong></p>
          <div class="table-container" style="margin: 1rem 0;">
            <pre style="padding: 1.25rem; font-family: monospace; font-size: 0.85rem; color: #d1d5db; white-space: pre-wrap; direction: ltr; text-align: left; background: rgba(8, 11, 19, 0.6); line-height: 1.5;">High-end promotional video showcasing a digital health application interface designed for patient onboarding, presented in a modern Bento Grid layout. The screen consists of rounded, compartmentalized cards with a sophisticated glassmorphism effect and subtle drop shadows. The background is a clean, calm, warm grey gradient. Inside the main central card, a high-fidelity 3D rendering of a modern, sleek medical device is slowly rotating. An adjacent card displays a simple, animated heart-rate wave pulsing in transformative teal, alongside a bold, clean geometric sans-serif typography reading 'Daily Care'. Camera behavior: A precise, smooth horizontal pan and gentle push-in tracking shot, isolating key interactive elements. The transitions between the grid modules are seamless and fluid, conveying a sense of simplicity, digital innovation, and complete control over one's health journey. Calming and highly professional aesthetic, 16:9 aspect ratio.</pre>
          </div>`
        },
        {
          heading: "חלק ה: סיכום והמלצות יישומיות להפקה קלינית-שיווקית",
          content: `<p>יצירת סרטוני סקירה רפואיים להדרכת מטופלים ברמה השיווקית הגבוהה ביותר דורשת שילוב קפדני בין חשיבה יצירתית לבין משמעת קלינית ומדעית. כדי להבטיח את הצלחת הפרויקט, מומלץ לעבוד לפי שלבי העבודה המוגדרים הבאים:</p>
          <ul>
            <li><strong>הגדרת מדריך מותג חזותי אחיד (Design System):</strong> טרם הזנת הפרומפטים למנועי ה-AI, יש לקבוע פלטת צבעים ספציפית בעלת יחס ניגודיות נגיש וגופנים גאומטריים קבועים, כדי לשמור על עקביות חזותית מלאה בין כל השוטים בסרטון.</li>
            <li><strong>אימות מדעי וקליני בשלבים מוקדמים:</strong> מומלץ לבצע את בקרת הדיוק הרפואי כבר בשלב כתיבת התסריט ואישור הסטוריבורד (לוח התמונות), לפני שלב הפקת הוידאו בבינה מלאכותית, כדי למנוע תיקונים מורכבים ויקרים בשלבים מתקדמים.</li>
            <li><strong>הפשטה ויזואלית מבוקרת:</strong> יש לבחון כל אלמנט אנטומי או תרשים קליני ולשאול: "האם אלמנט זה תורם להבנת המטופל, או שמא הוא מהווה עיטור מיותר המעלה את רמת החרדה שלו?".</li>
            <li><strong>אופטימיזציה למכשירים ניידים ונגישות:</strong> יש לוודא כי כל הממשקים הדיגיטליים, התיבות והטקסטים המופיעים בסרטון מותאמים לצפייה על גבי מסכים קטנים של טלפונים ניידים, ולשלב כתוביות מובנות לשיפור הנגישות.</li>
          </ul>`
        }
      ],
      sources: [
        { name: "Costello Medical - Graphic Design in MedComms", url: "https://www.costellomedical.com" },
        { name: "Spectrio - Healthcare Visual Communication Guidelines", url: "https://www.spectrio.com" },
        { name: "Honeycomb India - Healthcare Explainer Videos", url: "https://www.honeycombindia.net" },
        { name: "RunwayML - AI Video Generation Gen-3", url: "https://runwayml.com" }
      ]
    }
  },
  {
    id: "infographic",
    title: "פרומפט למתווה אינפוגרפיקה רפואית",
    subtitle: "Medical Infographic Layout Prompt",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>`,
    category: "חזותיות נתונים והנגשת מידע",
    description: "יצירת קונספט ומבנה תוכן לאינפוגרפיקות רפואיות בעלות אימפקט חזותי גבוה המפשטות פרוטוקולים או נתונים סטטיסטיים.",
    variables: [
      {
        id: "CLINICAL_TOPIC",
        label: "נושא קליני להדרכת מטופלים",
        placeholder: "הזן את נושא האינפוגרפיקה...",
        default: "טיפול באינסולין למחלת הסוכרת"
      },
      {
        id: "TARGET_AUDIENCE",
        label: "קהל יעד",
        placeholder: "הזן את קהל היעד (למשל: מטופלים, משפחות)...",
        default: "מטופלי סוכרת"
      },
      {
        id: "OUTPUT_LANGUAGE",
        label: "שפת פלט והגדרות כיוון",
        placeholder: "הזן שפה מבוקשת...",
        default: "Hebrew (עברית פשוטה, חמימה, ברורה במיוחד, בגובה העיניים, ומנוסחת ברמת קריאות של כיתה ה'), מעוצבת מימין לשמאל כמו שמקובל בעברית"
      }
    ],
    template: `You are an Elite Patient Experience (PX) Strategist, Senior Medical Illustrator, and High-End Marketing Information Designer. Your objective is to design a visually stunning, premium-grade, 1-page vertical educational infographic for patients. The infographic must balance the absolute scientific accuracy required in medicine with the warm, human-centric, and comforting aesthetic of a top-tier modern wellness brand.

[CLINICAL TOPIC FOR PATIENT EDUCATION]: "{CLINICAL_TOPIC}"
[TARGET AUDIENCE]: "{TARGET_AUDIENCE}"
[OUTPUT LANGUAGE]: "{OUTPUT_LANGUAGE}"`,
    background: {
      title: "מדריך לעיצוב אינפוגרפיקות בריאותיות",
      subtitle: "הנגשה חזותית של נתונים סטטיסטיים ופרוטוקולים רפואיים קליניים",
      introduction: `מסמך זה מיועד למטרות מידע בלבד. לקבלת ייעוץ רפואי או אבחנה, יש להיוועץ באיש מקצוע.

אינפוגרפיקה רפואית המיועדת להדרכת מטופלים ניצבת בקו התפר הרגיש ביותר של התקשורת הרפואית (MedComms). בניגוד למצגות המיועדות לצוותים קליניים, מטופלים נחשפים למידע רפואי כשהם נמצאים לרוב במצב של לחץ, חרדה או פגיעות רגשית, דבר המקטין באופן דרמטי את קיבולת זיכרון העבודה שלהם. תקשורת חזותית לקויה, עמוסה במונחים טכניים או מעוצבת בצורה מנוכרת ומפחידה, עלולה להוביל לחוסר הבנה, להימנעות מטיפול ואף לטעויות קליניות קריטיות.

מנגד, יישום עקרונות עיצוב שיווקי מתקדמים של שנת 2026 מאפשר לתרגם את המדע המורכב לשפה חזותית מרהיבה, נגישה ומעוררת אמון. על ידי שילוב של תיאוריית העומס הקוגניטיבי (CLT) יחד עם מגמות אסתטיות עיליות, ניתן לייצר אינפוגרפיקה רפואית שהיא גם יצירת אמנות ויזואלית וגם כלי הדרכה אפקטיבי מאין כמוהו. להלן הכללים החשובים ביותר לכתיבת פרומפט מערכתי להפקת אינפוגרפיקה רפואית פורצת דרך, ואחריהם קוד הפרומפט המלא.`,
      sections: [
        {
          heading: "חלק א: עקרונות האופטימיזציה הקוגניטיבית והנגשת המידע למטופל",
          content: `<p>כאשר מתכננים אינפוגרפיקה רפואית להדרכת מטופלים, המטרה העליונה היא צמצום מקסימלי של "העומס הקוגניטיבי החיצוני" (Extraneous Cognitive Load) – כלומר, ביטול כל אלמנט ויזואלי או מילולי שאינו תורם ישירות להבנת המסר.</p>
          <ul>
            <li><strong>איורים קוויים מפושטים על פני צילומי תקריב (Streamlined Graphics over Photos):</strong> צילומי רפואה אמיתיים מכילים פרטים מסיחים רבים ומעוררים במטופלים פחד או חרדה. שימוש באיורים קוויים נקיים (Line Drawings) או גרפיקה וקטורית ממוקדת מאפשר למטופל להתרכז אך ורק בהנחיות הטיפול, ללא הסחות דעת.</li>
            <li><strong>האנשה ובניית אמון פסיכולוגי (Humanizing Content):</strong> אם האינפוגרפיקה מציגה דמויות אנושיות (למשל, הדגמה של נטילת משאף או הזרקת אינסולין), יש לעצב דמויות בעלות תווי פנים ברורים – עיניים, אף ופה – שכן המוח האנושי מתוכנן לחפש הבעות פנים כדי לבסס ביטחון ואמפתיה.</li>
            <li><strong>מניעת פיצול קשב ויתירות (No Split Attention & Redundancy):</strong> יש לשלב את כתוביות ההסבר (Annotations) והמדדים ישירות על גבי האיור או הגרף, במקום להשתמש במקרא (Legend) מרוחק המאלץ את המטופל לדלג במבטו. בנוסף, יש לצמצם את הטקסט המלווה למינימום האפשרי למניעת יתירות.</li>
            <li><strong>שימוש אסטרטגי במרחב נשימה (White Space):</strong> אינפוגרפיקה מקצועית אינה מנסה לדחוס מידע לכל קצה פנוי. מרחב שלילי נדיב מסביב לטקסטים ולאיורים מסייע לארגן את המידע במוח ומונע הצפה.</li>
          </ul>`
        },
        {
          heading: "חלק ב: שילוב עקרונות עיצוב שיווקי מתקדם לשנת 2026",
          content: `<p>כדי שהאינפוגרפיקה תיראה כאילו עוצבה על ידי סוכנות מיתוג עילית ותבלוט ברשתות החברתיות, בקליניקות או כדפי הסבר דיגיטליים, עלינו להחיל עליה את מגמות העיצוב השיווקי המובילות:</p>
          <ul>
            <li><strong>פלטת צבעים רסטורטיבית ומרגיעה:</strong> שימוש בגוונים מרגיעים כמו ירוק זית עמוק, אפור חם, גווני נייר טבעיים (Wax Paper) וסגול עדין מעניק תחושת שלווה. בתוך כך משלבים את צבע השנה – <em>"טיל טרנספורמטיבי" (Transformative Teal)</em> – כצבע הדגשה (Accent Tone) יחיד לסימון נתוני מפתח או קריאות לפעולה.</li>
            <li><strong>טיפוגרפיה היררכית נקייה (Typography-Led Layout):</strong> שימוש בלא יותר משתי משפחות גופנים (Sans-Serif, כמו Arial או Calibri). הכותרות צריכות להיות גדולות ודומיננטיות, אך נקיות מקישוטים ומאותיות מודגשות לחלוטין (avoid all-caps).</li>
            <li><strong>מבנה "בנטו" מודולרי (Bento Grid):</strong> חלוקת האינפוגרפיקה לתיבות מוגדרות בעלות פינות מעוגלות (Border Radius של 12-16px) וצללים רכים המעניקים עומק עדין, המאפשרים למטופל לקרוא כל תא כפרק עצמאי.</li>
          </ul>
          
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>אלמנט עיצובי</th>
                  <th>הגישה המיושנת (רוויה ומלחיצה)</th>
                  <th>הגישה השיווקית המודרנית (משפיעה ומרגיעה)</th>
                  <th>השפעה פסיכולוגית על המטופל</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>סגנון ויזואלי ודימויים</strong></td>
                  <td>צילומי תקריב רפואיים קרירים או סמלים גנריים מנוכרים.</td>
                  <td>איורים קוויים נקיים עם פנים אנושיות בעלות הבעה ברורה.</td>
                  <td>הפחתת רמת החרדה, בניית אמון מיידי ותמיכה באוריינות בריאות נמוכה.</td>
                </tr>
                <tr>
                  <td><strong>פלטת צבעים</strong></td>
                  <td>שימוש בצבעי אזהרה (אדום רווי, צהוב זרחני) או כחול בית-חולים מדכא.</td>
                  <td>צבעי בסיס חמימים ומרגיעים (גווני נייר, ירוק זית) עם נגיעות Transformative Teal לפעולה.</td>
                  <td>יצירת חוויה טיפולית תומכת ומניעת תגובות רגשיות מתגוננות.</td>
                </tr>
                <tr>
                  <td><strong>טקסט וקריאות</strong></td>
                  <td>פסקאות ארוכות עם ז'רגון רפואי מורכב, כיתוב באותיות מודגשות לחלוטין.</td>
                  <td>פסקאות קצרות (עד 2 משפטים), פנייה אישית בגובה העיניים, שימוש בפעלים אקטיביים.</td>
                  <td>הבנה מהירה של השלבים בטיפול והגברת המסוגלות העצמית (Self-Efficacy).</td>
                </tr>
              </tbody>
            </table>
          </div>`
        },
        {
          heading: "חלק ג: חוקי שפה, נרטיב והנעה לפעולה (CTA)",
          content: `<p>כדי שהאינפוגרפיקה תניע את המטופל לפעולה ותשפר את ההיענות שלו להנחיות הרפואיות, עליה לציית לחוקי כתיבה קפדניים:</p>
          <ul>
            <li><strong>רמת קריאות מותאמת (Readability Grade):</strong> טקסטים המיועדים לקהל הרחב צריכים להיכתב ברמת קריאות של כיתות ד' עד ו' (ובכל מקרה לא יותר מכיתה ח'). שפה פשוטה (Plain Language), משפטים קצרים ומילים מוכרות, ללא ז'רגון רפואי מסורבל.</li>
            <li><strong>קול אקטיבי ואישי (Active Voice & Personal Pronouns):</strong> פנייה ישירה אל המטופל בלשון נוכח ("אתה", "אנחנו") ובזמן הווה מייצרת חיבור רגשי מיידי ומגבירה את האחריות האישית על בריאותו.</li>
            <li><strong>נרטיב של מסע בן 3 חלקים:</strong>
              <ol>
                <li><strong>חלק ראשון (מבוא):</strong> למה המידע הזה חשוב עבורו באופן אישי (בתוך מסגרת מרגיעה).</li>
                <li><strong>חלק שני (ליבת המידע):</strong> שלבי הפעולה שעליו לבצע כציר זמן כרונולוגי ממוספר (1, 2, 3, 4) עם כותרות בולטות ב-Teal.</li>
                <li><strong>חלק שלישי (הנעה לפעולה ומשאבים):</strong> קריאה ברורה לפעולה (CTA), אזור אזהרות מעודן ("נורות אדומות") בגווני כתום חם, ודיסקליימר רפואי בתחתית.</li>
              </ol>
            </li>
          </ul>`
        },
        {
          heading: "חלק ד: קוד הפרומפט המערכתי המוביל (The Master System Prompt)",
          content: `<p>הפרומפט המערכתי המלא המנוסח באנגלית לצורך דיוק מרחבי ועיצובי אופטימלי במחוללי ה-AI:</p>
          <div class="table-container" style="margin: 1.5rem 0;">
            <pre style="padding: 1.5rem; font-family: monospace; font-size: 0.85rem; color: #d1d5db; white-space: pre-wrap; direction: ltr; text-align: left; background: rgba(8, 11, 19, 0.6); line-height: 1.6;">You are an Elite Patient Experience (PX) Strategist, Senior Medical Illustrator, and High-End Marketing Information Designer. Your objective is to design a visually stunning, premium-grade, 1-page vertical educational infographic for patients. The infographic must balance the absolute scientific accuracy required in medicine with the warm, human-centric, and comforting aesthetic of a top-tier modern wellness brand.

[CLINICAL TOPIC FOR PATIENT EDUCATION]: "ניהול ביתי של יתר לחץ דם: השלבים היומיומיים להצלחה ומניעת סיבוכים"
[TARGET AUDIENCE]: "מטופלים שאובחנו לאחרונה עם יתר לחץ דם, בני משפחתם, ואנשים בעלי אוריינות בריאות מגוונת"
[OUTPUT LANGUAGE]: "Hebrew (עברית פשוטה, חמימה, ברורה במיוחד, בגובה העיניים, ומנוסחת ברמת קריאות של כיתה ה')"

PART 1: VISUAL DESIGN SYSTEM & AESTHETIC (2026 STANDARDS)
LAYOUT & GRID: Structure the infographic vertically using a highly organized, modular "Bento Grid" layout. Divide the page into rounded containment cards (border-radius: 16px) with soft, organic depth-drop shadows to separate concepts. Ensure a generous amount of negative space (white space) around text blocks and diagrams to prevent visual crowding and anxiety.

COLOR THEORY (RESTORATIVE PALETTE): Avoid alarming clinical colors (such as harsh bright reds or cold institutional blues). Instead, use:
Base Background: Warm, restorative, and calming neutrals (e.g., Wax Paper White, soft linen grey, or muted sage).
Core Text/Lines: Deep Charcoal or Slate Gray (avoid pure black to ensure a premium, softer look).
Core Accent Color: Transformative Teal (Hex #008080) used strictly as a tactical tool to guide the patient’s eye to key actions, step numbers, and the final Call to Action (CTA).

ACCESSIBILITY: Every single element must maintain a strict 7:1 color contrast ratio against its background to guarantee legibility under dim home lighting or on small mobile screens.

TYPOGRAPHY: Limit the entire graphic to exactly two Sans-Serif font families. Headers must be bold and clean. Never use all-caps, heavy underlined text, or italics for body copy. Use bold weight within the same font family exclusively to emphasize vital clinical steps.

PART 2: COGNITIVE OVERLOAD PREVENTION (PATIENT-CENTRIC CLT LAWS)
GRAPHICS OVER PHOTOGRAPHY: Do not use real medical photographs or complex 3D renders. Instead, use streamlined, minimalistic vector line drawings and icons to illustrate instructions.

HUMANIZATION RULES: For any illustrations depicting people, body parts, or patients taking action, never use generic silhouettes. Always include clean, simple, and friendly facial features (displaying eyes, nose, and mouth) to cultivate psychological safety and empathy.

ADJACENT ANNOTATIONS (AVOID SPLIT ATTENTION): Place explanatory text, step numbers, and labels directly next to or on top of the corresponding visual elements. Do not use distant legends or footnotes that require the patient to look back and forth.

INFORMATION SCARCITY PRINCIPLE: Minimize text. If a visual or icon clearly explains a step (such as swallowing a pill with water), use a maximum of one short sentence (under 10 words) of accompanying text.

PART 3: HEBREW NARRATIVE & READABILITY FLOW
Structure the text content in a logical, chronological 3-part journey using personal pronouns ("you" and "we") and the active, present tense:
Header & Reassurance (Introduction): Create a warm, welcoming title that answers "Is this for me?" and explains why this infographic is important to them, set inside a soft, reassuring frame.
The Action Steps (Core Body): Present the daily monitoring and lifestyle steps as a chronological, numbered timeline (1, 2, 3, 4). Use plain Hebrew without clinical jargon. For example, write "מדוד לחץ דם במנוחה" instead of "ביצוע סקירה המודינמית קלינית". Use large, bold numbers highlighted in Transformative Teal.
The Actionable Destination (CTA & Safety):
- Feature a prominent, beautiful container at the bottom with a clear Call to Action (CTA) like: "הורד את יומן המעקב האישי שלך או פנה לרופא המשפחה להתחלת התוכנית".
- Include a clear, small visual warning section for "Red Flags" (when to contact the clinic immediately) using soft warm-orange indicators rather than frightening emergency symbols.
- Place a standard, highly visible medical disclaimer at the absolute bottom.

Do not generate placeholder text. Ensure all Hebrew translations are grammatically perfect, natural, respectful, and comforting.</pre>
          </div>`
        }
      ],
      sources: [
        { name: "CDC - Health Literacy and Visual Communication Guides", url: "https://www.cdc.gov" },
        { name: "Web Content Accessibility Guidelines (WCAG) 2.1", url: "https://www.w3.org" },
        { name: "Plain Language Action and Information Network (PLAIN)", url: "https://www.plainlanguage.gov" }
      ]
    }
  }
];

// If window is defined (browser environment), attach to window.
if (typeof window !== "undefined") {
  window.PROMPTS_DATA = PROMPTS_DATA;
}

// Export for module systems (Node / Vite / tests)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PROMPTS_DATA };
}
