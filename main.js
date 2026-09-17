/**
 * ==========================================================================
 * ELORA - ملف التفاعلية والمنطق البرمجي الفائق السلس (الإصدار الفاخر المعدل)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // 1. تفعيل المظهر الداكن الفاخر افتراضيًا
    document.body.classList.add("dark");

    // 2. إدارة قائمة الموبايل التفاعلية بنعومة (Fade & Slide)
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("open");
            // إضافة حركة دوران طفيفة لزر الهامبرغر عند الضغط لزيادة سلاسة الـ UX
            menuToggle.style.transform = navLinks.classList.contains("open") ? "rotate(90deg)" : "rotate(0deg)";
        });

        // إغلاق القائمة تلقائيًا عند الضغط على أي رابط
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuToggle.style.transform = "rotate(0deg)";
            });
        });

        // إغلاق القائمة عند الضغط في أي مكان خارجها
        document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove("open");
                menuToggle.style.transform = "rotate(0deg)";
            }
        });
    }

    // 3. تأثيرات ظهور الكروت والعناصر بشكل انسيابي متتابع (Staggered Scroll Animations)
    const revealElements = document.querySelectorAll(".reveal, .glass-card, .track-card");
    
    if (revealElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -50px 0px", // يبدأ الظهور قبل دخول العنصر بالكامل ليعطي إحساسًا بالاستباقية
            threshold: 0.15 
        };

        const appearanceObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // إضافة تأخير زمني بسيط متتابع (Stagger effect) إذا ظهرت عدة كروت معًا
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }, index * 80); 
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(element => {
            // وضع الحالات المبدئية للعناصر عبر الـ JS مباشرة لضمان عدم حدوث وميض (Flicker)
            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
            element.style.transition = "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
            appearanceObserver.observe(element);
        });
    }

    // 4. ميزة تفاعلية إضافية: تأثير اللمعان والتحريك ثلاثي الأبعاد المائل (3D Tilt Effect) عند تحريك الماوس فوق الكروت
    const cards = document.querySelectorAll(".glass-card, .track-card");
    
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // مكان الماوس الأفقي داخل الكرت
            const y = e.clientY - rect.top;  // مكان الماوس العمودي داخل الكرت
            
            // حساب زوايا الدوران بناءً على موقع الماوس
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            const angleX = (yc - y) / 15; // درجة الميلان العمودي
            const angleY = (x - xc) / 15; // درجة الميلان الأفقي
            
            // تطبيق الدوران السلس
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-8px)`;
        });
        
        // إعادة الكرت لوضعه الطبيعي بنعومة فائقة عند خروج الماوس
        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
        });
    });
});
