// مصفوفة البيانات التي تحتوي على مراحل رحلة ELORA الثمانية
const journeyData = [
  { en: "SELF", title: "من أنا؟", text: "اكتشف اهتماماتك ونقاط قوتك ومهاراتك والأسئلة التي تثير فضولك.", tags: ["الاهتمامات", "نقاط القوة", "المهارات"] },
  { en: "FIELDS", title: "ما المجالات الموجودة أمامي؟", text: "استكشف المجالات والتخصصات والمسارات المختلفة قبل أن تتخذ قرارًا.", tags: ["المجالات", "التخصصات", "الخيارات"] },
  { en: "DEEP DIVE", title: "ماذا يحدث داخل المجال؟", text: "انتقل من الاسم والصورة السطحية إلى فهم حقيقي لما يحدث داخل المجال.", tags: ["فهم", "بحث", "تعمق"] },
  { en: "APPLY", title: "كيف أجرّب وأطبّق؟", text: "حوّل المعرفة إلى مشروع أو تجربة أو تحدٍ عملي.", tags: ["تجربة", "مشروع", "تطبيق"] },
  { en: "MIND", title: "كيف أفهم نفسي وأتعامل مع الضغوط؟", text: "افهم المشاعر والمقارنة والفشل والضغط, وابحث عن طرق صحية للتعامل معها.", tags: ["وعي", "ضغط", "توازن"] },
  { en: "SOCIETY", title: "كيف أفهم المشكلات من حولي؟", text: "حلل المشكلات الاجتماعية من خلال أسبابها وآثارها والسياق المحيط بها.", tags: ["المشكلة", "الأسباب", "الآثار"] },
  { en: "WORLD", title: "كيف يتعامل العالم مع المشكلات والفرص؟", text: "استخدم التجارب ودراسات الحالة لفهم القرارات والبدائل والنتائج.", tags: ["حالات", "قرارات", "نتائج"] },
  { en: "OPPORTUNITY", title: "إلى أين يمكن أن أذهب بما تعلمته؟", text: "اربط ما اكتشفته بالتجارب والمشروعات والفرص والخطوات القادمة.", tags: ["فرص", "مشروعات", "خطوة قادمة"] }
];

const box = document.getElementById("journeySteps");

// بناء أزرار المراحل ديناميكيًا داخل القائمة الجانبية بشكل كحلي منسق
if (box) {
    box.innerHTML = ""; // تنظيف الحاوية أولاً لمنع أي تكرار
    journeyData.forEach((d, i) => {
        const b = document.createElement("button");
        b.className = "journey-step-btn" + (i === 0 ? " active" : "");
        
        // إدخال التنسيقات الكحلية مباشرة لضمان التفوق البصري على أي تنسيقات موروثة
        b.style.width = "100%";
        b.style.display = "flex";
        b.style.justifyContent = "space-between";
        b.style.alignItems = "center";
        b.style.padding = "14px 20px";
        b.style.marginBottom = "8px";
        b.style.borderRadius = "12px";
        b.style.border = "1px solid rgba(244, 114, 182, 0.15)";
        b.style.cursor = "pointer";
        b.style.fontFamily = "inherit";
        b.style.fontSize = "15px";
        b.style.fontWeight = "700";
        b.style.transition = "all 0.3s ease";
        
        // الهيكل النصي للأزرار مع جلب العنوان باللغة العربية بجانب الرقم
        b.innerHTML = `
            <span class="step-title" style="flex-grow: 1; text-align: right; margin-left: 10px;">${d.title}</span>
            <span class="step-num" style="font-weight: 800; font-family: 'Plus Jakarta Sans', sans-serif;">${String(i + 1).padStart(2, "0")}</span>
        `;
        
        b.onclick = () => showJourney(i);
        
        // إضافة تأثيرات التمرير (Hover) بالماوس برمجياً لتبدو تفاعلية وقابلة للضغط
        b.onmouseenter = () => {
            if (!b.classList.contains("active")) {
                b.style.background = "rgba(244, 114, 182, 0.15)";
                b.style.borderColor = "#f472b6";
                b.style.color = "#ffffff";
            }
        };
        b.onmouseleave = () => {
            if (!b.classList.contains("active")) {
                b.style.background = "#0f203b"; // اللون الكحلي الداكن المريح للعين
                b.style.borderColor = "rgba(244, 114, 182, 0.15)";
                b.style.color = "#fce7f3";
            }
        };
        
        box.appendChild(b);
    });
    // عرض المرحلة الأولى تلقائيًا عند تحميل الصفحة
    showJourney(0);
}

// وظيفة تحديث لوحة العرض والتحكم الكامل بألوان الأزرار (كحلي / وردي نشط)
function showJourney(i) {
    const d = journeyData[i];
    
    // تحديث حالة الأزرار البصرية برمجياً وبدقة
    document.querySelectorAll(".journey-step-btn").forEach((b, n) => {
        const isCurrent = (n === i);
        b.classList.toggle("active", isCurrent);
        
        // الأزرار المحددة (النشطة حالياً) تضيء باللون الوردي والكتابة البيضاء
        if (isCurrent) {
            b.style.background = "linear-gradient(135deg, #db2777, #ec4899)";
            b.style.borderColor = "transparent";
            b.style.color = "#ffffff";
            b.style.transform = "translateX(-5px)"; // حركة تفاعلية خفيفة لليمين في الـ RTL
            b.querySelector(".step-num").style.color = "#ffffff";
            b.querySelector(".step-title").style.color = "#ffffff";
        } else {
            // الأزرار غير النشطة تعود للونها الكحلي لتوضيح أنها مكان مخصص للضغط
            b.style.background = "#0f203b"; // خلفية كحلي داكن متناسقة
            b.style.borderColor = "rgba(244, 114, 182, 0.15)";
            b.style.color = "#fce7f3"; // نص مائل للوردي الناعم المريح للقراءة
            b.style.transform = "translateX(0)";
            b.querySelector(".step-num").style.color = "#f472b6"; // الأرقام بلون وردي مميز
            b.querySelector(".step-title").style.color = "#cbd5e1";
        }
    });
    
    // تحديث نصوص المخرجات التوضيحية للمرحلة على اليسار
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
