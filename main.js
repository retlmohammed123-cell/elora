/**
 * ==========================================================================
 * ELORA - ملف التفاعلية والمنطق البرمجي الرئيسي (الإصدار المستقر النهائي)
 * ==========================================================================
 */

const menuToggle = document.getElementById("menuToggle"),
      navLinks = document.getElementById("navLinks"),
      themeToggle = document.getElementById("themeToggle");

// 1. فتح وإغلاق قائمة الموبايل التفاعلية بسلاسة
if (menuToggle) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}

// إغلاق قائمة الموبايل تلقائيًا عند الضغط على أي رابط بداخلها
document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => navLinks?.classList.remove("open"));
});

// 2. وظيفة إدارة وتبديل الهوية مع الحفاظ على المنطق البرمجي والترتيب الأصلي
function setTheme(dark) {
    document.body.classList.toggle("dark", dark);
    if (themeToggle) themeToggle.textContent = dark ? "☀" : "☾";
    localStorage.setItem("elora-theme", dark ? "dark" : "light");
}

const saved = localStorage.getItem("elora-theme");
if (saved === "dark") setTheme(true);

if (themeToggle) {
    themeToggle.addEventListener("click", () => setTheme(!document.body.classList.contains("dark")));
}

// 3. مراقبة العناصر وحركات التمرير والانتقال السلس الفائق (Intersection Observer)
const io = new IntersectionObserver(es => {
    es.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("visible");
        }
    });
}, { threshold: .1 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
