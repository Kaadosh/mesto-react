import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div class={`popup popup-view ${card ? "popup_opened" : ""}`}>
      <div class="popup__view-container">
        <img
          class="popup__photo-view"
          src={card ? card.link : ""}
          alt={card.name}
        />
        <h2 class="popup__title-view">{card ? card.name : ""}</h2>
        <button
          onClick={onClose}
          type="button"
          aria-label="закрыть"
          class="popup__close popup__close-view"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
