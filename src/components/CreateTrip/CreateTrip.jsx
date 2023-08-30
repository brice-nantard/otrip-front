/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux';

import './CreateTrip.scss';
import { changeCreateTripField, submitCreateTrip } from '../../actions/trip';

const CreateTrip = () => {
  const dispatch = useDispatch();
  const destination = useSelector((state) => state.trip.destination);
  const departureDate = useSelector((state) => state.trip.departure_date);
  const arrivalDate = useSelector((state) => state.trip.arrival_date);
  
  const handleChangeTripField = (event) => {
    const { name, value } = event.target;
    dispatch(changeCreateTripField(name, value));
  }

  const handleSubmitCreateTrip = (event) => {
    event.preventDefault();
    const newTrip = {
      destination,
      departureDate,
      arrivalDate,
    };
    dispatch(submitCreateTrip(newTrip));
  }

  return (
    <div className="create-trip">
      <div className="create-trip--cover">
        <img src="../../src/assets/leosprspctive-Zem1HSuXUuM-unsplash.jpg" alt="create-otrip" />
        <p>Planifiez votre voyage</p>
      </div>

      <form
        className="create-trip--form"
        onSubmit={handleSubmitCreateTrip}>
        <div className="create-trip--form--input">
          <label htmlFor="destination">&#127757; Quelle est votre destination ?</label>
          <input
            type="text"
            name="destination"
            value={destination}
            onChange={handleChangeTripField}
            id="destination"
            required
          />
        </div>
        <div className="create-trip--form--input">
          <label htmlFor="date">Votre date de départ</label>
          <input
            type="date"
            name="departure_date"
            value={departureDate}
            onChange={handleChangeTripField}
            id="departure_date"
            required
          />
        </div>
        <div className="create-trip--form--input">
          <label htmlFor="date">Votre date d'arrivée</label>
          <input
            type="date"
            name="arrival_date"
            value={arrivalDate}
            onChange={handleChangeTripField}
            id="arrival_date"
            required
          />
        </div>
        <button type="submit" className="create-trip--form--form--button">Créer</button>
      </form>
    </div>
  );
};

export default CreateTrip;