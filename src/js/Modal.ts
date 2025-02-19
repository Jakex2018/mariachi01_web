
const imageModal = document.getElementById("imageModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage") as HTMLImageElement; 

if (!closeModal || !modalImage || !imageModal) {
    throw new Error("No se pudo encontrar el botón de cerrar o el modal");
}

const images = document.querySelectorAll('.mySwiper img');

images.forEach((image) => {
    const img = image as HTMLImageElement; 
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        imageModal.style.display = 'flex'; 
    });
});

closeModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

imageModal.addEventListener('click', (event) => {
    if (event.target === imageModal) { 
        imageModal.style.display = 'none';
    }
});
