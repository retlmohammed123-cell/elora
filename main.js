/**
 * ==========================================================================
 * ELORA - ملف التفاعلية والمنطق البرمجي الرئيسي (الإصدار المستقر النهائي)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // 1. تفعيل المظهر الداكن المريح افتراضياً ومباشرة على مستوى جسم الصفحة
    document.body.classList.add("dark");

    // 2. إدارة قائمة الموبايل التفاعلية (الهامبرغر)
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation(); // منع انتشار الحدث
            navLinks.classList.toggle("open");
        });

        // إغلاق القائمة تلقائياً عند الضغط على أي رابط بداخلها
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
            });
        });

        // إغلاق القائمة عند الضغط في أي مكان خارجها
        document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove("open");
            }
        });
    }

    // 3. تأثيرات ظهور الكروت والعناصر بسلاسة تامة أثناء التمرير للأسفل (Scroll Animations)
    const revealElements = document.querySelectorAll(".reveal");
    
    if (revealElements.length > 0) {
        const observerOptions = {
            root: null, // يعتمد على نافذة العرض للمتصفح
            threshold: 0.1 // يبدأ التأثير عند ظهور 10% من العنصر
        };

        const appearanceObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // إيقاف المراقبة بعد الظهور لتحسين الأداء
                }
            });
        }, observerOptions);

        revealElements.forEach(element => appearanceObserver.observe(element));
    }
});
