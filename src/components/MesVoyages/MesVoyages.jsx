/* eslint-disable prettier/prettier */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faPenToSquare, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import VoyagesPasses from './VoyagesPasses/VoyagesPasses';

import './MesVoyages.scss';

const MesVoyages = () => {
  return (
    <div className="mes-voyages">
      <h1>Mes Voyages</h1>

      <div className="mes-voyages--a-venir">
        <h2 className="mes-voyages--a-venir-title">
          Mes voyages à venir
          <span>
          <FontAwesomeIcon className="add-trip-btn" icon={faCirclePlus} />
          Planifier un nouveau voyage
          </span>
        </h2>

        <div className="mes-voyages--a-venir-list">
          <div className="mes-voyages--a-venir-card">
            <img src="../../src/assets/diane-picchiottino-9Jcd1J-O060-unsplash.jpg" alt="lille" />
            <div className="mes-voyages--a-venir-infos">
              <div className="mes-voyages--a-venir-text">
                <h3>Lille</h3>
                <p>Du 01/09/2023 au 03/09/2023</p>
              </div>
              <div className="mes-voyages--a-venir-icons">
                <div className="mes-voyages--a-venir-add">
                  <FontAwesomeIcon className="add-icon" icon={faPlus} />
                  <p>Ajouter/voir<br/>les activités</p>
                </div>
                <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
              </div>
            </div>
          </div>

          <div className="mes-voyages--a-venir-card">
            <img src="../../src/assets/stefan-k-8z-fvcKW0gs-unsplash.jpg" alt="mont-st-michel" />
            <div className="mes-voyages--a-venir-infos">
              <div className="mes-voyages--a-venir-text">
                <h3>Mont Saint-Michel</h3>
                <p>Du 11/09/2023 au 17/09/2023</p>
              </div>
              <div className="mes-voyages--a-venir-icons">
                <div className="mes-voyages--a-venir-add">
                  <FontAwesomeIcon className="add-icon" icon={faPlus} />
                  <p>Ajouter/voir<br/>les activités</p>
                </div>
                <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <VoyagesPasses />
    </div>
  );
};

export default MesVoyages;