export const modal = {
    backdrop: document.querySelector(".modal-backdrop"),
    closeButton: document.querySelector(".modal .close-button"),
    message: document.querySelector(".modal .title"),

    open() {
        modal.backdrop.classList.add("open");
    },
    close() {
        modal.backdrop.classList.remove("open");
    }
};

modal.closeButton.addEventListener("click", modal.close);
modal.backdrop.addEventListener("click", modal.close);
window.addEventListener("keydown", handleEscapePressing);

function handleEscapePressing(e) {
    e.key === "Escape" && modal.close();
}