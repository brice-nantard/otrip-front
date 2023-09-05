/* eslint-disable prettier/prettier */
import Field from './Field/Field';

import './ContactForm.scss';

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Nous contacter</h1>
      </div>
      <div className="contact-form">
        <form>
          <Field
            label="Nom"
            name="name"
            type="text"
            // onChange={}
            // value={}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            // onChange={}
            // value={}
          />
          <Field
            label="Telephone"
            name="phone"
            // onChange={}
            // value={}
          />
          <Field
            label="Votre message"
            name="message-content"
            type="text"
            // onChange={}
            // value={}
          />
          <button type="submit" className="contact-form-btn">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
};

export default ContactForm;