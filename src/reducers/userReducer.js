/* eslint-disable prettier/prettier */
/* eslint-disable no-else-return */
import {
  CHANGE_CONTACT_FIELD,
  CHANGE_CREATE_ACCOUNT_FIELD,
  CHANGE_LOGIN_FIELD,
  HANDLE_LOGOUT,
  HANDLE_SUCCESSFUL_CREATE_ACCOUNT,
  HANDLE_SUCCESSFUL_LOGIN,
  HANDLE_SUCCESSFUL_SEND_MESSAGE,
} from '../actions/user';

const EMAIL_FIELD = 'email';
const PASSWORD_FIELD = 'password';

export const initialState = {
  // indique si les voyages sont chargés
  isTripsLoaded: false,
  logged: false,
  // email de l'utilisateur
  username: '',
  // contenu du champ mot de passe
  password: '',
  // token JWT (quand l'utilisateur est connecté)
  token: '',
  // alias (pseudo) de l'utilisateur
  alias: '',
  // email de l'utilisateur
  email: '',
  name: '',
  telephone: '',
  message: '',
};

const userReducer = (state = initialState, action = {}) => {
  const { type, name, newValue } = action;

  switch (type) {
    case CHANGE_LOGIN_FIELD:
      if (name === EMAIL_FIELD) {
        return {
          ...state,
          username: newValue,
        };
      } else if (name === PASSWORD_FIELD) {
        return {
          ...state,
          password: newValue,
        };
      }
      return state;

    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        logged: true,
        // sécurité : on efface les identifiants dès qu'on en a plus besoin
        token: '',
        username: '',
        password: '',
      };

    case HANDLE_LOGOUT:
      return {
        ...initialState,
        isTripsLoaded: true,
        // logged: false,
        // token: '',
        // username: '',
        // password: '',
      };

    case CHANGE_CREATE_ACCOUNT_FIELD:
      if (name === 'alias') {
        return {
          ...state,
          alias: newValue,
        };
      } else if (name === 'email') {
        return {
          ...state,
          email: newValue,
        };
      } else if (name === 'password') {
        return {
          ...state,
          password: newValue,
        };
      }
      return state;

    case HANDLE_SUCCESSFUL_CREATE_ACCOUNT:
      return {
        ...state,
        // logged: true,
        // sécurité : on efface les identifiants dès qu'on en a plus besoin
        alias: '',
        email: '',
        password: '',
      };

    case CHANGE_CONTACT_FIELD:
      if (name === 'name') {
        return {
          ...state,
          name: newValue,
        };
      } else if (name === 'email') {
        return {
          ...state,
          email: newValue,
        };
      } else if (name === 'telephone') {
        return {
          ...state,
          telephone: newValue,
        };
      } else if (name === 'message') {
        return {
          ...state,
          message: newValue,
        };
      }
      return state;

    case HANDLE_SUCCESSFUL_SEND_MESSAGE:
      return {
        ...state,
        name: '',
        email: '',
        telephone: '',
        message: '',
      };
    default:
      return state;
  }
};

export default userReducer;
