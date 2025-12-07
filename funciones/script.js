// BARRA NAVEGACIÓN - Menú hamburguesa y submenu destinos mobile
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona la barra de navegación principal y el botón hamburguesa
    var mainNav = document.querySelector('nav.main-nav');
    var hamburgerBtn = mainNav ? mainNav.querySelector('.hamburger') : null;

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', function () {
            var expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', String(!expanded));
            mainNav.classList.toggle('mobile-active');
        });
    }

    window.addEventListener('resize', function () {
        if (mainNav && hamburgerBtn) {
            if (window.innerWidth > 900) {
                mainNav.classList.remove('mobile-active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });
});


// CARRUSEL DESTINOS

        const carouselTrack = document.querySelector('.destinos-carousel-track');
        const prevBtn = document.querySelector('.carousel-arrow.left');
        const nextBtn = document.querySelector('.carousel-arrow.right');
        const cards = carouselTrack.querySelectorAll('.destinos-card');
        const totalCards = cards.length;
        const visibleCards = 3;
        let currentIndex = 0;

        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth + 16; // incluye gap (1rem = 16px)
            const distance = -cardWidth * currentIndex;
            carouselTrack.style.transform = `translateX(${distance}px)`;
        }

        function showPrev() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        }
        function showNext() {
            if (currentIndex < totalCards - visibleCards) {
                currentIndex++;
                updateCarousel();
            }
        }

        prevBtn.addEventListener('click', showPrev);
        nextBtn.addEventListener('click', showNext);

        window.addEventListener('resize', updateCarousel);
        window.addEventListener('load', updateCarousel);