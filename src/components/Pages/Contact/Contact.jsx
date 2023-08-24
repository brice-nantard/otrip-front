import React from "react"

import './Contact.scss';

export default function (props) {
    return (

        <div className="container contact-form d-flex">
            <div className="contact-image">
                <img src="src/assets/logo-terre_otrip.png" alt="otriplogo" />
            </div>
            <div className="col-md-6">
                <img src="src/assets/logo-terre_otrip.png" alt="otriplogo" />
            </div>
            <div className="col-md-6 container-input">
                <form method="post" className="d-flex flex-column align-items-center">
                    <h3>Drop Us a Message</h3>
                    <div className="d-flex flex-row">
                        <div className="col-md-6 p-1">
                            <div className="form-group mb-2">
                                <input type="text" name="txtName" className="form-control" placeholder="Nom *" value="" />
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" name="email" className="form-control" placeholder="Email *" value="" />
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" name="phone" className="form-control" placeholder="Numéro de téléphone *" value="" />
                            </div>
                        </div>
                        <div className="col-md-6 p-1">
                            <div className="form-group">
                                <textarea className="form-control" name="message" placeholder="Ton message *" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="btnSubmit" className="btnContact px-5 py-2" value="Envoyer" />
                    </div>
                </form>
            </div>
        </div>
    )
}