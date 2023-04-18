import React from "react";

function Main() {
  return (
    <main class="main">
      <section class="profile">
        <div class="profile__avatar-wrapper">
          <img src="#" class="profile__img" alt="изображение Жак-Ива Кусто" />
          <button
            class="profile__button-avatar"
            type="button"
            title="Изменить аватар"
          ></button>
        </div>

        <div class="profile__info">
          <div class="profile__info-name">
            <h1 class="profile__title">Жак-Ив Кусто</h1>
            <button
              class="profile__button"
              type="button"
              aria-label="Редактировать"
            ></button>
          </div>
          <p class="profile__subtitle">Исследователь океана</p>
        </div>

        <button
          class="profile__add"
          type="button"
          aria-label="Добавить фото"
          onClick={handleEditAvatarClick}
        ></button>
      </section>

      <section class="cards"></section>
    </main>
  );
}

const handleEditAvatarClick = () => {
  const popup = document.querySelector(".popup");
  popup.classList.add("popup_opened");
};

export default Main;
