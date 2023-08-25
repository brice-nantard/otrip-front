/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';


import './Activity.scss';

const Activity = () => {
  // state des fichiers sélectionnés avec un tableau vide
  const [selectedPicture, setselectedPicture] = useState([]);

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

  return (
    <div className="activite">
      <h1>Gestion des activités</h1>

      <form method="POST" action="submit"> 
        <div className="form-lieu">
          <label htmlFor="name">Lieu</label>
          <input type="text" className="form-control" id="lieu" />
        </div>
        <div className="form-date-debut">
          <label htmlFor="date">Du</label>
          <input type="date" name="start_date" id="start_date" required />
        </div>
        <div className="form-date-fin">
          <label htmlFor="date">Au</label>
          <input type="date" name="finish_date" id="finish_date" required />
        </div>
        <div className="form-transport">
          <label htmlFor="name">Transport</label>
          <select type="text" className="form-control" id="name">
            <option value="voiture">Voiture</option>
            <option value="train">Train</option>
            <option value="avion">Avion</option>
          </select>
        </div>
        <div className="form-hebergement">
          <label htmlFor="name">Hébergement</label>
          <select type="text" className="form-control" id="name">
            <option value="hotel">Hôtel</option>
            <option value="Location">Location</option>
            <option value="camping">Camping</option>
          </select>
        </div>
        <div className="form-description">
          <label htmlFor="name">Description</label>
          <textarea type="text" className="form-control" id="description" />
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

export default Activity;