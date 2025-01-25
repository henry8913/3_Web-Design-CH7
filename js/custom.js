document.addEventListener("DOMContentLoaded", () => {
    const closeOffcanvasMenu = () => {
        const offcanvasElement = document.querySelector(".offcanvas");
        if (offcanvasElement) {
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {
                offcanvas.hide();
            }
        }
    };

    const activateSectionObserver = () => {
        const sections = document.querySelectorAll("[data-section]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("section-visible");
                    }
                });
            },
            { threshold: 0.2 }
        );
        sections.forEach((section) => observer.observe(section));
    };

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            closeOffcanvasMenu();
        });
    });

    activateSectionObserver();
});