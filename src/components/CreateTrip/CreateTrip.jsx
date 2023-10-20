/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import './CreateTrip.scss';
import { changeCreateTripField, submitCreateTrip } from '../../actions/trip';
import leosprspctive from '../../assets/leosprspctive-Zem1HSuXUuM-unsplash.jpg'

const CreateTrip = () => {
  const destination = useSelector((state) => state.trip.destination);
  const startDate = useSelector((state) => state.trip.start_date);
  const endDate = useSelector((state) => state.trip.end_date);
  const tripId = useSelector((state) => state.trip.tripId);

  const navigate = useNavigate();
  useEffect(() => {
    if(tripId) {
      navigate(`/mon-voyage/${tripId}`)
    }
  }, [tripId]);

  const dispatch = useDispatch();

  // convertir une date fr en date en
  const convertDateFormat = (date) => {
    return format(new Date(date), 'yyyy-MM-dd');
  };
  
  // changement des champs du formulaire
  const handleChangeTripField = (event) => {
    const { name, value } = event.target;
    // si le champs est une date, convertir le format avant de stocker dans le state
    if (name === 'start_date' || name === 'end_date') {
      dispatch(changeCreateTripField(name, convertDateFormat(value)));
    } else {
      dispatch(changeCreateTripField(name, value));
    }
  };

  // envoi du formulaire
  const handleSubmitCreateTrip = (event) => {
    event.preventDefault();
    dispatch(submitCreateTrip());
  };

  return (
    <div className="create-trip">
      <div className="create-trip--cover">
        <img src={leosprspctive} alt="create-otrip" />
        <p>Planifiez votre voyage</p>
      </div>

      <form
        className="create-trip--form"
        onSubmit={handleSubmitCreateTrip}
      >
        <div className="create-trip--form--input">
          <label htmlFor="destination">&#127757; Quelle est votre destination ?</label>
          <input
            type="text"
            name="destination"
            value={destination}
            onChange={handleChangeTripField}
            required
          />
        </div>
        <div className="create-trip--form--input">
          <label htmlFor="date">Votre date de départ</label>
          <input
            type="date"
            name="start_date"
            value={startDate}
            onChange={handleChangeTripField}
            required
          />
        </div>
        <div className="create-trip--form--input">
          <label htmlFor="date">Votre date d'arrivée</label>
          <input
            type="date"
            name="end_date"
            value={endDate}
            onChange={handleChangeTripField}
            required
          />
        </div>
        <button type="submit" className="create-trip--form--form--button">Créer</button>
      </form>
    </div>
  );
};

export default CreateTrip;