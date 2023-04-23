import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="card" key={props.card._id}>
      <button
        type="button"
        aria-label="Удалить"
        className="card__delete"
      ></button>
      <img
        className="card__photo"
        onClick={handleClick}
        style={{ backgroundImage: `url(${props.card.link})` }}
        alt="#"
      />
      <h2 className="card__title">{props.card.name}</h2>
      <div className="card__wrapper">
        <button type="button" aria-label="Лайк" class="card__like"></button>
        <div className="card__counter">{props.card.likes.length}</div>
      </div>
    </article>
  );
}

export default Card;
