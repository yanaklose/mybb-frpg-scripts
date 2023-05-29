const showPopup = (popup) => {
  popup.classList.add('popup--show');
  document.body.classList.add('popup-open');
}

const hidePopup = (evt) => {
  const closeButton = evt.target;
  const popup = closeButton.closest('.popup');

  popup.classList.remove('popup--show');
  document.body.classList.remove('popup-open');

  closeButton.removeEventListener('click', hidePopup);
}

export { showPopup, hidePopup };
