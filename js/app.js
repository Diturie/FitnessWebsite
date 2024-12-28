document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slider = document.querySelector('.review-slider');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateSlider() {
        const offset = -currentSlide * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        updateSlider();
    });

    // Typing text effect
    new Typed('.multiple-text', {
        strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss', 'Weight Lifting', 'Running'],
        typeSpeed: 50,
        backSpeed: 60,
        backDelay: 1000,
        loop: true,
    });

    // Modal Join-Us
    const joinUsModal = document.getElementById('joinUsModal');

    // Function to show the Join Us modal
    function showJoinUsModal() {
        joinUsModal.style.display = 'flex'; // Use 'flex' to center the modal
        document.body.style.overflow = 'hidden'; // Disable background scrolling
    }

    // Show the Join Us modal on page load
    showJoinUsModal();


})
