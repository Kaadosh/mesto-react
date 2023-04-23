import React from "react";
import Card from "./Card";

function Main({
  avatar,
  name,
  about,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
}) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img
            style={{ backgroundImage: `url(${avatar})` }}
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
            <h1 className="profile__title">{name}</h1>
            <button
              onClick={onEditProfile}
              className="profile__button"
              type="button"
              aria-label="Редактировать"
            ></button>
          </div>
          <p className="profile__subtitle">{about}</p>
        </div>

        <button
          onClick={onAddPlace}
          className="profile__add"
          type="button"
          aria-label="Добавить фото"
        ></button>
      </section>

      <section className="cards"></section>
    </main>
  );
}

export default Main;
