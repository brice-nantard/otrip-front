/* eslint-disable prettier/prettier */
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faPenToSquare, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import VoyagesPasses from './VoyagesPasses/VoyagesPasses';

import './MesVoyages.scss';

const MesVoyages = () => {
  const trips = useSelector((state) => state.trip.userTrips);

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
          {trips.map((trip) => (
            <div className="mes-voyages--a-venir-card" key={trip.id}>
            <img src={trip.picture} alt={trip.destination} />
            <div className="mes-voyages--a-venir-infos">
              <div className="mes-voyages--a-venir-text">
                <h3>{trip.destination}</h3>
                <p>{trip.start_date} au {trip.end_date}</p>
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
          ))}
        </div>
      </div>

      <VoyagesPasses />
    </div>
  );
};

export default MesVoyages;