document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle"),
          navLinks = document.getElementById("navLinks"),
          themeToggle = document.getElementById("themeToggle"),
          contactForm = document.getElementById("contactForm"),
          formMessage = document.getElementById("formMessage");

    // فرض الوضع الداكن المستقر
    document.body.classList.add("dark");

    // فتح وإغلاق قائمة الموبايل
    if (menuToggle) menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
    document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks?.classList.remove("open")));

    // تعريب وتحديث نصوص التلميح (Placeholders) ديناميكياً لتناسب الهيكل المطور
    const nameInput = document.getElementById("username");
    const emailInput = document.getElementById("useremail");
    const messageInput = document.getElementById("usermessage");

    if (nameInput) nameInput.setAttribute('placeholder', 'الاسم الكامل');
    if (emailInput) emailInput.setAttribute('placeholder', 'البريد الإلكتروني');
    if (messageInput) messageInput.setAttribute('placeholder', 'اكتب تفاصيل رسالتك أو استفسارك هنا...');

    // معالجة نموذج الاتصال وعرض رسالة النجاح التفاعلية بالأسفل
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (formMessage) {
                formMessage.textContent = 'تم استلام الرسالة تجريبيًا. عند ربط الموقع بخدمة إرسال، ستصل الرسائل فعليًا.';
            }
            contactForm.reset();
        });
    }

    // محرك حركات التمرير (Intersection Observer)
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: .1 });

    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
});
