import React from "react";

function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <div
            style={{ backgroundImage: `url(${props.avatar})` }}
            className="profile__img"
            alt=""
          />
          <button
            onClick={props.onEditAvatar}
            className="profile__button-avatar"
            type="button"
            title="Изменить аватар"
          ></button>
        </div>

        <div className="profile__info">
          <div className="profile__info-name">
            <h1 className="profile__title">{props.name}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__button"
              type="button"
              aria-label="Редактировать"
            ></button>
          </div>
          <p className="profile__subtitle">{props.about}</p>
        </div>

        <button
          onClick={props.onAddPlace}
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
