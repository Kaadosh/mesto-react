import React from "react";
import CurrentUserContext from "./CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like ${
    isLiked && "card__like_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <article className="card" key={card._id}>
      {isOwn && (
        <button
          onClick={handleDeleteClick}
          type="button"
          aria-label="Удалить"
          className="card__delete"
        ></button>
      )}
      <img
        className="card__photo"
        onClick={handleClick}
        style={{ backgroundImage: `url(${card.link})` }}
        alt={card.name}
      />
      <h2 className="card__title">{card.name}</h2>
      <div className="card__wrapper">
        <button
          onClick={handleLikeClick}
          type="button"
          aria-label="Лайк"
          className={cardLikeButtonClassName}
        ></button>
        <div className="card__counter">{card.likes.length}</div>
      </div>
    </article>
  );
}

export default Card;
