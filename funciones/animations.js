document.addEventListener('DOMContentLoaded', function() {

    const sectionsToAnimate = document.querySelectorAll('.seccion-aparecer');

    if (sectionsToAnimate.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1
        });

        sectionsToAnimate.forEach(section => {
            observer.observe(section);
        });
    }
});