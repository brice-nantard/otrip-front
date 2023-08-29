/* eslint-disable prettier/prettier */
// changement de l'un des champs du formulaire de login
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
// action déclenchée lorsque le formulaire de login est envoyé
// cette action est interceptée dans le middleware pour gérer l'appel à l'API de connexion
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// en cas de succès de connexion, les infos de l'utilisateur sont enregistrée (token et pseudo)
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';

export const changeLoginField = (name, newValue) => ({
  type: CHANGE_LOGIN_FIELD,
  name,
  newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const handleSuccessfulLogin = (pseudo, token) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  pseudo,
  token,
});