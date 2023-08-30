/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faPenToSquare, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import VoyagesPasses from './VoyagesPasses/VoyagesPasses';

import './MesVoyages.scss';

const MesVoyages = ({ tripData }) => {
  // récupérer l'id de l'utilisateur connecté
  const currentUserId = localStorage.getItem('id');
  // filtrer les voyages liés à l'utilisateur connecté
  const tripsOfCurrentUser = tripData.filter(trip => trip.user_id === currentUserId);

  return (
    <div className="mes-voyages">
      <h1>Mes Voyages</h1>
      <div className="mes-voyages--a-venir">
        <h2 className="mes-voyages--a-venir-title">
          Mes voyages à venir
          <NavLink to="/creer-un-voyage">
            <span>
            <FontAwesomeIcon className="add-trip-btn" icon={faCirclePlus} />
            Planifier un nouveau voyage
            </span>
          </NavLink>
          
        </h2>
        <div className="mes-voyages--a-venir-list">
          {tripsOfCurrentUser.map((trip) => (
            <div className="mes-voyages--a-venir-card" key={trip.id}>
              {trip.picture && <img src={trip.picture} alt={trip.destination} />}
              <div className="mes-voyages--a-venir-infos">
                <div className="mes-voyages--a-venir-text">
                  <h3>{trip.destination}</h3>
                  <p>{format(new Date(trip.start_date), 'dd/MM/yyyy')} au {format(new Date(trip.end_date), 'dd/MM/yyyy')}</p>
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

MesVoyages.propTypes = {
  tripData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
      picture: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default MesVoyages;