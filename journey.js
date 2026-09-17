// مصفوفة البيانات التي تحتوي على مراحل رحلة ELORA الثمانية
const journeyData = [
  { en: "SELF", title: "من أنا؟", text: "اكتشف اهتماماتك ونقاط قوتك ومهاراتك والأسئلة التي تثير فضولك.", tags: ["الاهتمامات", "نقاط القوة", "المهارات"] },
  { en: "FIELDS", title: "ما المجالات الموجودة أمامي؟", text: "استكشف المجالات والتخصصات والمسارات المختلفة قبل أن تتخذ قرارًا.", tags: ["المجالات", "التخصصات", "الخيارات"] },
  { en: "DEEP DIVE", title: "ماذا يحدث داخل المجال؟", text: "انتقل من الاسم والصورة السطحية إلى فهم حقيقي لما يحدث داخل المجال.", tags: ["فهم", "بحث", "تعمق"] },
  { en: "APPLY", title: "كيف أجرّب وأطبّق؟", text: "حوّل المعرفة إلى مشروع أو تجربة أو تحدٍ عملي.", tags: ["تجربة", "مشروع", "تطبيق"] },
  { en: "MIND", title: "كيف أفهم نفسي وأتعامل مع الضغوط؟", text: "افهم المشاعر والمقارنة والفشل والضغط، وابحث عن طرق صحية للتعامل معها.", tags: ["وعي", "ضغط", "توازن"] },
  { en: "SOCIETY", title: "كيف أفهم المشكلات من حولي؟", text: "حلل المشكلات الاجتماعية من خلال أسبابها وآثارها والسياق المحيط بها.", tags: ["المشكلة", "الأسباب", "الآثار"] },
  { en: "WORLD", title: "كيف يتعامل العالم مع المشكلات والفرص؟", text: "استخدم التجارب ودراسات الحالة لفهم القرارات والبدائل والنتائج.", tags: ["حالات", "قرارات", "نتائج"] },
  { en: "OPPORTUNITY", title: "إلى أين يمكن أن أذهب بما تعلمته؟", text: "اربط ما اكتشفته بالتجارب والمشروعات والفرص والخطوات القادمة.", tags: ["فرص", "مشروعات", "خطوة قادمة"] }
];

const box = document.getElementById("journeySteps");

if (box) {
    box.innerHTML = ""; 
    // ضبط صندوق الحاوية برمجياً بقوة لضمان التناسق
    box.style.setProperty("display", "flex", "important");
    box.style.setProperty("flex-direction", "column", "important");
    box.style.setProperty("gap", "10px", "important");
    box.style.setProperty("width", "100%", "important");

    journeyData.forEach((d, i) => {
        const b = document.createElement("button");
        b.className = "journey-step-btn" + (i === 0 ? " active" : "");
        
        // فرض التنسيقات الكحلية مباشرة لكسر أي لون أبيض في الـ CSS
        b.style.setProperty("width", "100%", "important");
        b.style.setProperty("display", "flex", "important");
        b.style.setProperty("justify-content", "space-between", "important");
        b.style.setProperty("align-items", "center", "important");
        b.style.setProperty("padding", "14px 20px", "important");
        b.style.setProperty("margin-bottom", "4px", "important");
        b.style.setProperty("border-radius", "12px", "important");
        b.style.setProperty("border", "1px solid rgba(244, 114, 182, 0.2)", "important");
        b.style.setProperty("cursor", "pointer", "important");
        b.style.setProperty("transition", "all 0.3s ease", "important");
        
        b.innerHTML = `
            <span class="step-title" style="flex-grow: 1; text-align: right; font-weight: 700; font-size: 15px;">${d.title}</span>
            <span class="step-num" style="font-weight: 800; font-family: 'Plus Jakarta Sans', sans-serif; margin-right: 15px;">${String(i + 1).padStart(2, "0")}</span>
        `;
        
        b.onclick = () => showJourney(i);
        
        // تأثيرات حركية عند تمرير الماوس فوق الحقول الكحلية
        b.onmouseenter = () => {
            if (!b.classList.contains("active")) {
                b.style.setProperty("background", "rgba(244, 114, 182, 0.15)", "important");
                b.style.setProperty("border-color", "#f472b6", "important");
                b.style.setProperty("color", "#ffffff", "important");
            }
        };
        b.onmouseleave = () => {
            if (!b.classList.contains("active")) {
                b.style.setProperty("background", "#0f203b", "important"); // العودة للكحلي
                b.style.setProperty("border-color", "rgba(244, 114, 182, 0.15)", "important");
                b.style.setProperty("color", "#fce7f3", "important");
            }
        };
        
        box.appendChild(b);
    });
    
    // تشغيل المرحلة الأولى تلقائياً عند تحميل الصفحة لأول مرة
    showJourney(0);
}

function showJourney(i) {
    const d = journeyData[i];
    const buttons = document.querySelectorAll(".journey-step-btn");
    
    buttons.forEach((b, n) => {
        const isCurrent = (n === i);
        b.classList.toggle("active", isCurrent);
        
        const titleSpan = b.querySelector(".step-title");
        const numSpan = b.querySelector(".step-num");
        
        if (isCurrent) {
            // فرض اللون الوردي المضيء للمرحلة النشطة المحددة حالياً
            b.style.setProperty("background", "linear-gradient(135deg, #db2777, #ec4899)", "important");
            b.style.setProperty("border-color", "transparent", "important");
            b.style.setProperty("color", "#ffffff", "important");
            b.style.setProperty("transform", "translateX(-5px)", "important");
            if (titleSpan) titleSpan.style.setProperty("color", "#ffffff", "important");
            if (numSpan) numSpan.style.setProperty("color", "#ffffff", "important");
        } else {
            // إعادة تلوين باقي الأزرار باللون الكحلي الإجباري لمنع ظهور الكتل البيضاء تماماً
            b.style.setProperty("background", "#0f203b", "important"); 
            b.style.setProperty("border-color", "rgba(244, 114, 182, 0.15)", "important");
            b.style.setProperty("color", "#fce7f3", "important");
            b.style.setProperty("transform", "translateX(0)", "important");
            if (titleSpan) titleSpan.style.setProperty("color", "#cbd5e1", "important");
            if (numSpan) numSpan.style.setProperty("color", "#f472b6", "important");
        }
    });
    
    // تحديث لوحة البيانات الوصفية على الجانب الآخر
    const panelNo = document.getElementById("panelNo");
    const panelEn = document.getElementById("panelEn");
    const panelTitle = document.getElementById("panelTitle");
    const panelText = document.getElementById("panelText");
    const panelTags = document.getElementById("panelTags");

    if (panelNo) panelNo.textContent = String(i + 1).padStart(2, "0");
    if (panelEn) panelEn.textContent = d.en;
    if (panelTitle) panelTitle.textContent = d.title;
    if (panelText) panelText.textContent = d.text;
    if (panelTags) panelTags.innerHTML = d.tags.map(t => `<span>${t}</span>`).join("");
}
