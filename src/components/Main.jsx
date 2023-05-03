import React from "react";
import Card from "./Card";
import CurrentUserContext from "./CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards }) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img
            style={{ backgroundImage: `url(${CurrentUser.avatar})` }}
            className="profile__img"
            alt=""
          />
          <button
            onClick={onEditAvatar}
            className="profile__button-avatar"
            type="button"
            title="Изменить аватар"
          ></button>
        </div>

        <div className="profile__info">
          <div className="profile__info-name">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              onClick={onEditProfile}
              className="profile__button"
              type="button"
              aria-label="Редактировать"
            ></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>

        <button
          onClick={onAddPlace}
          className="profile__add"
          type="button"
          aria-label="Добавить фото"
        ></button>
      </section>

      <section className="cards">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
