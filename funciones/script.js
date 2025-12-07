// BARRA NAVEGACIÓN - Menú hamburguesa y submenu destinos mobile
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona la barra de navegación principal y el botón hamburguesa
    var mainNav = document.querySelector('nav.main-nav');
    var hamburgerBtn = mainNav ? mainNav.querySelector('.hamburger') : null;
    var icon = hamburgerBtn ? hamburgerBtn.querySelector('i') : null;

    if (hamburgerBtn && mainNav && icon) {
        hamburgerBtn.addEventListener('click', function () {
            var expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', String(!expanded));
            mainNav.classList.toggle('mobile-active');

            hamburgerBtn.classList.toggle("active");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });
    }

    window.addEventListener('resize', function () {
        if (mainNav && hamburgerBtn) {
            if (window.innerWidth > 900) {
                mainNav.classList.remove('mobile-active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
                hamburgerBtn.classList.remove("active");
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-times");
            }
        }
    });
});


// CARRUSEL DESTINOS
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carrusel-destinos');
    if (carousel) {
        const carouselTrack = document.querySelector('.carrusel-destinos-pista');
        const prevBtn = document.querySelector('.flecha-carrusel.izquierda');
        const nextBtn = document.querySelector('.flecha-carrusel.derecha');
        const cards = carouselTrack.querySelectorAll('.tarjeta-destino');
        const totalCards = cards.length;
        let visibleCards = 3;
        let currentIndex = 0;
        let autoSlideInterval;

        const updateVisibleCards = () => {
            if (window.innerWidth <= 600) visibleCards = 1;
            else if (window.innerWidth <= 900) visibleCards = 2;
            else visibleCards = 3;
        };

        function updateCarousel() {
            updateVisibleCards();
            const cardWidth = cards[0].offsetWidth + 16; 
            const distance = -cardWidth * currentIndex;
            carouselTrack.style.transform = `translateX(${distance}px)`;
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= totalCards - visibleCards;
        }

        function showPrev() {
            currentIndex = Math.max(currentIndex - 1, 0);
            updateCarousel();
        }

        function showNext() {
            currentIndex = Math.min(currentIndex + 1, totalCards - visibleCards);
            updateCarousel();
        }

        const startAutoSlide = () => {
            stopAutoSlide();
            autoSlideInterval = setInterval(() => {
                if (currentIndex >= totalCards - visibleCards) {
                    currentIndex = 0; 
                } else {
                    currentIndex++;
                }
                updateCarousel();
            }, 3000); // Cambia de imagen cada 3 segundos
        };

        const stopAutoSlide = () => {
            clearInterval(autoSlideInterval);
        }

        prevBtn.addEventListener('click', () => { showPrev(); startAutoSlide(); });
        nextBtn.addEventListener('click', () => { showNext(); startAutoSlide(); });

        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);

        window.addEventListener('resize', () => {
            if (currentIndex >= totalCards - visibleCards) {
                currentIndex = 0;
            }
            updateCarousel();
        });

        // Iniciar todo
        updateCarousel();
        startAutoSlide();
    }
});