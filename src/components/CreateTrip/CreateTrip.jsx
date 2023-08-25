/* eslint-disable prettier/prettier */
import './CreateTrip.scss';

const CreateTrip = () => {
  return (
    <div className="create-trip">
      <div className="create-trip--cover">
        <img src="../../src/assets/leosprspctive-Zem1HSuXUuM-unsplash.jpg" alt="create-otrip" />
        <p>Planifiez votre voyage</p>
      </div>

      <form className="create-trip--form">
        <div className="create-trip--form--input">
          <label htmlFor="destination">&#127757; Quelle est votre destination ?</label>
          <input
            type="text"
            name="destination"
            id="destination"
            required
          />
        </div>
        <div className="create-trip--form--input">
          <label htmlFor="date">Votre date de départ</label>
          <input
            type="date"
            name="departure_date"
            id="departure_date"
            required
          />
        </div>
        <div className="create-trip--form--input">
          <label htmlFor="date">Votre date d'arrivée</label>
          <input
            type="date"
            name="arrival_date"
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