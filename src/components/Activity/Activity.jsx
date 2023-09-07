/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { useState } from 'react';
import { format } from 'date-fns';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';


import './Activity.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeCreateActivityField, submitCreateActivity } from '../../actions/trip';

const Activity = () => {
  const { tripVoyageId } = useParams();

  // const { tripVoyageId } = props;
  // console.log(tripVoyageId);

  const dispatch = useDispatch();

  // liste des options des listes déroulantes
  const transportOptions = [
    { id: 1, label: "Voiture"},
    { id: 2, label: "Train"},
    { id: 3, label: "Avion"},
    { id: 4, label: "Bateau"},
    { id: 5, label: "Aucun"},
  ];
  const accomodationOptions = [
    { id: 1, label: "Hôtel"},
    { id: 2, label: "Location"},
    { id: 3, label: "Camping"},
    { id: 4, label: "Aucun"},
  ]

  // convertir une date fr en date en
  const convertDateFormat = (date) => {
    return format(new Date(date), 'yyyy-MM-dd');
  };

  // state des fichiers sélectionnés avec un tableau vide
  const [selectedPicture, setselectedPicture] = useState([]);

  // state des champs de l'activité
  const lieu = useSelector((state) => state.trip.place);
  const startDate = useSelector((state) => state.trip.start_date);
  const endDate = useSelector((state) => state.trip.end_start);
  const transport = useSelector((state) => state.trip.transport);
  const hebergement = useSelector((state) => state.trip.accomodation);
  const description = useSelector((state) => state.trip.description);

  const handleFileSelect = (acceptedPictures) => {
    if (acceptedPictures && acceptedPictures.length > 0) {
      if (selectedPicture.length < 3) {
        setselectedPicture((prevFiles) => [...prevFiles, acceptedPictures[0]]);
      }
    }
  };

  const handleRemoveImage = (index) => {
    setselectedPicture((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // changement des champs du formulaire
  const handleChangeInputValue = (event) => {
    const { name, value } = event.target;
    // si le champs est une date, convertir le format avant de stocker dans le state
    if (name === 'start_date' || name === 'end_start') {
      dispatch(changeCreateActivityField(name, convertDateFormat(value)));
    } else {
      dispatch(changeCreateActivityField(name, value));
    }
  }

  // envoi du formulaire à l'API et dans la vue
  const handleSubmitCreateTrip = (event) => {
    event.preventDefault();
    dispatch(submitCreateActivity(tripVoyageId));
  };
  
  return (
    <div className="activite">
      <h1>Gestion des activités</h1>
      <form
        method="POST"
        onSubmit={handleSubmitCreateTrip}
      > 
        <div className="form-lieu">
          <label htmlFor="name">Lieu / Activité</label>
          <input 
            type="text"
            className="form-control"
            name="place"
            value={lieu}
            onChange={handleChangeInputValue}
          />
        </div>
        <div className="form-date-debut">
          <label htmlFor="date">Du</label>
          <input
            type="date"
            name="start_date"
            value={startDate}
            onChange={handleChangeInputValue}
            required
          />
        </div>
        <div className="form-date-fin">
          <label htmlFor="date">Au</label>
          <input
            type="date"
            name="end_start"
            value={endDate}
            onChange={handleChangeInputValue}
            required
          />
        </div>
        <div className="form-transport">
          <label htmlFor="name">Transport</label>
          <select type="text" className="form-control" name="transport" value={transport} onChange={handleChangeInputValue}>
            {transportOptions.map((transportOption) => (
              <option key={transportOption.id} value={transportOption.id}>{transportOption.label}</option>
            ))}
          </select>
        </div>
        <div className="form-hebergement">
          <label htmlFor="name">Hébergement</label>
          <select type="text" className="form-control" name="accomodation" value={hebergement} onChange={handleChangeInputValue}>
            {accomodationOptions.map((accomodationOption) => (
              <option key={accomodationOption.id} value={accomodationOption.id}>{accomodationOption.label}</option>
            ))}
          </select>
        </div>
        <div className="form-description">
          <label htmlFor="name">Description</label>
          <textarea
            type="text"
            className="form-control"
            name="description"
            value={description}
            onChange={handleChangeInputValue}
          />
        </div>

        <div className="add-picture">
        <Dropzone onDrop={handleFileSelect} accept="image/png, image/jpeg">
            {({ getRootProps, getInputProps }) => (
              <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Partagez vos photos</p>
                <FontAwesomeIcon className="add-picture-icon" icon={faCirclePlus} />
              </div>
            )}
          </Dropzone>
          <div className="picture-preview">
            {selectedPicture.map((file, index) => (
              <div key={index} className="picture-container">
                <img src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} />
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => handleRemoveImage(index)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <button type="submit" className="save-btn">Enregistrer</button>
      </form>
    </div>
  );
};

// Activity.propTypes = {
//   tripVoyageId: PropTypes.number.isRequired,
// };

export default Activity;