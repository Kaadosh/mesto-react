import React from "react";

function PopupWithForm({ name, isOpen, onClose, title, children, buttonText }) {
  return (
    <div className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup_container-${name}`}>
        <button
          onClick={onClose}
          type="button"
          aria-label="закрыть"
          className="popup__close popup__close-profile"
        ></button>
        <h2 className={`popup__title popup__title-${name}`}>{`${title}`}</h2>
        {children}
        <form
          className={`popup__form popup__form-${name}`}
          name={`${name}`}
          novalidate
        >
          <button type="submit" name="save" className="popup__button">
            {`${buttonText}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
