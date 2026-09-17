const menuToggle = document.getElementById("menuToggle"),
      navLinks = document.getElementById("navLinks"),
      themeToggle = document.getElementById("themeToggle");

// 1. فتح وإغلاق قائمة الموبايل التفاعلية بنعومة فائقة
if (menuToggle) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}

// إغلاق قائمة الموبايل تلقائيًا عند الضغط على أي رابط بداخلها لتسهيل تجربة التصفح
document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => navLinks?.classList.remove("open"));
});

// 2. وظيفة التبديل الهيكلي وضمان المزامنة المثالية مع نمط الألوان الجديد
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

// 3. محرك الحركات المعزز (Intersection Observer) لظهور الكروت بنعومة فائقة أثناء التمرير
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: .1 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
