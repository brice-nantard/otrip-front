/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faPenToSquare, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useDispatch } from'react-redux';

import VoyagesPasses from './VoyagesPasses/VoyagesPasses';

import './MesVoyages.scss';
import { deleteUserTrip } from '../../actions/trip';

const MesVoyages = ({ userTripsData }) => {  
  // message de confirmation de suppression
  const [confirmationDelete, setConfirmationDelete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (confirmationDelete){
      const timeout = setTimeout(() => {
        setConfirmationDelete(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [confirmationDelete]);
  
  if(!userTripsData.trips) {
    return '';
  }

  // si pas de voyages trouvés, afficher le message d'erreur
  const noTripsFound = userTripsData.trips.length === 0;

  // fonction pour supprimer un voyage
  const handleDeleteTrip = (tripId) => {
    if(window.confirm('Voulez-vous vraiment supprimer ce voyage?')){
      dispatch(deleteUserTrip(tripId));
      setConfirmationDelete(true);
    }
  };

  if (noTripsFound) {
    return (
      <div className="mes-voyages">
        <h1>Mes Voyages</h1>
        <div className="mes-voyages--a-venir">
          <h2 className="mes-voyages--a-venir-title">
            Vous n'avez pas de voyage à venir
            <NavLink to="/creer-un-voyage">
              <span>
              <FontAwesomeIcon className="add-trip-btn" icon={faCirclePlus} />
              Planifier un nouveau voyage
              </span>
            </NavLink>
          </h2>
        </div>
        <VoyagesPasses />
      </div>
    )
  }

  return (
    <div className="mes-voyages">
      <h1>Mes Voyages
        {confirmationDelete &&(
          <span className="delete-msg">
            Votre voyage a été supprimé avec succès !
          </span>
        )}
      </h1>
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
          {userTripsData.trips.map((userTrip) => (
            <div className="mes-voyages--a-venir-card" key={userTrip.id}>
              {userTrip.picture && <img src={userTrip.picture} alt={userTrip.destination} />}
              <div className="mes-voyages--a-venir-infos">
                <div className="mes-voyages--a-venir-text">
                  <h3>
                    <NavLink to={`/mon-voyage/${userTrip.id}`}>
                      {userTrip.destination}
                    </NavLink>
                  </h3>
                  <p>{format(new Date(userTrip.start_date), 'dd/MM/yyyy')} au {format(new Date(userTrip.end_date), 'dd/MM/yyyy')}</p>
                </div>
                <div className="mes-voyages--a-venir-icons">
                  <div className="mes-voyages--a-venir-add">
                    <FontAwesomeIcon className="add-icon" icon={faPlus} />
                    <NavLink to={`/gestion-activite/${userTrip.id}`}>
                      <p>Ajouter/voir<br/>les activités</p>
                    </NavLink>
                  </div>
                  <FontAwesomeIcon
                    className="delete-icon"
                    icon={faTrashCan}
                    onClick={() => {handleDeleteTrip(userTrip.id)}}
                  />
                  <NavLink to={`/mon-voyage/${userTrip.id}`}>
                    <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
                  </NavLink>
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
  userTripsData: PropTypes.shape({
    trips: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        destination: PropTypes.string.isRequired,
        start_date: PropTypes.string.isRequired,
        end_date: PropTypes.string.isRequired,
        picture: PropTypes.string,
    })
  ).isRequired,
}).isRequired,
};

export default MesVoyages;