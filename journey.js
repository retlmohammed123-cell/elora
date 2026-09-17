// مصفوفة البيانات التي تحتوي على مراحل رحلة ELORA الثمانية
const journeyData = [
  { en: "SELF", title: "من أنا؟", text: "اكتشف اهتماماتك ونقاط قوتك ومهاراتك والأسئلة التي تثير فضولك.", tags: ["الاهتمامات", "نقاط القوة", "المهارات"] },
  { en: "FIELDS", title: "ما المجالات الموجودة أمامي؟", text: "استكشف المجالات والتخصصات والمسارات المختلفة قبل أن تتخذ قرارًا.", tags: ["المجالات", "التخصصات", "الخيارات"] },
  { en: "DEEP DIVE", title: "ماذا يحدث داخل المجال؟", text: "انتقل من الاسم والصورة السطحية إلى فهم حقيقي لما يحدث داخل المجال.", tags: ["فهم", "بحث", "تعمق"] },
  { en: "APPLY", title: "كيف أجرّب وأطبّق؟", text: "حوّل المعرفة إلى مشروع أو تجربة أو تحدٍ عملي.", tags: ["تجربة", "مشروع", "تطبيق"] },
  { en: "MIND", title: "كيف أفهم نفسي وأتعامل مع الضغوط؟", text: "افهم المشاعر والمقارنة والفشل والضغط، وابحث عن طرق صحية للتعامل معها.", tags: ["وعي", "ضغط", "توازن"] },
  { en: "SOCIETY", title: "كيف أفهم المشكلات من حولي؟", text: "حلل المشكلات الاجتماعية من خلال أسبابها وآثارها والسياق المحيط بها.", tags: ["المشكلة", "الأسباب", "الآثار"] },
  { en: "WORLD", title: "كيف يتعامل العالم مع المشكلات والفرص؟", text: "استخدم التجارب ودراسات الحالة لفهم القرارات والبدائل والنتائج.", tags: ["حالات", "قرارات", "نتائج"] },
  { en: "OPPORTUNITY", title: "إلى أين يمكن أن أذهب بما تعلمته؟", text: "arبط ما اكتشفته بالتجارب والمشروعات والفرص والخطوات القادمة.", tags: ["فرص", "مشروعات", "خطوة قادمة"] }
];

const box = document.getElementById("journeySteps");

if (box) {
    box.innerHTML = ""; 
    journeyData.forEach((d, i) => {
        const b = document.createElement("button");
        // نستخدم كلاسات واضحة وصريحة ليتحكم بها الـ CSS
        b.className = "journey-step-btn" + (i === 0 ? " active" : "");
        
        b.innerHTML = `
            <span class="step-title">${d.title}</span>
            <span class="step-num">${String(i + 1).padStart(2, "0")}</span>
        `;
        
        b.onclick = () => showJourney(i);
        box.appendChild(b);
    });
    showJourney(0);
}

function showJourney(i) {
    // تبديل كلاس active بين الأزرار
    const buttons = document.querySelectorAll(".journey-step-btn");
    buttons.forEach((b, n) => b.classList.toggle("active", n === i));
    
    const d = journeyData[i];
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
