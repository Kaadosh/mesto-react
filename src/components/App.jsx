import React from "react";
import Header from "./Headers";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import Card from "./Card";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка:${err}`);
      });
  }, []);
  React.useEffect(() => {
    api
      .getCards()
      .then((cards) => {
        setCards(cards);
      }, [])
      .catch((err) => console.log(err));
  });
  return (
    <body className="page">
      <Header />
      <Main
        name={userName}
        about={userDescription}
        cards={cards}
        avatar={userAvatar}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
      >
        <input
          type="text"
          id="username"
          name="username"
          className="popup__field popup__field_input_nickname"
          value="Жак-Ив Кусто"
          minlength="2"
          maxlength="40"
          required
        />
        <span className="popup__field-error nickName-error"></span>
        <input
          type="text"
          id="about"
          name="about"
          className="popup__field popup__field_input_profession"
          value="Исследователь океана"
          minlength="2"
          maxlength="200"
          required
        />
        <span className="popup__field-error profession-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="addCard"
        title="Новое место"
        buttonText="Создать"
      >
        <input
          type="text"
          id="nameCard"
          name="name"
          className="popup__field popup__field_input_namecard"
          placeholder="Название"
          minlength="2"
          maxlength="30"
          required
        />
        <span className="popup__field-error nameCard-error"></span>
        <input
          type="url"
          id="urlCard"
          name="link"
          className="popup__field popup__field_input_imagecard"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__field-error urlCard-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
      >
        <input
          type="url"
          id="avatarlink"
          name="avatarlink"
          className="popup__field popup__field_avatar_input"
          placeholder="Ссылка на аватарку"
          required
        />
        <span className="popup__field-error avatar-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
      ></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </body>
  );
}

export default App;
