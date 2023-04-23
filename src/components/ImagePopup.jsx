import React from "react";

function ImagePopup(props) {
  return (
    <div class={`popup popup-view ${props.card ? "popup_opened" : ""}`}>
      <div class="popup__view-container">
        <img
          class="popup__photo-view"
          src={props.card ? props.card.link : ""}
          alt="#"
        />
        <h2 class="popup__title-view">{props.card ? props.card.name : ""}</h2>
        <button
          onClick={props.onClose}
          type="button"
          aria-label="закрыть"
          class="popup__close popup__close-view"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
