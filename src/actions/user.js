/* eslint-disable prettier/prettier */
// changement de l'un des champs du formulaire de login
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
// action déclenchée lorsque le formulaire de login est envoyé
// cette action est interceptée dans le middleware pour gérer l'appel à l'API de connexion
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// en cas de succès de connexion, les infos de l'utilisateur sont enregistrée (token et pseudo)
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
// action déclenchée à la déconnexion de l'utilisateur (vide le state)
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';
// action pour la gestion des champs du formulaire de création d'un compte
export const CHANGE_CREATE_ACCOUNT_FIELD = 'CHANGE_CREATE_ACCOUNT_FIELD';

export const SUBMIT_CREATE_ACCOUNT = 'SUBMIT_CREATE_ACCOUNT';

export const HANDLE_SUCCESSFUL_CREATE_ACCOUNT = 'HANDLE_SUCCESSFUL_CREATE_ACCOUNT';

export const CHANGE_CONTACT_FIELD = 'CHANGE_CONTACT_FIELD';

export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';

export const HANDLE_SUCCESSFUL_SEND_MESSAGE = 'HANDLE_SUCCESSFUL_SEND_MESSAGE';

export const changeLoginField = (name, newValue) => ({
  type: CHANGE_LOGIN_FIELD,
  name,
  newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const handleSuccessfulLogin = (username, token) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  username,
  token,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});

export const changeCreateAccountField = (name, newValue) => ({
  type: CHANGE_CREATE_ACCOUNT_FIELD,
  name,
  newValue,
});

export const submitCreateAccount = () => ({
  type: SUBMIT_CREATE_ACCOUNT,
});

export const handleSuccessfulCreateAccount = (alias, email, password) => ({
  type: HANDLE_SUCCESSFUL_CREATE_ACCOUNT,
  alias,
  email,
  password,
});

export const changeContactField = (name, newValue) => ({
  type: CHANGE_CONTACT_FIELD,
  name,
  newValue,
});

export const submitMessage = () => ({
  type: SUBMIT_MESSAGE,
});

export const handleSuccessfulSendMessage = (name, email, telephone, message) => ({
  type: HANDLE_SUCCESSFUL_SEND_MESSAGE,
  name,
  email,
  telephone,
  message,
});