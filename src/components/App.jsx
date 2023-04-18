import React from "react";
import Header from "./Headers";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <body class="page">
      <Header />
      <Main />
      <Footer />

      <div class="popup" id="popup__profile">
        <div class="popup__container">
          <button
            type="button"
            aria-label="закрыть"
            class="popup__close popup__close-profile"
          ></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form
            class="popup__form popup__form-profile"
            name="formProfile"
            novalidate
          >
            <input
              type="text"
              id="nickName"
              name="name"
              class="popup__field popup__field_input_nickname"
              value="Жак-Ив Кусто"
              minlength="2"
              maxlength="40"
              required
            />
            <span class="popup__field-error nickName-error"></span>
            <input
              type="text"
              id="profession"
              name="profession"
              class="popup__field popup__field_input_profession"
              value="Исследователь океана"
              minlength="2"
              maxlength="200"
              required
            />
            <span class="popup__field-error profession-error"></span>
            <button type="submit" name="save" class="popup__button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class="popup" id="popup__add-card">
        <div class="popup__container">
          <button
            type="button"
            aria-label="закрыть"
            class="popup__close popup__close-card"
          ></button>
          <form
            class="popup__form popup__form-cards"
            name="formCards"
            novalidate
          >
            <h2 class="popup__title">Новое место</h2>
            <input
              type="text"
              id="nameCard"
              name="name"
              class="popup__field popup__field_input_namecard"
              placeholder="Название"
              minlength="2"
              maxlength="30"
              required
            />
            <span class="popup__field-error nameCard-error"></span>
            <input
              type="url"
              id="urlCard"
              name="link"
              class="popup__field popup__field_input_imagecard"
              placeholder="Ссылка на картинку"
              required
            />
            <span class="popup__field-error urlCard-error"></span>
            <button
              type="submit"
              id="buttonCard"
              name="save"
              class="popup__button"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup-view" id="popup__view">
        <div class="popup__view-container">
          <img class="popup__photo-view" src="#" alt="#" />
          <h2 class="popup__title-view"></h2>
          <button
            type="button"
            aria-label="закрыть"
            class="popup__close popup__close-view"
          ></button>
        </div>
      </div>
      <div class="popup" id="popup__add-avatar">
        <div class="popup__container popup__container-avatar">
          <button
            type="button"
            aria-label="закрыть"
            class="popup__close popup__close-avatar"
          ></button>
          <form
            class="popup__form popup__form-avatar"
            name="edit-avatar"
            novalidate
          >
            <h2 class="popup__title">Обновить аватар</h2>
            <input
              type="url"
              id="avatar-input"
              name="link"
              class="popup__field popup__field_avatar_input"
              placeholder="Ссылка на аватарку"
              required
            />
            <span class="popup__field-error avatar-input-error"></span>
            <button
              type="submit"
              id="buttonAvatar"
              name="save"
              class="popup__button"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div class="popup" id="popup__confirm">
        <div class="popup__confirm-container">
          <button
            type="button"
            aria-label="закрыть"
            class="popup__close popup__close-card"
          ></button>
          <h2 class="popup__title">Вы уверены?</h2>
          <form class="popup__form popup__form-cards" name="confirm" novalidate>
            <button
              type="submit"
              id="buttonSure"
              name="Submit"
              class="popup__button"
            >
              Да
            </button>
          </form>
        </div>
      </div>
      <template id="cards">
        <article class="card">
          <button
            type="button"
            aria-label="Удалить"
            class="card__delete"
          ></button>
          <img class="card__photo" src="#" alt="#" />
          <h2 class="card__title"></h2>
          <div class="card__wrapper">
            <button type="button" aria-label="Лайк" class="card__like"></button>
            <div class="card__counter"></div>
          </div>
        </article>
      </template>
    </body>
  );
}

export default App;
