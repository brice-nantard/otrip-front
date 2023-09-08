/* eslint-disable prettier/prettier */
/* eslint-disable radix */
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './MonVoyage.scss';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchTripActivity } from '../../../actions/trip';

import MonActivite from './MonActivite/MonActivite';

const MonVoyage = () => {
  const { voyageId } = useParams();
  // stocker les activités du voyage dans le state
  const [tripActivity, setTripActivity] = useState([]);
  const [tripData, setTripData] = useState({});


  // récupération des activités du voyage depuis le localStorage
  useEffect(() => {
    axios
      .get(
        `http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trip/${voyageId}/steps`
      )
      .then((response) => {
        setTripActivity(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
    
    // récupération des données du voyage
    axios
    .get(
      `http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trip/${voyageId}`,
    )
    .then((response) => {
      // formatage des dates
      const formatStartDate = response.data[0].start_date.split("T")[0];
      const formatEndDate = response.data[0].end_date.split("T")[0];

      setTripData({
        ...response.data[0],
        start_date: formatStartDate,
        end_date: formatEndDate,
      });
      // console.log(response.data);
    })
    .catch((error) => {
      // console.log(error);
    });
  }, [voyageId]);    

  return (
    <div className="mon-voyage">
      <h1>Mon Voyage 🏖️</h1>
      <form>
        <div className="mon-voyage--form">
          <label htmlFor="destination">Votre destination</label>
          <input
            type="text"
            name="destination"
            value={tripData.destination}
          // onChange={handleInputChange}
          />
        </div>
        <div className="mon-voyage--form">
          <label htmlFor="start_date">Votre date de départ</label>
          <input
            type="date"
            name="start_date"
            value={tripData.start_date}
          // onChange={handleInputChange}
          />
        </div>
        <div className="mon-voyage--form">
          <label htmlFor="end_date">Votre date de retour</label>
          <input
            type="date"
            name="end_date"
            value={tripData.end_date}
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

export default MonVoyage;