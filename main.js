// Teradata Carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('[data-carousel="slide"]');
    const items = carousel.querySelectorAll('[data-carousel-item]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');

    let currentIndex = 0;
    const totalItems = items.length;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
            item.classList.toggle('block', i === index);
        });

        indicators.forEach((indicator, i) => {
            indicator.setAttribute('aria-current', i === index ? 'true' : 'false');
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    const autoSlide = true;
    const intervalTime = 5000; // 5 seconds

    if (autoSlide) {
        setInterval(nextSlide, intervalTime);
    }

    // Initialize the first slide
    showSlide(currentIndex);
});

//  JSC Carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#jsc-carousel');
    const items = carousel.querySelectorAll('[data-carousel-item]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');

    let currentIndex = 0;
    const totalItems = items.length;

    const updateCarousel = (index) => {
        items.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
            item.classList.toggle('block', i === index);
        });
        indicators.forEach((indicator, i) => {
            indicator.setAttribute('aria-current', i === index ? 'true' : 'false');
        });
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel(currentIndex);
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel(currentIndex);
    };

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    // Auto-slide every 5 seconds
    setInterval(showNext, 5000);

    // Initialize carousel
    updateCarousel(currentIndex);
});


// Interactive nav
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#navbar-default a');

    const setActiveLink = (target) => {
        navLinks.forEach(link => {
            if (link === target) {
                link.classList.add('text-blue-700', 'font-bold'); 
                link.classList.remove('text-white'); 
            } else {
                link.classList.remove('text-blue-700', 'font-bold'); 
                link.classList.add('text-white'); 
            }
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            setActiveLink(link); 
        });
    });
});
