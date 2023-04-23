class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResult(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка:${response.status}`);
  }

  //  getting  cards
  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((response) => this._checkResult(response));
  }

  // postting cards
  postCards(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: `${data.name}`,
        link: `${data.link}`,
      }),
    }).then((response) => this._checkResult(response));
  }
  // delete card
  removeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((response) => this._checkResult(response));
  }

  // like card
  likeCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`,
      {
        method: "PUT",
        headers: this._headers,
      }
    ).then((response) => this._checkResult(response));
  }

  // delete like
  unlikeCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    ).then((response) => this._checkResult(response));
  }

  getUserInfo() {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/users/me`, {
      headers: this._headers,
    }).then((response) => this._checkResult(response));
  }

  editUserInfo(data) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((response) => this._checkResult(response));
  }

  editAvatar(data) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-62/users/me/avatar`,
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatarlink,
        }),
      }
    ).then((response) => this._checkResult(response));
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    authorization: "3506c88d-b52d-4252-882d-40c36d7fbe63",
    "Content-Type": "application/json",
  },
});

export default api;
