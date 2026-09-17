/**
 * ==========================================================================
 * ELORA - ملف التفاعلية والمنطق البرمجي الرئيسي (الإصدار المستقر والآمن)
 * ==========================================================================
 */

const menuToggle = document.getElementById("menuToggle"),
      navLinks = document.getElementById("navLinks"),
      themeToggle = document.getElementById("themeToggle");

// 1. فتح وإغلاق قائمة الموبايل التفاعلية بسلاسة وأمان
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

// إغلاق قائمة الموبايل تلقائيًا عند الضغط على أي رابط بداخلها لتجنب حجب الرؤية
document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => {
        if (navLinks) navLinks.classList.remove("open");
    });
});

// 2. وظيفة إدارة وتبديل الوضع الداكن (Dark Mode) بأداء متوافق ومستقر
function setTheme(dark) {
    document.body.classList.toggle("dark", dark);
    if (themeToggle) {
        themeToggle.textContent = dark ? "☀" : "☾";
    }
    localStorage.setItem("elora-theme", dark ? "dark" : "light");
}

// استعادة وضع المظهر المفضل للمستخدم عند التحميل
const savedTheme = localStorage.getItem("elora-theme");
if (savedTheme === "dark") {
    setTheme(true);
} else {
    setTheme(false); // الوضع الافتراضي للمنصة
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        setTheme(!document.body.classList.contains("dark"));
    });
}

// 3. مراقبة العناصر وتأثيرات الظهور السلس الفائق أثناء التمرير (Intersection Observer)
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // بمجرد ظهور العنصر، نلغي مراقبته لتحسين أداء استهلاك ذاكرة المتصفح
            revealObserver.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px" // يبدأ التأثير قبل وصول العنصر للحافة تماماً لراحة العين
});

// تفعيل المراقب على كل عنصر يحتوي على كلاس الـ reveal المحسن
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
