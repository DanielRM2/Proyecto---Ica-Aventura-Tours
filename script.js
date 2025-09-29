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

        // BARRA NAVEGACIÓN - Menú hamburguesa y submenu destinos mobile
        const mainNav = document.querySelector('nav.main-nav');
        const hamburgerBtn = mainNav.querySelector('.hamburger');
        const destinosLi = mainNav.querySelector('li.destinos');
        const destinosBtn = document.getElementById('btn-destinos');

        hamburgerBtn.addEventListener('click', () => {
            const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', String(!expanded));
            mainNav.classList.toggle('mobile-active');
        });

        destinosBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const expanded = destinosBtn.getAttribute('aria-expanded') === 'true';
            destinosBtn.setAttribute('aria-expanded', String(!expanded));
            destinosLi.classList.toggle('open');
        });
        
        window.addEventListener('resize', () => {
            updateCarousel();

            if (window.innerWidth > 900) {
                mainNav.classList.remove('mobile-active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
                destinosLi.classList.remove('open');
                destinosBtn.setAttribute('aria-expanded', 'false');
            }
        });
