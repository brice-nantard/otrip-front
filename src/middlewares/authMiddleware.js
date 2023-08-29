/* eslint-disable prettier/prettier */
import axios from 'axios';
import { SUBMIT_LOGIN, handleSuccessfulLogin } from "../actions/user";

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          {
            email: store.getState().user.email,
            password: store.getState().user.password,
          }
        )
        .then((response) => {
          // console.log(response);
          // on veut enregistrer les infos de l'utilisateur dans le state
          store.dispatch(
            handleSuccessfulLogin(response.data.pseudo, response.data.token)
          );
        })
        .catch((error) => {
          console.log(error);

          // TODO afficher un message à l'utilisateur : prévoir un composant pour
          // le message, avec un affichage conditionnel. Il faudrait ajouter un
          // emplacement dans le state, booléen isAuthError par exemple.
        });
      break;
    default:
  }
  next(action);
};

export default authMiddleware;