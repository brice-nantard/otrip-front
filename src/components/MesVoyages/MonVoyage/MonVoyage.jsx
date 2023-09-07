/* eslint-disable prettier/prettier */
/* eslint-disable radix */
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './MonVoyage.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTripActivity } from '../../../actions/trip';

import MonActivite from './MonActivite/MonActivite';

const MonVoyage = () => {
  const dispatch = useDispatch();
  const { voyageId } = useParams();

  // stocker les activités du voyage dans le state
  const [tripActivity, setTripActivity] = useState([]);

  // récupération des activités du voyage depuis le localStorage
  useEffect(() =>  {
    const storedTripActivity = JSON.parse(localStorage.getItem('tripActivity'));
    if (storedTripActivity) {
      setTripActivity(storedTripActivity);
    }
    dispatch(fetchTripActivity(voyageId));
  }, [dispatch, voyageId]);

  return (
    <div className="mon-voyage">
      <h1>Mon Voyage 🏖️</h1>
      <form>
        <div className="mon-voyage--form">
          <label htmlFor="destination">Votre destination</label>
          <input
            type="text"
            name="destination"
            // value={formData.destination}
            // onChange={handleInputChange}
          />
        </div>
        <div className="mon-voyage--form">
          <label htmlFor="start_date">Votre date de départ</label>
          <input
            type="date"
            name="start_date"
            // value={formData.start_date}
            // onChange={handleInputChange}
          />
        </div>
        <div className="mon-voyage--form">
          <label htmlFor="end_date">Votre date de retour</label>
          <input
            type="date"
            name="end_date"
            // value={formData.end_date}
            // onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enregistrer les modifications</button>
      </form>
      <div className="mon-voyage--activite">
        <MonActivite tripActivity={tripActivity} />
      </div>
    </div>
  )
};

// MonVoyage.propTypes = {
//   userTripsData: PropTypes.shape({
//     trips: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         destination: PropTypes.string.isRequired,
//         start_date: PropTypes.string.isRequired,
//         end_date: PropTypes.string.isRequired,
//         picture: PropTypes.string,
//     })
//   ).isRequired,
// }).isRequired,
// };

export default MonVoyage;