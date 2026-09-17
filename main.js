const menuToggle = document.getElementById("menuToggle"),
      navLinks = document.getElementById("navLinks"),
      themeToggle = document.getElementById("themeToggle");

// تشغيل قائمة الموبايل
if (menuToggle) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}

// إغلاق قائمة الموبايل عند الضغط على أي رابط
document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => navLinks?.classList.remove("open"));
});

// ميزة المظهر الداكن والفاتح وحفظ الخيار في المتصفح
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

// تأثيرات ظهور العناصر أثناء التمرير (Intersection Observer)
const io = new IntersectionObserver(es => {
    es.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
    });
}, { threshold: .1 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
