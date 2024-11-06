let currentSlide = 0;
const indicators = document.querySelectorAll('.indicator1');
const slides = document.querySelectorAll('.carousel-item1');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            slide.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
            slide.style.opacity = 1;
            slide.style.transform = 'scale(1) rotate(0deg)';
        } else {
            slide.classList.remove('active');
            slide.style.opacity = 0;
            slide.style.transform = 'scale(0.9) rotate(-30deg)';
        }
        if (indicators[i]) {
            indicators[i].classList.toggle('active', i === index);
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

showSlide(currentSlide);

document.querySelectorAll('.anime-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-10px) scale(1.05)';
        item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        item.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.boxShadow = 'none';
        item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});