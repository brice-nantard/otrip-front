/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux';

import './ContactForm.scss';
import { changeContactField, submitMessage } from '../../actions/user';

const ContactForm = () => {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const telephone = useSelector((state) => state.user.telephone);
  const message = useSelector((state) => state.user.message);

  // changement des champs du formulaire
  const handleChangeContactFields = (event) => {
    const { name, value} = event.target;
    dispatch(changeContactField(name, value));
  };

  // envoi du formulaire
  const handleSubmitContactForm = (event) => {
    event.preventDefault();
    dispatch(submitMessage())
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Nous contacter</h1>
      </div>

      <div className="contact-form">
        <form method="POST" onSubmit={handleSubmitContactForm}>
          <label htmlFor="nom">Votre nom</label>
          <input
            name="name"
            type="text"
            onChange={handleChangeContactFields}
            value={userName}
          />
          <label htmlFor="email">Votre email</label>
          <input
            name="email"
            type="email"
            onChange={handleChangeContactFields}
            value={email}
          />
          <label htmlFor="email">Votre n° de téléphone</label>
          <input
            name="telephone"
            type="phone"
            onChange={handleChangeContactFields}
            value={telephone}
          />
          <label htmlFor="email">Posez-nous votre question</label>
          <textarea
            name="message"
            type="textarea"
            onChange={handleChangeContactFields}
            value={message}
          />
          <button type="button" className="contact-form-btn">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
};

export default ContactForm;