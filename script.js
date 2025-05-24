let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    slides.forEach(slide => { slide.style.display = "none"; });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // change d pic every 3 secs
}

showSlides();
