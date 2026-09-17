// كائن البيانات الذي يحتوي على تفاصيل خيارات الاستكشاف الأربعة
const exploreData = {
    self: [
        "✦",
        "ابدأ من نفسك",
        "تعرّف على اهتماماتك ونقاط قوتك والمهارات التي تريد تطويرها، ثم ابنِ الأسئلة التي ستقود رحلتك."
    ],
    fields: [
        "◇",
        "افتح أبواب المجالات",
        "استكشف المجالات والتخصصات المختلفة، وتعرّف على ما يحدث داخل كل مجال بدل الاكتفاء باسمه."
    ],
    problems: [
        "◎",
        "افهم ما حولك",
        "حلل المشكلات الاجتماعية من خلال الأسباب والآثار والسياق، ثم فكّر في طرق التعامل معها."
    ],
    world: [
        "◉",
        "انظر إلى الصورة الأكبر",
        "استخدم التجارب ودراسات الحالة لفهم القرارات والأنظمة والنتائج والبدائل وما يمكن تعلمه منها."
    ]
};

// إضافة أحداث الضغط على خيارات الاستكشاف وتبديل الحالة النشطة وتحديث المخرجات
document.querySelectorAll(".explore-option").forEach(card => {
    card.addEventListener("click", () => {
        // إزالة الكلاس النشط من جميع البطاقات وإضافته للبطاقة التي تم الضغط عليها حالياً
        document.querySelectorAll(".explore-option").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        
        // جلب البيانات المطابقة للنوع المختار من كائن البيانات
        const dataType = card.dataset.type;
        const d = exploreData[dataType];
        
        // التأكد من وجود البيانات والعناصر في الصفحة قبل محاولة تحديثها لتجنب الأخطاء البرمجية
        if (d) {
            const outputIcon = document.getElementById("outputIcon");
            const outputTitle = document.getElementById("outputTitle");
            const outputText = document.getElementById("outputText");
            
            if (outputIcon) outputIcon.textContent = d[0];
            if (outputTitle) outputTitle.textContent = d[1];
            if (outputText) outputText.textContent = d[2];
        }
    });
});
