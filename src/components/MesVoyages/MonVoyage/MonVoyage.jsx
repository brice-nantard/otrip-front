/* eslint-disable prettier/prettier */
/* eslint-disable radix */
// import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import './MonVoyage.scss';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchTripActivity } from '../../../actions/trip';

import MonActivite from './MonActivite/MonActivite';

const MonVoyage = () => {
  const { voyageId } = useParams();
  // stocker les activités du voyage dans le state
  const [tripActivity, setTripActivity] = useState([]);
  const [tripData, setTripData] = useState({
    id: voyageId,
    destination: '',
    picture: '',
    start_date: '',
    end_date: '',
  });


  // récupération des activités du voyage
  useEffect(() => {
    axios
      .get(
        `http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trip/${voyageId}/steps`,
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
      const data = response.data[0];
      data.start_date = formatStartDate;
      data.end_date = formatEndDate;
      delete data.user;
      setTripData(data);
      // console.log(response.data);
    })
    .catch((error) => {
      // console.log(error);
    });
  }, [voyageId]);
  
  // convertir une date fr en date en
  const convertDateFormat = (date) => {
    return format(new Date(date), 'yyyy-MM-dd');
  };

  // modification des champs input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'start_date') {
      setTripData({
      ...tripData,
        start_date: convertDateFormat(value),
      });
    } else if (name === 'end_date') {
      setTripData({
        ...tripData,
        end_date: convertDateFormat(value),
      })
    } else {
      setTripData({
        ...tripData,
        [name]: value
      });
    }
  };

  // modification des données d'un voyage
  const handleSubmitModification = (event) => {
    event.preventDefault();
    axios
    .put(
      `http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trip/${voyageId}`,
      tripData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    )
    .then((response) => {
      // console.log(response.data);
      alert("Voyage modifié avec succès!");
      window.location.assign('/mes-voyages');
    })
    .catch((error) => {
      // console.log(error);
    })
  };

  return (
    <div className="mon-voyage">
      <h1>Mon Voyage 🏖️</h1>
      <form onSubmit={handleSubmitModification}>
        <div className="mon-voyage--form">
          <label htmlFor="destination">Votre destination</label>
          <input
            type="text"
            name="destination"
            value={tripData.destination}
            onChange={handleInputChange}
          />
        </div>
        <div className="mon-voyage--form">
          <label htmlFor="start_date">Votre date de départ</label>
          <input
            type="date"
            name="start_date"
            value={tripData.start_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="mon-voyage--form">
          <label htmlFor="end_date">Votre date de retour</label>
          <input
            type="date"
            name="end_date"
            value={tripData.end_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="mon-voyage--btns">
          <button className="edit-btn" type="submit">Enregistrer les modifications</button>
          <NavLink to={`/gestion-activite/${voyageId}`}>
            <button className="add-btn" type="button">Ajouter une activité</button>
          </NavLink>
        </div>
      </form>
      <div className="mon-voyage--activite">
        <MonActivite tripActivity={tripActivity} />
      </div>
    </div>
  )
};

export default MonVoyage;