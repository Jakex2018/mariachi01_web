
const playButton = document.getElementById("playButton");
const closeModalButton = document.getElementById("closeModal");
const videoModal = document.getElementById("videoModal");
if (!closeModalButton || !videoModal || !playButton) {
    throw new Error("No se pudo encontrar el botón de cerrar o el modal");
}
closeModalButton.addEventListener("click", () => {
    videoModal.style.display = "none";
});

playButton.addEventListener("click", () => {
    videoModal.style.display = "flex";
});

videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
        videoModal.style.display = "none";
    }
});
