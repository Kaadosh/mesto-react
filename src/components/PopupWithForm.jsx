import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className={`popup__container popup_container-${props.name}`}>
        <button
          onClick={props.onClose}
          type="button"
          aria-label="закрыть"
          className="popup__close popup__close-profile"
        ></button>
        <h2
          className={`popup__title popup__title-${props.name}`}
        >{`${props.title}`}</h2>
        {props.children}
        <form
          className={`popup__form popup__form-${props.name}`}
          name={`${props.name}`}
          novalidate
        >
          <button type="submit" name="save" className="popup__button">
            {`${props.buttonText}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
