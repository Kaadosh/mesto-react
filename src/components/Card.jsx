import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <article className="card" key={card._id}>
      <button
        type="button"
        aria-label="Удалить"
        className="card__delete"
      ></button>
      <img
        className="card__photo"
        onClick={handleClick}
        style={{ backgroundImage: `url(${card.link})` }}
        alt={card.name}
      />
      <h2 className="card__title">{card.name}</h2>
      <div className="card__wrapper">
        <button type="button" aria-label="Лайк" class="card__like"></button>
        <div className="card__counter">{card.likes.length}</div>
      </div>
    </article>
  );
}

export default Card;
