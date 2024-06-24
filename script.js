let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex and show the current slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }
    slides[slideIndex - 1].style.display = "block";

    // Change image every 3 seconds
    setTimeout(showSlides, 3000);
}

document.querySelectorAll('.icon-card').forEach(card => {
  const src = card.getAttribute('data-src');
  card.style.backgroundImage = `url(${src})`;
});
