/* eslint-disable prettier/prettier */
/* eslint-disable no-else-return */
import { CHANGE_LOGIN_FIELD, HANDLE_SUCCESSFUL_LOGIN } from "../actions/user";

const EMAIL_FIELD = 'email';
const PASSWORD_FIELD = 'password';

export const initialState = {
  logged: false,
  // contenu du champ email
  email: '',
  // contenu du champ mot de passe
  password: '',
  // pseudo de l'utilisateur (quand il est connecté)
  pseudo: '',
  // token JWT (quand l'utilisateur est connecté)
  token: '',
};

const userReducer = (state = initialState, action = {}) => {
  const { type, name, newValue, } = action;

  switch (type) {
    case CHANGE_LOGIN_FIELD:
      if (name === EMAIL_FIELD) {
        return {
        ...state,
          email: newValue,
        };
      } else if (name === PASSWORD_FIELD) {
        return {
          ...state,
          password: newValue,
        }
      }
      return state;

    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        logged: true,
        pseudo: action.pseudo,
        token: action.token,
        // sécurité : on efface les identifiants dès qu'on en a plus besoin
        email: '',
        password: '',
      };

    default:
      return state;
  }
};

export default userReducer;