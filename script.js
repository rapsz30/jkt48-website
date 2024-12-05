document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;

    function showSlide(index) {
        const slides = carousel.querySelectorAll('img');
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        carousel.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

    setInterval(() => showSlide(currentIndex + 1), 4000);
});

function goToHome() {
    window.location.href = "home.html";
}
