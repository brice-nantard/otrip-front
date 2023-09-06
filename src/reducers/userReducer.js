/* eslint-disable prettier/prettier */
/* eslint-disable no-else-return */
import {
  CHANGE_CREATE_ACCOUNT_FIELD,
  CHANGE_LOGIN_FIELD,
  HANDLE_LOGOUT,
  HANDLE_SUCCESSFUL_CREATE_ACCOUNT,
  HANDLE_SUCCESSFUL_LOGIN
} from "../actions/user";

const EMAIL_FIELD = 'email';
const PASSWORD_FIELD = 'password';

export const initialState = {
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
};

const userReducer = (state = initialState, action = {}) => {
  const { type, name, newValue, } = action;

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
        }
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
        logged: false,
        token: '',
        username: '',
        password: '',
      };
    
    case CHANGE_CREATE_ACCOUNT_FIELD:
      if (name === 'alias'){
        return {
          ...state,
          alias: newValue,
        };
      } else if (name === 'email'){
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
        logged: true,
        // sécurité : on efface les identifiants dès qu'on en a plus besoin
        alias: '',
        email: '',
        password: '',
      }
    default:
      return state;
  }
};

export default userReducer;