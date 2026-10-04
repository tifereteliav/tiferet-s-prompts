/**
 * Prompts Data for the HealthTech & MedComms Prompt Hub
 * This file contains the template text, variables, and rich background details
 * for the presentation, video script, and infographic prompts.
 */

const PROMPTS_DATA = [
  {
    id: "branding_headshots",
    title: "מחולל תמונות תדמית ומיתוג אישי",
    subtitle: "AI Executive Headshots & Personal Branding Portraits",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>`,
    category: "תמונות תדמית, פורטרטים ומיתוג אישי",
    description: "מחולל חכם ומדויק לתמונות תדמית מקצועיות, פורטרטים ללינקדאין, סטודיו Zen-Tech על אותיות שם תלת-ממדיות, שולחן שיש יוקרתי ועוד – עם התאמה מלאה לגבר/אישה, מרקמי בדים אותנטיים ושפת צילום מתקדמת.",
    variables: [
      {
        id: "GENDER",
        label: "הגדרת מגדר וסממני ראש/שיער",
        placeholder: "בחר מגדר...",
        default: "woman_covered"
      },
      {
        id: "SCENARIO",
        label: "קונספט וסצנת התדמית (Portrait Scenario)",
        placeholder: "בחר סצנה...",
        default: "3d_letters"
      },
      {
        id: "WARDROBE_STYLE",
        label: "סגנון לבוש ואריגים (Materials, Not Vibes)",
        placeholder: "בחר סגנון לבוש...",
        default: "tailored_contrast"
      },
      {
        id: "NAME_TEXT",
        label: "שם לאותיות תלת-ממד (Name for 3D Letters)",
        placeholder: "הקלד את השם שיופיע באותיות זהב (למשל: Tiferet)...",
        default: "Tiferet"
      },
      {
        id: "ENGRAVED_TEXT",
        label: "כיתוב לחריטה / הצגה בעברית או אנגלית",
        placeholder: "למשל: חג ט\"ו בשבט שמח! או סלוגן המותג...",
        default: "חג ט\"ו בשבט שמח!"
      },
      {
        id: "DISPLAY_ITEMS",
        label: "סידור פריטים / מוצרים על השולחן או בסצנה",
        placeholder: "למשל: סידור פירות פרימיום, לפטופ דק ומחברת עור...",
        default: "an exquisite and abundant arrangement of premium Tu BiShvat fruits—glistening Medjool dates, honey-glazed apricots, ruby-red pomegranate seeds, and vibrant tropical fruits—styled like high-end jewelry"
      },
      {
        id: "CAMERA_LENS",
        label: "שפת מצלמה ועדשה (Camera Lens & Style)",
        placeholder: "בחר עדשה...",
        default: "85mm"
      },
      {
        id: "LIGHTING",
        label: "תאורה מכוונת (Directional Lighting)",
        placeholder: "בחר סגנון תאורה...",
        default: "softbox_rim"
      },
      {
        id: "REALISM_MODE",
        label: "סגנון ריאליזם ומרקם עור (Skin Authenticity)",
        placeholder: "בחר רמת ריאליזם...",
        default: "authentic_skin"
      },
      {
        id: "ACTION_MODE",
        label: "מצב פעולה (יצירה חדשה / עריכה נקודתית)",
        placeholder: "בחר מצב...",
        default: "generate"
      },
      {
        id: "EDIT_INSTRUCTION",
        label: "הוראת עריכה נקודתית (Edit, Don't Regenerate)",
        placeholder: "תאר בדיוק מה לשנות (למשל: change blazer color to emerald green)...",
        default: "change blazer color to deep midnight navy"
      },
      {
        id: "ASPECT_RATIO",
        label: "יחס גובה-רוחב (Aspect Ratio)",
        placeholder: "בחר יחס תמונה...",
        default: "1:1"
      }
    ],
    template: `{PROMPT_CONTENT}`,
    background: {
      title: "המדריך המלא: יצירת תמונות תדמית ופורטרטים מקצועיים ב-AI",
      subtitle: "ממראה פלסטיק מביך לתוצאות שנראות טוב באמת – מתודולוגיית הצילום והריאליזם המתקדמת",
      introduction: `תמונת תדמית מקצועית (Executive Headshot / Personal Branding Portrait) היא חלון הראווה הדיגיטלי שלכם ברשתות החברתיות, בלינקדאין, באתרי אינטרנט ובמצגות עסקיות.

בעוד שרוב מחוללי התמונות הגנריים מייצרים דמויות בעלות מראה "שעווה" או פלסטיק מלאכותי וחסר חיים, שימוש בהנדסת פרומפטים מקצועית המבוססת על עקרונות צילום אמיתיים – בחירת עדשות, תאורה עם כיוון, מרקמי בדים מוגדרים (Materials, Not Vibes), ועור אנושי בעל נקבוביות ופגמים טבעיים (Perfect Imperfection) – מייצר תוצאות עוצרות נשימה הנראות כאילו צולמו בסטודיו יוקרתי או נתפסו ברגע אותנטי מהחיים.

מדריך זה מרכז את 6 הכללים הקריטיים מתוך הדרכת העומק לצילום תדמית ב-AI, יחד עם פירוט עדשות, זוויות צילום, והשוואת לבוש מדויקת בין גברים לנשים.`,
      sections: [
        {
          heading: "כלל 1: חומרים ולא תחושות (Materials, Not Vibes)",
          content: `<p>הטעות הנפוצה ביותר היא לכתוב למודל ביטויים סובייקטיביים כמו <em>"חולצה יפה"</em>, <em>"חליפה יוקרתית"</em> או <em>"משרד מודרני"</em>. המודל אינו מבין "וייבים" מופשטים – הוא מבין <strong>מרקמים, שזירות וגימורים פיזיים</strong>:</p>
          <ul>
            <li><strong>במקום "חולצה יפה":</strong> נגדיר <code>Chocolate brown linen shirt, natural linen fabric weave</code> (בד פשתן חום שוקולד בעל מרקם אריגה טבעי) או <code>crisp white poplin cotton button-down shirt</code>.</li>
            <li><strong>במקום "חליפה מחויטת":</strong> נגדיר <code>structured ivory blazer in rich textured wool crepe over a jet-black modest dress</code>.</li>
            <li><strong>הגדירו חומרים אמיתיים בסצנה:</strong> שיש קררה לבן עם נימים אפורים עדינים (<code>pristine white Carrara marble with delicate grey veining</code>), זהב 18K מלוטש או מוברש (<code>polished 18K gold</code>), זכוכית קריסטלית שקופה וחלקה (<code>seamless transparent crystalline glass</code>), או עץ אלון טבעי.</li>
          </ul>`
        },
        {
          heading: "כלל 2: תאורה עם כיוון, לא \"תאורה טובה\" (Directional Lighting)",
          content: `<p>הביטוי <code>Good lighting</code> הוא ביטוי ריק שלא אומר למודל שום דבר. מה שהופך תמונה לאמינה זו תאורה שמייצרת <strong>צללים אמיתיים ומבנה נפח תלת-ממדי</strong> בחדר:</p>
          <ul>
            <li><strong>אור חלון אותנטי עם צללים שבורים:</strong> <code>Soft natural window light from the left, casting irregular leaf-like shadows</code>. ברגע שיש לתאורה כיוון מוגדר וצללים לא אחידים, מוח האדם תופס את הפריים כצילום אמיתי ולא כרינדור ממוחשב.</li>
            <li><strong>תאורת סטודיו ממוקדת והפרדת שוליים:</strong> שילוב של סופט-בוקס רך המאיר את תווי הפנים בזווית 45 מעלות, יחד עם תאורת שוליים מוזהבת עדינה (<code>subtle golden rim light</code>) המפרידה את הסילואט מהרקע ויוצרת עומק קולנועי.</li>
            <li><strong>תאורת High-Key מוארת ונקייה:</strong> ביטול צללים כבדים מתחת לעיניים באמצעות תאורה רכה מפוזרת שמעניקה לפנים זוהר מקצועי ונקי (מתאים במיוחד לתמונות פרופיל לרשתות).</li>
          </ul>`
        },
        {
          heading: "כלל 3: מחקו מיד את 5 מילות הפלסטיק של ה-AI!",
          content: `<p>הימנעו לחלוטין משימוש במילות הבאזז הנדושות: <code>8K</code>, <code>ultra-realistic</code>, <code>masterpiece</code>, <code>hyper-detailed</code>, <code>award-winning</code>.</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>במקום מילות הפלסטיק (שיוצרות עור שעווה מלאכותי)</th>
                  <th>החליפו בביטויי אמינות ואותנטיות אנושית</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>8K, ultra-realistic, hyper-detailed</code></td>
                  <td><code>realistic skin texture, visible pores, subtle natural imperfections</code></td>
                </tr>
                <tr>
                  <td><code>award-winning flawless face</code></td>
                  <td><code>natural authentic expression, perfectly imperfect, gentle laugh lines</code></td>
                </tr>
                <tr>
                  <td><code>plastic studio glamour</code></td>
                  <td><code>tactile fabric weaves, natural hair strands, authentic depth of field</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>פגמים קלים ומרקמי עור אמיתיים הם בדיוק מה שהופך תמונה לאנושית ומעוררת אמון! אף אחד מאיתנו אינו בובת פלסטיק.</p>`
        },
        {
          heading: "כלל 4: שפת מצלמה היא סגנון, לא פיזיקה (Camera Lens Aesthetics)",
          content: `<p>המודל אינו מרכיב עדשת זכוכית פיזית, אלא מזהה את <strong>האסתטיקה, הפרופורציות ועומק השדה</strong> שמזוהים עם כל אורך מוקד:</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>אורך מוקד ועדשה</th>
                  <th>סגנון והשפעה ויזואלית</th>
                  <th>מתי מומלץ להשתמש?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>85mm ב-f/1.8 (או f/1.2)</strong></td>
                  <td>ברירת המחדל המושלמת לפורטרט מחמיא, פרופורציות פנים טבעיות, טשטוש רקע מלטף ובוקה קולנועי רך.</td>
                  <td>תמונות תדמית מנהלים, פורטרטים יוקרתיים, צילום על רקע אותיות או שולחן שיש.</td>
                </tr>
                <tr>
                  <td><strong>100mm ב-f/1.4</strong></td>
                  <td>תקריב פנים הדוק (Tight Headshot), פוקוס חד על העיניים, פירוט נקבוביות מרבי ובידוד מוחלט מהרקע.</td>
                  <td>תמונת פרופיל סמכותית ל-LinkedIn, כתבות עיתונות, כרטיסי מרצה.</td>
                </tr>
                <tr>
                  <td><strong>50mm ב-f/1.8</strong></td>
                  <td>מראה תיעודי, נקי, קרוב מאוד לזווית הראייה הטבעית של העין האנושית, ללא עיוותי פרספקטיבה.</td>
                  <td>תמונות תדמית יומיומיות, מבט ישיר ואמין בגובה העיניים, סביבת קליניקה.</td>
                </tr>
                <tr>
                  <td><strong>24mm – 35mm</strong></td>
                  <td>זווית רחבה יחסית הלוכדת את הדמות יחד עם סביבת העבודה המלאה. תחושה יומיומית אותנטית של צילום סמארטפון איכותי.</td>
                  <td>תמונות סביבת עבודה, צילום בתוך מעבדה/משרד פתוח, פוסטים לרשתות חברתיות.</td>
                </tr>
              </tbody>
            </table>
          </div>`
        },
        {
          heading: "כלל 5: עריכה במקום יצירה מחדש (Edit, Don't Regenerate)",
          content: `<p>קיבלתם תמונה שיצאה 90% מושלמת? <strong>אל תלחצו על Generate מחדש!</strong> אין Seed קבוע ברוב המודלים, ובחיים לא תקבלו שוב את אותה גרסה מוצלחת.</p>
          <p>במקום זאת, תנו הוראת עריכה נקודתית במבנה הבא:</p>
          <div style="background: rgba(0, 203, 203, 0.08); border: 1px solid rgba(0, 203, 203, 0.25); border-radius: 8px; padding: 1rem; margin: 1rem 0; font-family: monospace; direction: ltr; text-align: left;">
            Strictly maintain the exact character identity, facial structure, skin texture, lighting, and composition 100% identical. Only modify: [הגדירו שינוי בודד, למשל צבע החליפה או הבעת החיוך]. Make no other changes.
          </div>
          <p><strong>הכלל:</strong> שינוי נקודתי אחד בכל פעם, תוך דרישה מפורשת לשמר את כל שאר מרכיבי התמונה.</p>`
        },
        {
          heading: "כלל 6: הטיפ למתקדמים – הטריק של ה-Camera Roll",
          content: `<p>רוצים תמונה שנראית כמו תפיסה אותנטית שתפסתם ברגע אמיתי מהגלריה של הטלפון ולא כמו צילום סטודיו מלאכותי? תתארו <em>"כשל" קל של מצלמה</em>:</p>
          <ul>
            <li><code>Shot on iPhone, AF pulled slightly to the background</code> (הפוקוס האוטומטי נמשך מעט לרקע)</li>
            <li><code>incomplete HDR correction, direct handheld flash</code></li>
          </ul>
          <p>כאשר המיקוד מעט מטושטש על הדמות וחד על הרקע או כאשר התאורה אינה שטוחה אלא פלאש ישיר אופנתי, המוח האנושי משתכנע מיד שמדובר בצילום אמיתי ולא בבינה מלאכותית!</p>`
        },
        {
          heading: "איך להבטיח שהחליפה של האישה תיראה נשית ולא גברית? (Feminine Tailoring)",
          content: `<p>במחוללי תמונות בינה מלאכותית (Midjourney, Flux, DALL-E), שימוש במילים כלליות כמו <em>"Suit"</em>, <em>"Blazer"</em> או <em>"Button-down shirt"</em> עלול לגרום למודל להשתמש במשקלי אימון של חליפות עסקים גבריות (כתפיים רחבות ומרובעות, גזרה ישרה ללא מותן ומראה מגושם). כדי להבטיח שהתוצאה תהיה <strong>נשית, מחמיאה, אלגנטית ומדויקת</strong>, המערכת משלבת מספר מנגנוני הגנה מוכחים:</p>
          <ul>
            <li><strong>הגדרת גזרה מחוטבת (Cinched Waist & Princess Seams):</strong> הדגשת מותן מוגדרת (<code>contoured feminine waistline</code>) ותפרי פרינסס נשיים המונעים גזרה קופסתית.</li>
            <li><strong>כתפיים רכות וטבעיות:</strong> שימוש ב-<code>soft natural feminine shoulder line</code> מבטל לחלוטין את כריות הכתפיים הגבריות המרובעות.</li>
            <li><strong>דשים מעודנים (Shawl or Curved Lapels):</strong> דשים מעוגלים ודקים במקום דשי חליפה גבריים נוקשים.</li>
            <li><strong>שכבה פנימית נשית ונשפכת:</strong> החלפת חולצה מכופתרת גברית בטופ משי רך (<code>fluid silk blouse</code>), שמלה צנועה זורמת עם מותן מוגדרת, או ז'קט שאנל/טוויד פריזאי עם כפתורי פנינה ללא דשים כלל (<code>Chanel-style collarless tweed jacket</code>).</li>
            <li><strong>הנחיית שלילה מכוונת (Negative Prompt):</strong> הוספת <code>--no masculine cut, boxy suit, oversized male shoulders, necktie, male clothing</code> שמסננת כל מאפיין גברי באופן אקטיבי.</li>
          </ul>`
        },
        {
          heading: "השוואת ביגוד וסממנים מגדריים (Wardrobe Blueprint)",
          content: `<p>התאמה של סגנון הלבוש והחליפה בהתאם למגדר ולסממני הראש:</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>סגנון לבוש</th>
                  <th>התאמה לאישה (כיסוי ראש צנוע)</th>
                  <th>התאמה לאישה (שיער מעוצב פזור)</th>
                  <th>התאמה לגבר</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>מחויט עסקי יוקרתי</strong></td>
                  <td>בלייזר שנהב מחויט מעל שמלה שחורה צנועה מבד צמר קרפ עשיר, כיסוי ראש אלגנטי תואם.</td>
                  <td>בלייזר שחור מחויט מעל חולצה מכופתרת לבנה צחורה / בלייזר שנהב מעל טופ משי שחור, שיער מעוצב בבלואאוט מקצועי.</td>
                  <td>חליפת צמר כהה (נייבי או פחם), חולצה מכופתרת לבנה צחורה מבד כותנה פופלין, מכנסיים מחויטים, עניבה אופציונלית.</td>
                </tr>
                <tr>
                  <td><strong>High-Contrast יוקרתי</strong></td>
                  <td>שמלה שחורה צנועה מובחנת תחת בלייזר שנהב חד-גזרה (Ivory Blazer) עם טקסטורת אריג עשירה.</td>
                  <td>טופ משי שחור יוקרתי תחת בלייזר שנהב חד-גזרה ומכנסיים שחורים מחויטים.</td>
                  <td>חולצה לבנה מכופתרת מגוהצת תחת בלייזר שחור מחויט ומכנסי גרפיט כהים.</td>
                </tr>
                <tr>
                  <td><strong>סמארט קז'ואל איכותי</strong></td>
                  <td>שמלת פשתן אלגנטית ארוכה עם בלייזר קליל בגוון אבן/חול טבעי, צעיף/כיסוי ראש הרמוני.</td>
                  <td>טופ משי אלגנטי ומכנסי פשתן מחויטים עם בלייזר רך בגוון אבן, שיער טבעי ומסודר.</td>
                  <td>חולצת פשתן איכותית בצבע לבן או חום שוקולד (Natural Linen Weave), בלייזר קליל ומכנסי צ'ינו מחויטים.</td>
                </tr>
                <tr>
                  <td><strong>רפואי / HealthTech</strong></td>
                  <td>חלוק רופאה לבן מגוהץ ואיכותי מעל ביגוד צנוע אלגנטי, או מדי סקראבס פרימיום בכחול נייבי עמוק.</td>
                  <td>חלוק מעבדה/קליניקה לבן מוקפד מעל טופ כחול/שחור, או מדי סקראבס מעוצבים בגזרה מחמיאה.</td>
                  <td>חלוק רופאים לבן מגוהץ עם צווארון חד מעל חולצה מכופתרת כחולה, או סקראבס פרימיום מודרניים.</td>
                </tr>
              </tbody>
            </table>
          </div>`
        }
      ],
      sources: [
        { name: "Master Photography & Lighting Guide (Materials, Not Vibes)", url: "#" },
        { name: "Midjourney & Flux Character Consistency Blueprint", url: "https://midjourney.com" },
        { name: "Executive Branding & High-Impact Headshots (2026 Standards)", url: "#" }
      ]
    }
  },
  {
    id: "ai_logo_strategy",
    title: "מחולל פרומפטים לתוכנית אב למיתוג וזהות",
    subtitle: "Master Brand Strategy & Visual Identity Blueprint",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>`,
    category: "מיתוג, לוגואים וזהות ויזואלית",
    description: "יצירת פרומפט מקיף לתוכנית אב אסטרטגית למיתוג: ניתוח זהות, פסיכולוגיית צבעים, טיפוגרפיה, ופיצוח הלוגו האידיאלי ביותר למותג שלך.",
    variables: [
      {
        id: "BRAND_NAME",
        label: "שם המותג / העסק והסלוגן (Brand Name & Slogan)",
        placeholder: "הזן את שם המותג/עסק והסלוגן אם קיים (למשל: NovaMed - Smart Diagnostics)...",
        default: "PulseCraft - Smart Digital Health"
      },
      {
        id: "BUSINESS_FIELD",
        label: "תחום העסק ומה הוא עושה (Industry & What the business does)",
        placeholder: "תאר מה העסק עושה, המוצר המרכזי או השירות...",
        default: "פלטפורמת בינה מלאכותית לניטור מדדים רפואיים וחיזוי בריאותי מותאם אישית למטופלים ומרפאות"
      },
      {
        id: "BRAND_VALUES",
        label: "ערכי המותג, אישיות והמסר שרוצים לשדר (Values & Personality)",
        placeholder: "אמינות, חדשנות, חום, מקצועיות, יוקרה, דיוק מדעי...",
        default: "אמינות קלינית ללא פשרות, חדשנות טכנולוגית פורצת דרך, אופטימיות, חמימות ופשטות שמעניקה שקט נפשי"
      },
      {
        id: "LOGO_STYLE",
        label: "סגנון וכיוון עיצובי של הלוגו (Logo Style & Aesthetics)",
        placeholder: "בחר סגנון מועדף...",
        default: "Minimalist Geometric & Smart Negative Space: סמל גיאומטרי שטוח, מודרני ונקי, עם מטאפורה חכמה וחלל שלילי המשלב בין דופק/גל לבבי לבין מגן ביטחון וצמיחה"
      },
      {
        id: "COLOR_PALETTE",
        label: "פלטת צבעים והרגש שהם מעבירים (Color Palette & Psychology)",
        placeholder: "בחר פלטת צבעים...",
        default: "Clinical Deep Blue & Luminous Cyan: כחול כהה עמוק (#0B192C) המסמל אמינות וסמכות, וטורקיז-ציאן זוהר (#00CBCB) המסמל חדשנות דיגיטלית וחיות"
      },
      {
        id: "VISUAL_ELEMENTS",
        label: "קטגוריית סמלים ואלמנטים ויזואליים (Visual Metaphor & Symbols)",
        placeholder: "בחר קטגוריה או הקלד אלמנטים מותאמים אישית...",
        default: "רפואה, בריאות וחיים: גל דופק אלגנטי המשולב בצורת מגן צמיחה (ללא קלישאות גנריות, ללא סטטוסקופים נדושים וללא צללים כבדים)"
      },
      {
        id: "OUTPUT_LANGUAGE",
        label: "שפת פלט והסברים",
        placeholder: "עברית עם פרומפט תמונה באנגלית...",
        default: "Hebrew (תוכנית אב, ניתוח וצ'קליסט בעברית רהוטה + פרומפט תמונה מקצועי באנגלית מוכן להעתקה לכל מחולל AI)"
      }
    ],
    template: `You are a World-Class Principal Brand Identity Director, Master Typographer, and Legendary Vector Logo Designer (combining the strategic mastery of Paul Rand and Massimo Vignelli with cutting-edge 2026 AI prompt engineering).

Your mission is to formulate a comprehensive Master Brand Identity Blueprint for the brand below, and synthesize everything into THE ONE SINGLE IDEAL, WINNING LOGO CONCEPT, accompanied by an exact, production-ready AI image generator prompt.

================================================================================
BRAND PROFILE & DESIGN SPECIFICATIONS
================================================================================
- [BRAND NAME & SLOGAN]: "{BRAND_NAME}"
- [INDUSTRY & CORE BUSINESS]: "{BUSINESS_FIELD}"
- [CORE VALUES & BRAND PERSONALITY]: "{BRAND_VALUES}"
- [PREFERRED LOGO STYLE]: "{LOGO_STYLE}"
- [COLOR PALETTE & PSYCHOLOGY]: "{COLOR_PALETTE}"
- [VISUAL ELEMENTS & METAPHORS]: "{VISUAL_ELEMENTS}"
- [OUTPUT LANGUAGE]: "{OUTPUT_LANGUAGE}"

================================================================================
CRITICAL LOGO DESIGN DIRECTIVES (NEVER GENERATE GENERIC LOGOS)
================================================================================
1. THE BRAND-FIRST PRINCIPLE (UNIVERSAL TIMELESS APPEAL):
   A great logo does not try to cater to fragmented micro-demographics; it embodies the true DNA, character, and soul of the brand itself. It must resonate with authority, clarity, and instant emotional connection for all stakeholders.
2. STRICT SIMPLICITY & FLAT VECTOR AESTHETICS:
   "Less detail = More power". Strictly enforce flat 2D vector styling (vector graphic logo, flat 2d, clean solid lines, isolated on pure white background). NEVER produce 3D photorealistic clutter, muddy textures, drop shadows, bevels, realistic gradients, or messy sketches.
3. THE 16x16 FAVICON SCALABILITY TEST:
   The core symbol must be so structurally iconic that it remains 100% crisp and identifiable at 16x16 px in a browser tab or mobile app icon, as well as on giant billboard signage and physical embroidery.
4. THE SILHOUETTE & MONOCHROME TEST:
   The winning logo MUST work flawlessly in 100% solid black on pure white, and pure white on solid black. If a logo depends on color gradients or effects to be understood, it is flawed.
5. ANTI-CLICHÉ FILTERING:
   Strictly avoid generic AI logo clichés (e.g., standard lightbulbs for ideas, generic hands holding plants, interlocking puzzle pieces, generic circular swooshes, or clunky geometric gears). Translate concepts into a sophisticated, bespoke visual metaphor.
6. MODULAR ARCHITECTURE (ICON + WORDMARK):
   Clearly separate the visual symbol (Brand Mark / Icon) from the typographic company name (Wordmark) so they can function independently across digital apps, favicons, and print media.

================================================================================
MASTER BRAND IDENTITY BLUEPRINT (GENERATE IN {OUTPUT_LANGUAGE})
================================================================================

--------------------------------------------------------------------------------
PART 1: MASTER BRAND STRATEGY & IDENTITY ARCHITECTURE
--------------------------------------------------------------------------------
1. Brand Essence & Strategic Positioning: How this visual identity establishes "{BRAND_NAME}" as a market leader with unmistakable distinction.
2. Emotional Tone & Brand Archetype: The primary emotional impact (e.g., trust, cutting-edge innovation, effortless warmth, understated luxury).
3. Color Psychology & Exact Palette: Primary, secondary, and accent colors with exact HEX codes and their symbolic rationale.
4. Typographic Direction: Recommended font pairing (Display / Clean Geometric Sans-serif / Editorial Serif) tailored to the brand personality.

--------------------------------------------------------------------------------
PART 2: THE SINGLE ULTIMATE IDEAL LOGO (הלוגו האחד והאידיאלי ביותר)
--------------------------------------------------------------------------------
Based on rigorous design critique, present THE SINGLE MOST WINNING, IDEAL LOGO CONCEPT for "{BRAND_NAME}":
1. Concept Name & Creative Rationale: Deep explanation of why this specific symbol is the absolute best representation of "{BRAND_VALUES}" and the core business.
2. Geometric Construction & Negative Space: How the shapes, optical balance, and subtle negative space interact to create an unforgettable visual "aha!" moment.
3. Universal AI Image Generator Prompt (Ready-to-Copy in English):
   Provide a single, finely tuned, master English prompt formatted for any modern image generator (Midjourney, DALL-E, Ideogram, Recraft, Flux).
   Include: flat 2d vector logo, clean geometry, isolated on pure white background, minimal vector aesthetic, and strict negative constraints (--no realistic photo, 3d render, drop shadow, complex gradients, mockups, blurry, messy clutter).
4. Solid Monochrome & Dark Mode Execution: How the mark behaves in 100% solid black on white, and inverted in pure white on dark surfaces.
5. Scalability & Favicon Performance: Exact breakdown of how the symbol holds up at micro 16x16 px size versus large-format signage.

--------------------------------------------------------------------------------
PART 3: PRE-LAUNCH LOGO AUDIT CHECKLIST
--------------------------------------------------------------------------------
A structured evaluation table confirming all 6 key quality gates:
1. Message & Identity Alignment: Does it instantly project the true spirit of "{BRAND_NAME}"?
2. Multi-Medium Scalability: Does it pass the micro-favicon and billboard tests?
3. Solid Monochrome Efficacy: Does it maintain full recognition in pure black & white?
4. Uniqueness & Originality: Is it 100% distinctive and free from clichés?
5. File Format Readiness: Guidelines for SVG vector export, transparent PNG, and master assets.
6. Emotional Longevity & Timelessness: Will this mark remain powerful 10-20 years from now?

Generate the entire Master Brand Strategy in {OUTPUT_LANGUAGE}, with the ready-to-copy AI image prompt written in crystal-clear, professional English for optimal generator fidelity.`,
    background: {
      title: "מדריך מקיף ליצירת תוכנית אב למיתוג וזהות ויזואלית",
      subtitle: "המדריך המלא: כל מה שחשוב לדעת לפני, תוך כדי ולפני שמסיימים (מתודולוגיית Brand Identity)",
      introduction: `לוגו מנצח הוא הרבה מעבר לציור יפה – הוא העוגן הוויזואלי של המותג כולו, הרושם הראשוני שהוא משאיר בעולם, והסמל שבונה אמון מיידי. לוגו גדול אינו מנסה לרצות פלח שוק צר או משתנה, אלא מייצג את ה-DNA העמוק, הערכים והאישיות של המותג עצמו – באופן על-זמני שמדבר בעוצמה לכל מי שפוגש בו.

בעידן הבינה המלאכותית, היכולת ליצור תוכנית אב למיתוג ולזקק את הלוגו האחד והאידיאלי ביותר נשענת על שילוב מנצח של טכנולוגיה מתקדמת + חשיבה אסטרטגית + טעם ודיוק אנושי.

מדריך זה מרכז את כל שלבי העבודה והעקרונות הקריטיים מתוך מתודולוגיית "מייצרים LOGO עם בינה מלאכותית: כל מה שחשוב לדעת לפני ותוך כדי", יחד עם עקרונות עיצוב וקטורי מתקדמים, מבחן הפביקון, חלל שלילי, וצ'קליסט מקיף לאישור סופי לפני השקה.`,
      sections: [
        {
          heading: "שלב 1: לפני שמתחילים – תכנון המטרה והזהות",
          content: `<p>לפני שמגבשים פרומפט חזותי, ההצלחה נשענת על הגדרה מקדימה ברורה:</p>
          <ol style="margin-right: 1.5rem; line-height: 1.8;">
            <li><strong>הגדר את המטרה והזהות של המותג:</strong> מה העסק שלך עושה? מה הערכים, האישיות והמסר שתרצה לשדר? לוגו אינו צריך להשתנות לפי קהל כזה או אחר – הוא מייצג את מהות העסק עצמו (כמו התפוח של Apple או ה-Swoosh של Nike). לוגו של קליניקה רפואית ישדר שקט, ביטחון ודיוק; לוגו של סטארטאפ פינטק ישדר חדשנות, יציבות ואמון.</li>
            <li><strong>חקור והשראה:</strong> חפש לוגואים שאתה אוהב בתחום ומחוצה לו (ב-Pinterest, Behance, Dribbble). זה יעזור לדייק כיוון ויזואלי ולמנוע דמיון לא רצוי למתחרים.</li>
            <li><strong>הגדר סגנון וכיוון עיצובי:</strong> מודרני? קלאסי? מינימליסטי? גיאומטרי? קו רציף? בחר סגנון שמתאים לאישיות המותג שלך.</li>
            <li><strong>הכן תיאור מדויק (פרומפט):</strong> תיאור ברור ומפורט ככל האפשר הכולל סגנון, צבעים, מטאפורה ויזואלית, שם המותג, טון וסוג הקומפוזיציה.</li>
            <li><strong>החלט על צבעים וטיפוגרפיה מועדפים:</strong> צבעים מעבירים רגש ומסרים פסיכולוגיים עמוקים. בחר פלטת צבעים שמתאימה לערכי המותג (למשל: כחול וטורקיז לאמינות וטכנולוגיה, שחור וזהב ליוקרה, ירוק לצמיחה ובריאות).</li>
            <li><strong>שקלל אפשרויות ורב-גוניות:</strong> ודא שהסמל הנבחר עובד בשחור-לבן מלא, על גבי רקע בהיר ועל גבי רקע כהה.</li>
          </ol>`
        },
        {
          heading: "שלב 2: תוך כדי התהליך – עקרונות הדיוק והליטוש",
          content: `<p>תוך כדי יצירת הלוגו, הקפד על עקרונות מפתח אלו לקבלת תוצר פרימיום:</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>עיקרון</th>
                  <th>מהות הפעולה</th>
                  <th>יישום בפרומפט ובתוכנית המיתוג</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. ניסוח פרומפטים מדויקים</strong></td>
                  <td>ספציפיות מקסימלית: סגנון, רגש, סמלים, קווים והרכיבים.</td>
                  <td>הגדרת <code>flat vector, clean lines, isolated on white background</code> ללא מילים עמומות.</td>
                </tr>
                <tr>
                  <td><strong>2. בחירת הלוגו האידיאלי האחד</strong></td>
                  <td>סינון רעיונות וזיקוק הסמל המדויק, החזק והנכון ביותר.</td>
                  <td>במקום לפזר קשב, מתמקדים בקונספט המנצח ומלטשים אותו לרמת שלמות.</td>
                </tr>
                <tr>
                  <td><strong>3. ביצוע ליטושים ושיפורים</strong></td>
                  <td>שנה פרטים, צבעים, טיפוגרפיה ופרופורציות עד שהלוגו מרגיש נכון.</td>
                  <td>דיוק בתוכנת עיצוב וקטורית (Illustrator / Figma) או הרצה נוספת עם כיוונון עדין.</td>
                </tr>
                <tr>
                  <td><strong>4. שמירה על פשטות (Simplicity)</strong></td>
                  <td>לוגו טוב הוא פשוט, ברור וקל לזיהוי. <em>פחות פרטים = יותר עוצמה</em>.</td>
                  <td>הסרת פרטים מסיחים, ביטול גרדיאנטים כבדים וצלליות מיותרות.</td>
                </tr>
                <tr>
                  <td><strong>5. בדיקת קריאות וזיהוי</strong></td>
                  <td>האם הלוגו ברור בגדלים שונים? האם הוא עובד ללא טקסט?</td>
                  <td>מבחן הפביקון (16x16 פיקסלים) ובדיקה כסמל אפליקציה מבודד.</td>
                </tr>
                <tr>
                  <td><strong>6. בדיקת ייחודיות ומקוריות</strong></td>
                  <td>חפש את הלוגו בגוגל תמונות כדי לוודא שאינו דומה לאחרים.</td>
                  <td>Reverse Image Search בגוגל ובמאגרי סימני מסחר למניעת דמיון לא מכוון.</td>
                </tr>
                <tr>
                  <td><strong>7. קבלת פידבק אובייקטיבי</strong></td>
                  <td>שתף אנשים מהימנים וקבל חוות דעת כנה לפני שאתה מסיים.</td>
                  <td>הצגת הלוגו למשך 3 שניות ושאלת הבוחן: "מה אתה זוכר מהסמל?".</td>
                </tr>
              </tbody>
            </table>
          </div>`
        },
        {
          heading: "שלב 3: עקרונות המאסטר המקצועיים (שדרוגי עומק מעולם העיצוב)",
          content: `<p>כדי שהלוגו יעמוד בסטנדרטים הבינלאומיים של שנת 2026, יש להקפיד על 5 עקרונות זהב מקצועיים נוספים:</p>
          <ul>
            <li><strong>מבחן ה-Favicon 16x16:</strong> לוגו מקצועי חייב להיות מזוהה לחלוטין גם כשהוא מוקטן לגודל של 16 על 16 פיקסלים בטאב של דפדפן אינטרנט או בפינת מסך הטלפון. אם הפרטים נמרחים והופכים לכתם עכור – הלוגו מורכב מדי.</li>
            <li><strong>עקרון החלל השלילי (Negative Space Genius):</strong> הלוגואים הגדולים בהיסטוריה (כמו החץ המוסתר ב-FedEx או הטווס של NBC) משלבים משמעות כפולה ומתוחכמת בין הצורה לבין הרווח הלבן סביבה. חלל שלילי מייצר "קליק" מנטלי אצל הצופה והופך את הלוגו לבלתי נשכח.</li>
            <li><strong>מבחן הצללית והשחור-לבן המוחלט (Silhouetting Test):</strong> אם מסירים מהלוגו את כל הצבעים, הגרדיאנטים והאפקטים והופכים אותו לצללית שחורה על רקע לבן – האם הוא עדיין מוכר ומסרטיבי? אם לא, מדובר באיור ולא בלוגו אמיתי.</li>
            <li><strong>מניעת קלישאות AI גנריות (Anti-Cliché Filtering):</strong> מודלי בינה מלאכותית נוטים לחזור על תבניות נדושות: נורות לרעיונות, ידיים מחזיקות נבט לבריאות, גלגלי שיניים לטכנולוגיה, פאזלים לחינוך, וספירלות חסרות משמעות. הפרומפט המדויק דורש מטאפורות מקוריות ומסנן במפורש סמלים אלו.</li>
            <li><strong>הפרדה מודולרית (Icon Mark + Wordmark):</strong> מותג מודרני זקוק למערכת ורסטילית: סמל עצמאי (Brandmark) לשימוש כאייקון אפליקציה או פרופיל רשת, וכיתוב טיפוגרפי עצמאי (Wordmark) לשימוש במסמכים ובכותרות עליונות.</li>
          </ul>`
        },
        {
          heading: "שלב 4: דברים שחשוב לזכור – רישוי, קבצים ומותג כולל",
          content: `<p>דגשים חיוניים להפיכת הלוגו לנכס עסקי בר-קיימא:</p>
          <ul>
            <li><strong>זכויות שימוש מסחריות:</strong> בדוק היטב את תנאי הרישיון של כלי ה-AI שבו השתמשת. ודא שיש לך זכויות שימוש מסחריות מלאות בלוגו הסופי.</li>
            <li><strong>קבצים ופורמטים חיוניים:</strong> לוגו מקצועי חייב להישמר בפורמט <strong>SVG (וקטורי)</strong> המאפשר הגדלה לאינסוף ללא ירידה באיכות (לשלטי חוצות, רכבים ודפוס), לצד קבצי <strong>PNG באיכות גבוהה עם רקע שקוף</strong> (Transparent Background) לשימוש בדיגיטל. מומלץ להשתמש בתוכנות וקטוריזציה כגון Vectorizer.ai, Adobe Illustrator או Figma.</li>
            <li><strong>מותג הוא הרבה יותר מלוגו:</strong> הלוגו הוא רק נקודת ההתחלה. הזהות הכוללת כוללת שפה צילומית, טיפוגרפיה, טון דיבור, פלטת צבעים משלימה וחוויית לקוח עקבית.</li>
            <li><strong>עדיין נדרש שיקול אנושי:</strong> הבינה המלאכותית היא כלי עוצמתי להאצת רעיונות ודיוק, אך החזון, ההחלטות האסטרטגיות, העין הביקורתית והטאץ' הסופי – תמיד שלך!</li>
          </ul>`
        },
        {
          heading: "שלב 5: צ'קליסט סופי לפני השקה (6 שאלות המפתח)",
          content: `<p>לפני שאתה סוגר את הלוגו ויוצא לדרך, עבור על הצ'קליסט הסופי מתוך המתודולוגיה:</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>שאלת הבדיקה</th>
                  <th>מדד ההצלחה</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><strong>האם הלוגו משדר את המסר והערכים של המותג?</strong></td>
                  <td>הצופה מבין מיד את האופי, המקצועיות והרוח של העסק ללא צורך בהסברים ארוכים.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><strong>האם הוא עובד טוב בכל גודל ובכל מדיום?</strong></td>
                  <td>נבדק וברור הן בגודל 16x16 פיקסלים בדפדפן ובמובייל, והן בשילוט ענק והדפסה.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><strong>האם הוא עובד טוב בשחור-לבן?</strong></td>
                  <td>קריא, חד ועוצמתי גם בגרסת סילואט מונוכרומטית מלאה ללא שום צבעים או גרדיאנטים.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><strong>האם הוא "ייחודי" ולא דומה לאחרים?</strong></td>
                  <td>עבר בדיקת Reverse Image Search בגוגל תמונות ונקי מקלישאות ומדמיון למתחרים.</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><strong>האם יש לך את כל הקבצים הנכונים?</strong></td>
                  <td>קובץ SVG וקטורי פתוח, PNG שקוף ברזולוציה גבוהה, גרסאות בהיר/כהה ופביקון.</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><strong>האם אתה מרגיש חיבור וביטחון בלוגו?</strong></td>
                  <td>אתה גאה להציג את הלוגו על גבי כרטיסי ביקור, אתר, מוצרים ומצגות רשמיות.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="margin-top: 1.25rem; padding: 1rem; border-radius: 8px; background: rgba(0, 203, 203, 0.08); border: 1px solid rgba(0, 203, 203, 0.2);">
            <p style="font-weight: 600; color: var(--primary-teal); margin-bottom: 0.25rem;">💡 לזכור תמיד:</p>
            <p style="margin: 0; font-size: 0.95rem;">לוגו מנצח = שילוב של טכנולוגיה מתקדמת + חשיבה אסטרטגית + טעם ודיוק אנושי. לוגו טוב פותח דלתות, מותג חזק יוצר אימפקט!</p>
          </div>`
        }
      ],
      sources: [
        { name: "Paul Rand - Design, Form, and Chaos", url: "https://www.paulrand.design" },
        { name: "Massimo Vignelli - The Vignelli Canon", url: "https://www.vignelli.com/canon.pdf" }
      ]
    }
  },
  {
    id: "ai_logo_direct",
    title: "מחולל פרומפטים ישיר ליצירת לוגו (Direct Logo)",
    subtitle: "Production-Ready Universal AI Image Prompt for Logos",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>`,
    category: "מיתוג, לוגואים וזהות ויזואלית",
    description: "מחולל פרומפטים ממוקד ומוכן להעתקה ישירה למחוללי תמונות (Midjourney, Ideogram, ChatGPT, Flux). ללא תוכניות אב ארוכות – פרומפט תמונה מדויק, שטוח ונקי בלחיצת כפתור.",
    variables: [
      {
        id: "BRAND_NAME",
        label: "שם המותג / העסק והסלוגן (Brand Name & Slogan)",
        placeholder: "הזן את שם המותג/עסק והסלוגן אם קיים (למשל: NovaMed - Smart Diagnostics)...",
        default: "PulseCraft - Smart Digital Health"
      },
      {
        id: "BUSINESS_FIELD",
        label: "תחום העסק ומה הוא עושה (Industry & What the business does)",
        placeholder: "תאר מה העסק עושה, המוצר המרכזי או השירות...",
        default: "פלטפורמת בינה מלאכותית לניטור מדדים רפואיים וחיזוי בריאותי מותאם אישית למטופלים ומרפאות"
      },
      {
        id: "BRAND_VALUES",
        label: "ערכי המותג, אישיות והמסר שרוצים לשדר (Values & Personality)",
        placeholder: "אמינות, חדשנות, חום, מקצועיות, יוקרה, דיוק מדעי...",
        default: "אמינות קלינית ללא פשרות, חדשנות טכנולוגית פורצת דרך, אופטימיות, חמימות ופשטות שמעניקה שקט נפשי"
      },
      {
        id: "LOGO_STYLE",
        label: "סגנון וכיוון עיצובי של הלוגו (Logo Style & Aesthetics)",
        placeholder: "בחר סגנון מועדף...",
        default: "Minimalist Geometric & Smart Negative Space: סמל גיאומטרי שטוח, מודרני ונקי, עם מטאפורה חכמה וחלל שלילי המשלב בין דופק/גל לבבי לבין מגן ביטחון וצמיחה"
      },
      {
        id: "COLOR_PALETTE",
        label: "פלטת צבעים והרגש שהם מעבירים (Color Palette & Psychology)",
        placeholder: "בחר פלטת צבעים...",
        default: "Clinical Deep Blue & Luminous Cyan: כחול כהה עמוק (#0B192C) המסמל אמינות וסמכות, וטורקיז-ציאן זוהר (#00CBCB) המסמל חדשנות דיגיטלית וחיות"
      },
      {
        id: "VISUAL_ELEMENTS",
        label: "קטגוריית סמלים ואלמנטים ויזואליים (Visual Metaphor & Symbols)",
        placeholder: "בחר קטגוריה או הקלד אלמנטים מותאמים אישית...",
        default: "רפואה, בריאות וחיים: גל דופק אלגנטי המשולב בצורת מגן צמיחה (ללא קלישאות גנריות, ללא סטטוסקופים נדושים וללא צללים כבדים)"
      }
    ],
    template: `A world-class minimalist flat 2D vector logo mark for the brand "{BRAND_NAME}", representing: {BUSINESS_FIELD}.

================================================================================
PRIMARY MASTER IMAGE GENERATION PROMPT (READY TO PASTE INTO ANY AI ENGINE)
================================================================================
A masterclass flat 2D vector graphic logo mark for "{BRAND_NAME}".
Visual Style: {LOGO_STYLE}, iconic geometry, perfect optical balance, crisp solid lines, high aesthetic refinement.
Core Metaphor & Symbols: {VISUAL_ELEMENTS}.
Brand Personality & Tone: Embodying {BRAND_VALUES}.
Color Palette: {COLOR_PALETTE}, flat solid colors with bold contrast, premium modern execution.
Background & Staging: Strictly isolated on a pure seamless white background (#FFFFFF), perfectly centered, generous negative breathing space, clean vector SVG graphic style.
Scalability Directive: High-contrast iconic silhouette, perfectly legible at 16x16 px micro-favicon size as well as giant architectural signage.

NEGATIVE PARAMETERS & EXCLUSIONS (STRICT):
--no realistic photograph, 3d render, shadows, drop shadow, bevel, emboss, complex gradients, mockups, paper texture, realistic human faces, blurry edges, noisy background, clutter, watermark, signature, multiple logos in one frame --ar 1:1

================================================================================
ADDITIONAL READY-TO-USE ASSET VARIATIONS
================================================================================
1. DARK MODE INVERTED VARIATION:
A minimalist flat 2D vector logo mark for "{BRAND_NAME}" ({LOGO_STYLE}, {VISUAL_ELEMENTS}), isolated on a deep obsidian black background (#0B0F19), rendered with luminous high-contrast white and accent lines, pure digital vector aesthetic.

2. PURE MONOCHROME SILHOUETTE (BLACK & WHITE):
Solid black vector silhouette logo mark of {VISUAL_ELEMENTS} for "{BRAND_NAME}", 100% solid flat black (#000000) on pure white background (#FFFFFF), zero shades of gray, iconic graphic identity, maximum optical clarity.`,
    background: {
      title: "מדריך מהיר להנדסת פרומפטים ישירים ללוגואים",
      subtitle: "איך להוציא לוגו מלוטש, שטוח ונקי ממחוללי תמונות ב-AI בלי לקבל איורים עמוסים",
      introduction: `כאשר מייצרים לוגו ישירות במחולל תמונות (כגון Midjourney, Ideogram, ChatGPT/DALL-E, Recraft או Flux), האתגר הגדול ביותר הוא למנוע מה-AI לייצר "ציור עמוס", צללים תלת-ממדיים או רקעים מסיחים במקום לוגו וקטורי נקי ופונקציונלי.

פרומפט זה בנוי במבנה הנדסי מדויק המבטיח קבלת סמל שטוח, צרוב על רקע לבן, בעל סילואט אייקוני ומוכן להפיכה לוקטור (SVG).`,
      sections: [
        {
          heading: "חלק 1: מילות מפתח קריטיות לקבלת לוגו שטוח ונקי (Flat Vector)",
          content: `<p>מחוללי תמונות זקוקים להוראות חד-משמעיות כדי לייצר לוגו במקום יצירת אמנות:</p>
          <ul>
            <li><strong>flat 2D vector graphic logo mark:</strong> מגדיר באופן מובהק שהתוצר הוא סמל גרפי דו-ממדי ולא תמונה צילומית.</li>
            <li><strong>isolated on pure white background:</strong> מבטיח שהלוגו יישב לבדו על רקע לבן חלק, ומאפשר צריבה וקטוריזציה קלה ומהירה.</li>
            <li><strong>clean solid lines, iconic geometry:</strong> שומר על קווים חדים ומונע עיוותים וכתמים מיותרים.</li>
            <li><strong>--no 3d, realistic photo, shadows, complex gradients:</strong> חוסם מראש אלמנטים תלת-ממדיים שמקשים על שימוש מקצועי בלוגו.</li>
          </ul>`
        },
        {
          heading: "חלק 2: מבחן ה-16x16 והשחור-לבן",
          content: `<p>לוגו אמיתי נמדד בשני מבחנים עיקריים:</p>
          <ul>
            <li><strong>מבחן הפביקון (16x16 px):</strong> האם הצורה ברורה גם כשהיא מכווצת לאייקון זעיר בטאב של דפדפן? אם הסמל מכיל יותר מדי פרטים קטנים, הוא יימרח.</li>
            <li><strong>מבחן השחור-לבן:</strong> השתמש בפרומפט הווריאציה המונוכרומטית המצורף כדי לבדוק שהלוגו עובד ב-100% שחור מלא על לבן. אם הוא תלוי בגרדיאנטים – הוא אינו יציב.</li>
          </ul>`
        },
        {
          heading: "חלק 3: מעבר מ-AI לקובץ וקטורי מקצועי (SVG)",
          content: `<p>לאחר שבחרתם את התוצאה המועדפת במחולל התמונות, בצעו את הצעדים הבאים להפיכתו לנכס מותג:</p>
          <ol style="margin-right: 1.5rem; line-height: 1.8;">
            <li>הורידו את התמונה ברזולוציה המקסימלית.</li>
            <li>המירו את התמונה לוקטור באמצעות <strong>Vectorizer.ai</strong> או כלי ה-Image Trace ב-Adobe Illustrator.</li>
            <li>שמרו קובץ <strong>SVG</strong> (גמיש לכל גודל ללא ירידה באיכות) לצד קבצי <strong>PNG שקופים</strong>.</li>
          </ol>`
        }
      ],
      sources: [
        { name: "Midjourney Vector Aesthetics Guide", url: "https://midjourney.com" },
        { name: "Vectorizer AI - Raster to Vector Conversion", url: "https://vectorizer.ai" }
      ]
    }
  },
  {
    id: "presentation",
    title: "מחולל פרומפטים למצגות WOW – הדרכה, שיווק ופרזנטציות",
    subtitle: "Universal High-Impact Presentation Design Prompt",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0V18m0 0V21m0-3h7.5m0 0V21m-7.5-6h7.5M5.25 5.25h13.5v7.5H5.25v-7.5z" /></svg>`,
    category: "מצגות, הדרכה ותקשורת חזותית",
    description: "יצירת מצגות מטורפות שתופסות את העין ומשדרגות פי 1000 כל הדרכה, הרצאה, מצגת שיווקית או קלינית. כולל שליטה ברמת הפירוט, קהל היעד והסגנון העיצובי.",
    variables: [
      {
        id: "SLIDE_COUNT",
        label: "מספר השקפים במצגת",
        placeholder: "הזן מספר שקפים רצוי (למשל: 10, 12, 15)...",
        default: "10"
      },
      {
        id: "PRESENTATION_TOPIC",
        label: "נושא המצגת / ההדרכה (כללי, שיווקי, לימודי או רפואי)",
        placeholder: "הזן את נושא המצגת, ההדרכה, המוצר או ההרצאה...",
        default: "הדרכה מעשית ליישום כלי בינה מלאכותית להגברת הפריון והחדשנות בעבודה היומיומית"
      },
      {
        id: "TARGET_AUDIENCE",
        label: "קהל יעד (Target Audience)",
        placeholder: "בחר או הזן את קהל היעד...",
        default: "General Public & Broad Community: Accessible, highly engaging language, relatable analogies, clear visual hierarchy, and empowering call-to-action."
      },
      {
        id: "DEPTH_LEVEL",
        label: "רמת הפירוט במצגת (Depth Level & Density)",
        placeholder: "בחר רמת פירוט...",
        default: "High-Level Executive Highlights: Concise, punchy, low-text presentation format designed for live presentation. Limit text to max 15-20 words per card/slide component. Feature giant key metrics (e.g. 85%, 3.5X, $10M+), bold single-sentence takeaways, and powerful visual anchors that the speaker can elaborate on orally."
      },
      {
        id: "DESIGN_STYLE",
        label: "סגנון עיצובי ואסתטיקה (Visual Style & Aesthetics)",
        placeholder: "בחר סגנון עיצובי...",
        default: "High-Impact Cinematic WOW & 3D Visual Drama: STRICTLY NO PLAIN WHITE SLIDES! Master dark atmospheric backdrops (Dark Obsidian #090d16 / Deep Charcoal) with luminous gradient meshes and subtle depth texturing. Feature photorealistic 3D floating visual elements (isometric icons, floating glass spheres, glowing symbols) embedded into slide backgrounds. Use glassmorphism bento containers, high-contrast visual focal points, bold headline typography (50pt+), and dynamic asymmetrical layouts designed to deliver a jaw-dropping, unforgettable 10x presentation experience."
      },
      {
        id: "COLOR_PALETTE",
        label: "פלטת צבעים (Color Palette)",
        placeholder: "בחר פלטת צבעים...",
        default: "Vivid High-Contrast Neon: Deep obsidian backdrop (#090d16), vibrant neon cyan (#22d3ee), electric purple (#a855f7), and high-contrast glowing accents."
      },
      {
        id: "OUTPUT_LANGUAGE",
        label: "שפת פלט והגדרות כיוון",
        placeholder: "למשל: עברית עם יישור מימין לשמאל...",
        default: "Hebrew (עברית בהירה, תקנית, סוחפת ומעוצבת מימין לשמאל כראוי)"
      }
    ],
    template: `You are a World-Class Principal Presentation Designer, Keynote Creative Director, and Master Information Architect. Your mission is to generate a jaw-dropping, 10x-impact, {SLIDE_COUNT}-slide master presentation blueprint for the topic provided below.

[PRESENTATION TOPIC / CONTENT]: "{PRESENTATION_TOPIC}"
[TARGET AUDIENCE CRITERIA]: "{TARGET_AUDIENCE}"
[DEPTH LEVEL & TEXT DENSITY]: "{DEPTH_LEVEL}"
[VISUAL DESIGN STYLE]: "{DESIGN_STYLE}"
[COLOR PALETTE SPECIFICATION]: "{COLOR_PALETTE}"
[OUTPUT LANGUAGE & DIRECTION]: "{OUTPUT_LANGUAGE}"

================================================================================
CRITICAL DESIGN EXECUTION DIRECTIVES (NEVER GENERATE BORING SLIDES)
================================================================================
1. STRICT VISUAL STYLE EXECUTION: Adhere 100% to "{DESIGN_STYLE}". Absolutely NO plain, default white bullet-list slides unless explicitly requested. Every single slide MUST feature dark atmospheric or custom textured backdrops, glassmorphism bento containers, photorealistic 3D/photographic floating anchors, or editorial spatial depth.
2. COLOR PALETTE IMPLEMENTATION: Strictly enforce "{COLOR_PALETTE}". Apply dominant colors for structural surfaces, secondary colors for grid containers, and the accent color ONLY for vital metrics, focal headlines, and call-to-actions (minimum WCAG AAA contrast).
3. DEPTH LEVEL ENFORCEMENT: Execute "{DEPTH_LEVEL}" across all slides. If High-Level, prioritize massive visual numbers, punchy headers, and zero fluff. If Deep-Dive, provide rich, structured, comprehensive explanatory copy in organized cards.
4. ZERO BORING BULLET POINTS: NEVER output raw bullet lists. Transform all lists into structured Bento Grid cards, visual timeline nodes, split-screen comparison blocks, or numbered process cards.
5. SLIDE-BY-SLIDE BLUEPRINT FORMATTING: For every single slide (1 to {SLIDE_COUNT}), provide:
   - [SLIDE NUMBER & TYPE]: (e.g. Slide 1 - Hero Cinematic Title / Slide 3 - 3-Card Bento Grid)
   - [HEADLINE]: Bold, insight-driven action title (44-64pt)
   - [CONTENT STRUCTURE & COPY]: Formatted layout blocks with exact text, metrics, or cards.
   - [VISUAL ASSET PROMPT]: A detailed Midjourney/DALL-E prompt for the accompanying 3D floating object, hero graphic, or diagram.

================================================================================
MASTER {SLIDE_COUNT}-SLIDE NARRATIVE ARCHITECTURE
================================================================================
Generate the complete presentation specifying every slide from 1 to {SLIDE_COUNT}:
1. Hero Cover Slide: High-impact category-defining title with a dramatic 3D visual anchor prompt.
2. The Core Problem / Context: Framing the challenge and setting the stakes for the target audience.
3. The Gap / Why Current Approaches Fail: Contrasting old vs new.
4. Core Solution / Value Proposition: Revealing the central concept or framework.
5. Mechanism / Step-by-Step Walkthrough: Visual process flow (3-5 structured steps).
6. Evidence & Key Results / Metrics: Highlighting data, proof points, or key takeaways in accent colors.
7. Real-World Application / Case Example: Demonstrating practical execution in action.
8. Implementation Framework / Roadmap: Milestones and actionable next steps.
9. Frequently Asked Questions / Key Considerations: Addressing obstacles proactively.
10. High-Impact Call to Action & Conclusion: Clear summary and final inspiring closing statement.

Generate the entire presentation in {OUTPUT_LANGUAGE}, using flawless grammar, professional tone, and optimal Right-to-Left (RTL) slide layout formatting. Output the full text with zero placeholders.`,
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
          heading: "חלק ב: מגמות עיצוב שיווקי מתקדם לשנת 2026 והתאמה לקהלי יעד",
          content: `<p>אסתטיקת העיצוב המודרנית עברה מהפכה משמעותית. העיצוב השטוח והחד-ממדי (Flat Design) ששלט בעשור האחרון נתפס כיום כמיושן ומנוכר. במקומו, מגמות העיצוב לשנת 2026 מציגות מראה טקטילי, דינמי ורגיש יותר המשלב עומק חזותי, צללים רכים ואפקטים דמויי זכוכית (Glassmorphism) כדי לארגן את המידע בצורה היררכית ונעימה לעין.</p>
          <p>כדי שהמצגת תשיג את האפקט המרבי, נדרשת התאמה מדויקת בין <strong>סגנון העיצוב החזותי (Design Style)</strong> לבין <strong>קהל היעד (Target Audience)</strong>:</p>
          <ul>
            <li><strong>סגנון שיווקי, נועז ומטורף (High-Impact Marketing & Vivid 3D):</strong> עבור השקות מוצר, כנסים מרכזיים ומצגות שיווקיות – נטישה מוחלטת של רקע לבן בנאלי! העיצוב מבוסס על רקעים כהים עמוקים (Dark Obsidian, Deep Midnight) בשילוב אלמנטים ואובייקטים תלת-ממדיים מרחפים ברקע (Photorealistic 3D floating medical/tech icons), צבעי ניאון עזים וניגודיים (Teal/Cyan/Purple), דוגמאות מיוחדות ואיורים שמשולבים בעומק הרקע – ליצירת חוויה חזותית מטורפת שתופסת את העין ולא רואים כל יום.</li>
            <li><strong>סגנון אלגנטי ויוקרתי (Luxury & Executive Editorial):</strong> מיועד להצגה בפני הנהלה בכירה ומשקיעים. מאופיין בצבעוניות כהה ואצילית (Midnight Navy), הטבעות זהב וברונזה מוברשת, טיפוגרפיה סריפית/גיאומטרית יוקרתית וחלל נשימה נדיב.</li>
            <li><strong>סגנון מדעי וקליני (Scientific & Clinical Rigor):</strong> מיועד לרופאים, קרדיולוגים ואחיות מומחיות. מתמקד בדיוק אנטומי ומדעי, גרידים מובנים, תגיות הסבר משולבות ישירות בגרפים, וטבלאות ראיות קליניות בעלות ניגודיות גבוהה.</li>
            <li><strong>סגנון חם, אמפתי ואנושי (Warm & Empathetic Patient Care):</strong> מיועד למטופלים ולבני משפחותיהם. נשען על גווני פסטל חמימים (ירוק מרווה, נייר טבעי), צורניות אורגנית, איורים אנושיים עם תווי פנים ברורים ונגישים, במטרה להפחית חרדה ולייצר ביטחון.</li>
            <li><strong>סגנון טכנולוגי ומינימליסטי (Futuristic HealthTech Bento Grid):</strong> מבוסס על פריסת Bento Grid מודולרית, תיבות זכוכית בעלות פינות מעוגלות, אלמנטים דיגיטליים זוהרים וטיפוגרפיה גיאומטרית נקייה.</li>
          </ul>
          
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>סגנון עיצובי</th>
                  <th>מאפיינים חזותיים מרכזיים</th>
                  <th>פלטת צבעים מומלצת</th>
                  <th>קהל יעד אופטימלי</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>שיווקי, נועז ו-3D</strong></td>
                  <td>רקע כהה עוצמתי (Dark Obsidian), אובייקטים תלת-ממדיים מרחפים, צבעי ניאון עזים, מרקמי רקע מיוחדים.</td>
                  <td>Dark Obsidian, Neon Cyan & Electric Purple</td>
                  <td>כנסים, השקות מוצר, הייטק רפואי ושיווק</td>
                </tr>
                <tr>
                  <td><strong>אלגנטי ויוקרתי</strong></td>
                  <td>מראה מגזיני פרימיום, עיטורי זהב ושמפניה, טיפוגרפיה אצילית, עומק זכוכית מעודן.</td>
                  <td>Midnight Navy & Metallic Gold</td>
                  <td>משקיעים, הנהלה בכירה, קרנות הון סיכון</td>
                </tr>
                <tr>
                  <td><strong>מדעי וקליני</strong></td>
                  <td>גרידים הנדסיים קשיחים, תרשימי זרימה קליניים, תגיות אנטומיות משולבות, WCAG AAA.</td>
                  <td>Clinical Navy & Medical Teal</td>
                  <td>רופאים, אחיות, חוקרים וצוותים רפואיים</td>
                </tr>
                <tr>
                  <td><strong>חם ואמפתי</strong></td>
                  <td>צורניות אורגנית רכה, איורים אנושיים חמים, הדרכה שלב-אחר-שלב בגובה העיניים.</td>
                  <td>Sage Green & Earth Warmth</td>
                  <td>מטופלים, משפחות ורפואה מונעת בקהילה</td>
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
      },
      {
        id: "COLOR_PALETTE",
        label: "פלטת צבעים לאינפוגרפיקה",
        placeholder: "בחר פלטת צבעים או הקלד גוונים מותאמים אישית...",
        default: "Clinical Blue & Calm Teal - פלטת גוונים מבוססת כחול רופאים עמוק, טורקיז רפואי ותכלת מרגיע עם ניגודיות גבוהה לרקע לבן."
      }
    ],
    template: `You are an Elite Patient Experience (PX) Strategist, Senior Medical Illustrator, and High-End Marketing Information Designer. Your objective is to design a visually stunning, premium-grade, 1-page vertical educational infographic for patients. The infographic must balance the absolute scientific accuracy required in medicine with the warm, human-centric, and comforting aesthetic of a top-tier modern wellness brand.

[CLINICAL TOPIC FOR PATIENT EDUCATION]: "{CLINICAL_TOPIC}"
[TARGET AUDIENCE]: "{TARGET_AUDIENCE}"
[OUTPUT LANGUAGE]: "{OUTPUT_LANGUAGE}"
[COLOR PALETTE]: "{COLOR_PALETTE}"

Visual Design Requirements:
Apply the specified [COLOR PALETTE] as the primary visual scheme for the infographic, ensuring high-contrast text accessibility (minimum WCAG AAA ratio), using the dominant color for the backdrop or main panels, the secondary color for supporting structural grids, and the transformative accent color sparingly to highlight critical patient clinical insights or key metrics.`,
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
  },
  {
    id: "gpt_step_image",
    title: "פרומפט לתמונה בהדרכה בשלבים (GPT)",
    subtitle: "Step-by-Step Training Image Prompt",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>`,
    category: "מחוללי תמונות וויזואליזציה",
    description: "יצירת פרומפטים מורכבים ל-GPT להפקת תמונות הדרכה קליניות בשלבים, מעוצבות מימין לשמאל.",
    variables: [
      {
        id: "TOPIC",
        label: "נושא כללי של ההדרכה",
        placeholder: "למשל: הזרקה עצמית של אינסולין...",
        default: "הדרכה להזרקה עצמית של אינסולין לחולי סוכרת"
      },
      {
        id: "STEPS_COUNT",
        label: "מספר השלבים בהדרכה",
        placeholder: "3",
        default: "3"
      }
    ],
    template: `You are an advanced medical visualization AI and instructional designer. 

Your task is to generate a professional, step-by-step instructional infographic, designed in a modern 3D render/claymation style that is visually appealing, clear, and universally relatable to diverse populations. The overall tone must be highly professional, clinical, and authoritative.

PRE-VISUALIZATION ACCURACY PROCESS:
Before generating any visual elements, you must first mentally synthesize current medical guidelines from peer-reviewed medical journals and reputable health databases (such as Mayo Clinic, Cleveland Clinic, NIH, or similar authoritative medical sources) published strictly within the last two years. This is to ensure all instructions, icons, and clinical metaphors used in the training image are accurate and reflect the most up-to-date best practices.

Layout Specifications:
Create a single image structured as a clean, sequential infographic flow. Divide the composition into clear, distinct panels. The structure must contain exactly {STEPS_COUNT} steps. Each panel should have a bold number (e.g., "1", "2") and a clear title.

Style and Characters:
- Sytle: Modern, clean 3D claymation/stylized render. Smooth textures, soft professional lighting, and a clinical color palette (soft blues, warm teals, and clean whites, with bright accent colors for key actions). 
- Characters: The guides are highly professional, diverse 3D characters representing healthcare professionals or standardized patients. They should be neutral, inclusive, and relatable to all ethnic groups and age populations, avoiding specific hyper-realism.

Core Subject of the Training Guide:
{TOPIC}

Step-by-Step Visual & Clinical Flow:
{STEPS_LIST}

Overall Impression: Accurate, educational, structured, and visually clean, suitable for a professional training module. Aspect ratio: 16:9.

IMPORTANT LAYOUT RULE: The panels and step steps must be laid out in order from right to left (RTL) as is standard in Hebrew.`,
    background: {
      title: "מדריך לתמונות הדרכה קליניות",
      subtitle: "פישוט קוגניטיבי, בחירת אסתטיקה של מחוללי תמונות והנחיות סידור מימין לשמאל",
      introduction: `הפקת תמונות הדרכה רפואיות ומדריכים חזותיים בשלבים באמצעות בינה מלאכותית (כגון GPT או Midjourney) דורשת הגדרה מובנית המכוונת את המודל ליצירת היררכיה חזותית ברורה. הדרישה לשלב אסתטיקת תלת-ממד רכה (Claymation) יוצרת חיבור פסיכולוגי מרגיע ומפחיתה את החרדה הטבעית המלווה תהליכים רפואיים, בשילוב חוקי עיצוב קריטיים התומכים במטופלים.`,
      sections: [
        {
          heading: "חלק א: אסתטיקת Claymation ותלת-ממד רך",
          content: `<p>שימוש במרקמי חימר חלקים (Soft 3D render/Claymation) מאפשר להציג מניפולציות פיזיות (כמו הזרקת תרופה או הרכבת מכשיר) בצורה איכותית אך לא מבהילה. דמויות בסגנון זה הן חמימות, נגישות ואוניברסליות. הדבר הוכח מחקרית כמוריד רמות התגוננות ומקל על קבלת הדרכה רפואית.</p>`
        },
        {
          heading: "חלק ב: זרימה כיוונית מימין לשמאל (RTL)",
          content: `<p>עבור קוראי עברית, סריקת המידע החזותי והכיווני נעשית מימין לשמאל (RTL). לכן, יש להנחות את מנוע ה-AI במפורש לסדר את פאנלי ההדרכה בסדר לוגי המתחיל מצד ימין ומסתיים בצד שמאל, כדי למנוע היפוך קוגניטיבי שעלול לגרום לטעויות קליניות בקרב מטופלים.</p>`
        },
        {
          heading: "חלק ג: הנדסת הפרומפטים לבינה מלאכותית יוצרת",
          content: `<p>בניית פרומפטים מורכבים מחייבת שילוב של פרמטרים מרחביים מדויקים והגדרת קצב חזותי. מנוע GPT (DALL-E 3) מעבד את הפרמטרים הללו בצורה הטובה ביותר באנגלית, תוך חלוקת תפקידים ברורה (advanced medical visualization AI).</p>`
        }
      ],
      sources: [
        { name: "Mayo Clinic - Medical Visualizations and Patient Education", url: "https://www.mayoclinic.org" },
        { name: "Sora & GPT (DALL-E 3) Prompt Design Guides", url: "https://openai.com" }
      ]
    }
  },
  {
    id: "unique_images",
    title: "תמונות ייחודיות ושילוב פקודות",
    subtitle: "Unique Visual Commands Synthesis",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>`,
    category: "תמונות ייחודיות",
    description: "שילוב מספר פקודות סלאש מורכבות (כמו /explodedview, /blueprint, /cutaway) ליצירת תמונה רפואית ייחודית ומדויקת.",
    variables: [
      {
        id: "MODE",
        label: "סוג יצירה",
        placeholder: "בחר סוג יצירה...",
        default: "image_based"
      },
      {
        id: "AUDIENCE",
        label: "קהל יעד רפואי",
        placeholder: "בחר קהל יעד...",
        default: "clinical"
      },
      {
        id: "TOPIC",
        label: "נושא קליני / תיאור התמונה",
        placeholder: "הזן את המושג, המכשיר או התהליך הרפואי...",
        default: ""
      },
      {
        id: "COMMANDS",
        label: "פקודות סלאש נבחרות",
        placeholder: "בחר פקודות מהרשימה...",
        default: ""
      },
      {
        id: "ASPECT_RATIO",
        label: "גודל תמונה / יחס מכלול (Aspect Ratio)",
        placeholder: "בחר יחס תמונה...",
        default: "16:9"
      }
    ],
    template: `{COMMANDS}

High-fidelity medical visualization of {TOPIC}. {MODE_DESCRIPTION} {AUDIENCE_DIRECTIVE} Overall visual quality: clean studio lighting, high contrast, professional clinical aesthetics, highly detailed medical-grade accuracy. Aspect ratio: {ASPECT_RATIO}.`,
    background: {
      title: "מדריך לשילוב פקודות סלאש ותמונות ייחודיות ברפואה",
      subtitle: "שליטה מלאה במחוללי תמונות באמצעות שילוב קודים חזותיים והתאמה קלינית",
      introduction: `פקודות סלאש (Slash Commands) במחוללי תמונות ומודלי AI כגון Midjourney, ChatGPT, Flux או Sora מעניקות יכולת שליטה מרחבית וסגנונית יוצאת דופן. כאשר משתמשים בקוד בודד, המודל מבצע התאמה ויזואלית בסיסית. אך הכוח האמיתי מתגלה כאשר משלבים שניים או שלושה קודים שאינם מתחרים זה בזה – למשל, שילוב /explodedview עם /blueprint לייצור איור הנדסי מסורטט המפרק את הרכיבים באוויר, או שילוב /cutaway במבט /isometric המעניק זווית תלת-ממדית עם חיתוך פנימי של האיבר או המוצר.

בנוסף, בעולם התקשורת הרפואית (MedComms), יש חשיבות מכרעת להבחנה בין תמונה המיוצרת **על בסיס תמונה קיימת** (Image-to-Image / Refinement) לבין תמונה המיוצרת **מאפס לפי נושא** (Text-to-Image), וכן להגדרת קהל היעד הקליני (רופאים וצוות רפואי לעומת מטופלים ומשפחות).`,
      sections: [
        {
          heading: "חלק א: קטגוריות הפקודות והסגנונות הייחודיים",
          content: `<p>להלן פקודות הסלאש הייחודיות, מחולקות לקבוצות תוכן מרכזיות:</p>
          
          <h5 style="color: #00cbcb; margin-top: 1rem; font-weight: bold;">לפרק ולראות בפנים – מה שהמעטפת מסתירה</h5>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>הקוד</th>
                  <th>מה מקבלים (תיאור)</th>
                  <th>סוג יצירה</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>/xray</strong></td><td>רואים את המבנה הפנימי דרך המעטפת, שכבה אחרי שכבה</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/explodedview</strong></td><td>כל הרכיבים מרחפים בנפרד ומסודרים במרווחים</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/cutaway</strong></td><td>חלק מהמעטפת מוסר ומגלה מה יש מתחת</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/crosssection</strong></td><td>חיתוך ישר דרך האובייקט, כמו לתוך אותו בסכין</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/anatomy</strong></td><td>כל חלק מופרד ומקבל שם משלו</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/inside</strong></td><td>מבט אל המנגנון שמניע את הדבר</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/layers</strong></td><td>השכבות נפרשות מלמטה למעלה</td><td>על תמונה שלכם</td></tr>
              </tbody>
            </table>
          </div>

          <h5 style="color: #00cbcb; margin-top: 1.5rem; font-weight: bold;">להסביר תהליך וקשרים – איך דברים עובדים ומי מחובר למי</h5>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>הקוד</th>
                  <th>מה מקבלים (תיאור)</th>
                  <th>סוג יצירה</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>/diagram</strong></td><td>מושג מצויר עם חצים ותוויות</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/flowchart</strong></td><td>צעד אחרי צעד, כולל נקודות החלטה</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/mindmap</strong></td><td>נושא מרכזי שמסתעף החוצה</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/process</strong></td><td>כל השלבים מהתחלה עד הסוף</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/cycle</strong></td><td>תהליך שחוזר על עצמו בלולאה</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/journey</strong></td><td>הדרך מנקודת המבט של האדם שעובר אותה</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/timeline</strong></td><td>אירועים לפי סדר כרונולוגי</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/roadmap</strong></td><td>תחנות בדרך אל יעד</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/ecosystem</strong></td><td>כל השחקנים בתחום ומי מחובר למי</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/network</strong></td><td>צמתים וקווים שמחברים ביניהם</td><td>מאפס, מנושא</td></tr>
              </tbody>
            </table>
          </div>

          <h5 style="color: #00cbcb; margin-top: 1.5rem; font-weight: bold;">להשוות ולהראות שינוי – זה מול זה, אז מול היום</h5>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>הקוד</th>
                  <th>מה מקבלים (תיאור)</th>
                  <th>סוג יצירה</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>/comparison</strong></td><td>זה מול זה, לפי אותם קריטריונים</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/versus</strong></td><td>שני צדדים בעימות ויזואלי</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/beforeafter</strong></td><td>אותו דבר בדיוק, שני מצבים</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/thenvsnow</strong></td><td>עבר מול הווה באותו פריים</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/evolution</strong></td><td>התפתחות לאורך זמן, שלב אחרי שלב</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/scale</strong></td><td>השוואת גדלים זה לצד זה</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/future</strong></td><td>איך זה ייקרא בעוד כמה שנים</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/heatmap</strong></td><td>עוצמה שמוצגת בצבע</td><td>מאפס, מנושא</td></tr>
              </tbody>
            </table>
          </div>

          <h5 style="color: #00cbcb; margin-top: 1.5rem; font-weight: bold;">זווית מבט ושרטוט – מאיפה מסתכלים ובאיזה סגנון</h5>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>הקוד</th>
                  <th>מה מקבלים (תיאור)</th>
                  <th>סוג יצירה</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>/isometric</strong></td><td>תלת-ממד בזווית 3/4, בלי עיוות פרספקטיבה</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/birdseye</strong></td><td>הכל מלמעלה, כמו מרחפן</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/360view</strong></td><td>אותו אובייקט מכמה כיוונים בפריים אחד</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/microscopic</strong></td><td>מבט מיקרוסקופי אל הפרטים הקטנים</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/macroscopic</strong></td><td>מתרחקים עד שרואים את כל המערכת</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/map</strong></td><td>גיאוגרפית או מפת מושגים</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/blueprint</strong></td><td>קווים לבנים על כחול, עם מידות</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/schematic</strong></td><td>שרטוט פשוט וסימפולי, בלי קישוט</td><td>על תמונה שלכם</td></tr>
              </tbody>
            </table>
          </div>

          <h5 style="color: #00cbcb; margin-top: 1.5rem; font-weight: bold;">מוצר, מסך וסיפור – דברים שעוד לא קיימים</h5>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>הקוד</th>
                  <th>מה מקבלים (תיאור)</th>
                  <th>סוג יצירה</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>/wireframe</strong></td><td>מבנה אתר או אפליקציה בלי עיצוב</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/mockup</strong></td><td>המוצר כאילו הוא כבר קיים במציאות</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/prototype</strong></td><td>גרסה מוקדמת וגסה של מוצר</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/architecture</strong></td><td>מבנה מערכת והרכיבים שלה</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/dashboard</strong></td><td>מסך נתונים עם מדדים וגרפים</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/storyboard</strong></td><td>סצנה אחרי סצנה, כמו לפני צילומים</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/comic</strong></td><td>הסבר בפאנלים עם בועות דיבור</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/visualize</strong></td><td>רעיון מופשט שהופך לתמונה</td><td>מאפס, מנושא</td></tr>
              </tbody>
            </table>
          </div>

          <h5 style="color: #00cbcb; margin-top: 1.5rem; font-weight: bold;">הזמנות, ברכות ומיתוג – נייר, טיפוגרפיה ואווירה</h5>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>הקוד</th>
                  <th>מה מקבלים (תיאור)</th>
                  <th>סוג יצירה</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>/invitation</strong></td><td>פריסת הזמנה יוקרתית עם שוליים נקיים ומרווחי נשימה</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/formal</strong></td><td>הזמנה רשמית ומכובדת לכנסים, ימי עיון וישיבות צוות</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/conference</strong></td><td>פריסת הזמנה לכנס או יום עיון עם סדר יום ומרצים</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/agenda</strong></td><td>הזמנה מובנית עם לוח זמנים, שעות ונושאי הרצאות</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/badge</strong></td><td>תג שם, כרטיס אורח או תווית משתתף לכנס</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/certificate</strong></td><td>תעודת הוקרה, תעודת השתתפות או תעודת סיום יום עיון</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/card</strong></td><td>מבנה קלאסי של כרטיס ברכה מתקפל או גלויה מעוצבת</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/goldfoil</strong></td><td>הטבעת זהב או כסף מבריקה (Gold Foil Stamping) על האותיות והשוליים</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/emboss</strong></td><td>הטבעה שקועה או בולטת בנייר (Letterpress / Debossing) ללא צבע</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/calligraphy</strong></td><td>אותיות קליגרפיות אמנותיות בעזרת ציפורן או מברשת זהב עדינה</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/mockup</strong></td><td>הצגת הברכה/הזמנה כרכיב פיזי אמיתי מצולם בסטודיו על נייר פשתן/כותנה</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/flatlay</strong></td><td>צילום מלמעלה (Knolling) של הברכה לצד מעטפה, חותמת שעווה ופרחים</td><td>על תמונה שלכם</td></tr>
                <tr><td><strong>/watercolor</strong></td><td>איורי צבעי מים רכים (עלים, פרחים עדינים, אלמנטים מרגיעים)</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/stationery</strong></td><td>ערכת נייר מיתוגית מלאה (כרטיס, מעטפה, מדבקה וסרט משי)</td><td>מאפס, מנושא</td></tr>
                <tr><td><strong>/botanical</strong></td><td>עיטורי צמחייה, עלים עדינים וענפי זית במסגרת ההזמנה</td><td>מאפס, מנושא</td></tr>
              </tbody>
            </table>
          </div>`
        },
        {
          heading: "חלק ב: שילוב מרובה פקודות – מעבר מעתקה לשליטה יצירתית",
          content: `<p>השילוב בין הקודים מייצר תוצרים חזותיים שאף קוד בודד לא מסוגל לספק בלעדיו:</p>
          <ul>
            <li><strong>/invitation + /goldfoil + /mockup:</strong> הזמנה פיזית יוקרתית על נייר כותנה עם הטבעות זהב מבריקות ומסגרת גיאומטרית מודרנית מצולמת בסטודיו.</li>
            <li><strong>/card + /watercolor + /calligraphy:</strong> כרטיס ברכה מרגיע עם איורי צבעי מים עדינים ואותיות קליגרפיות חמימות.</li>
            <li><strong>/flatlay + /stationery + /emboss:</strong> צילום מרהיב מלמעלה של סט הברכה, המעטפה עם חותמת שעווה, סרט משי ומרקם הטבעה שקועה.</li>
            <li><strong>/explodedview + /blueprint:</strong> מפרק מוצר או מכשיר רפואי לחלקים מרחפים, תוך הצגתם בסגנון שרטוט הנדסי כחול-לבן עם מידות מדויקות.</li>
            <li><strong>/cutaway + /isometric:</strong> מציג את האובייקט בזווית תלת-ממדית נעימה (3/4) תוך הסרת חלק מהמעטפת החיצונית לחשיפת האיברים או המנגנונים הפנימיים.</li>
            <li><strong>/microscopic + /heatmap:</strong> מבט תקריב מיקרוסקופי המציג עומסים קליניים או ריכוזי חומר פעיל באמצעות מפת חום סגנונית.</li>
          </ul>`
        },
        {
          heading: "חלק ג: התאמה ייעודית לרפואה ולצוותים קליניים / מטופלים",
          content: `<p>תקשורת רפואית דורשת התאמה של סגנון התמונה לקהל היעד:</p>
          <ul>
            <li><strong>לרופאים וצוותים קליניים:</strong> הדגשת דיוק אנטומי ומדעי, שימוש בשרטוטים קליניים, חיתוכי אורך (crosssection) ותגיות אנטומיות ברורות.</li>
            <li><strong>למטופלים ולמשפחות:</strong> שימוש באיורים נקיים ומפחיתי חרדה, הימנעות ממונחים מבהילים או אלמנטים מסיחים, והנגשת תהליך הטיפול (process/journey) בגובה העיניים.</li>
            <li><strong>לחדשנות ומיתוג HealthTech:</strong> הצגת דשבורדים דיגיטליים (dashboard), אקו-סיסטם רפואי (ecosystem) ומבני מערכות (architecture) באסתטיקת פרימיום 2026.</li>
          </ul>`
        }
      ],
      sources: [
        { name: "Midjourney & ChatGPT Visual Command Synthesis", url: "https://midjourney.com" },
        { name: "Costello Medical - Medical Illustration & Visualization", url: "https://www.costellomedical.com" }
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
