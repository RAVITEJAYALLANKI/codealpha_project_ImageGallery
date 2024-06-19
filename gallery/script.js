let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = images[currentImageIndex].src;
    lightbox.style.display = 'block';
}

function closeLightbox(event) {
    if (event.target !== lightboxImage && event.target !== document.querySelector('.prev') && event.target !== document.querySelector('.next')) {
        lightbox.style.display = 'none';
    }
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    lightboxImage.src = images[currentImageIndex].src;
}
