export const ModalError = () => {

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const popupModal = document.createElement('div');
    popupModal.className = 'popup';

    const contentClose = document.createElement('div');
    contentClose.className = 'contenedor-cerrar';

    const btnClose = document.createElement('a');
    btnClose.className = 'btn-cerrar-popup';
    btnClose.id = 'btn-cerrar-popup';

    const iconClose = document.createElement('i');
    iconClose.className = 'fa-regular fa-circle-xmark';

    const contentMeal = document.createElement('div');
    contentMeal.className = 'contenedor-elementos';

    const message = document.createElement('h1');
    message.textContent = 'Por favor de intentar más tarde';

    contentMeal.appendChild(message);
    btnClose.appendChild(iconClose);
    contentClose.appendChild(btnClose);
    popupModal.appendChild(contentClose);
    popupModal.appendChild(contentMeal);
    overlay.appendChild(popupModal);

    btnClose.addEventListener("click", function() {
        overlay.classList.remove('active');
        popupModal.classList.remove('active');
        overlay.remove();
    });

    return overlay;
}