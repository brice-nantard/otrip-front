/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';

import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import homepicture from '../../assets/home-picture.jpg'
import placeholder from '../../assets/placeholder.png';

import {useState} from 'react';

import './Home.scss';

const Home = ({ homeTripsData }) => {

  const [backgroundImage, setBackgroundImage] = useState(placeholder);
  
  return (
    <main className="home-page">
      <div className="home-page--cover">
        <img src={homepicture} alt="home-otrip" />
        <p>Regroupez vos informations et planifiez vos voyages sereinement</p>
      </div>
      
      <div className="home-page--favorites-title">
        <h1>Nos recommandations pour vous</h1>
      </div>

      <div className="home-page--favorites">
        {homeTripsData.map((homeTrip) => (
          <div className="home-page--favorites-card" style={{ backgroundImage: `url(${backgroundImage})` }} key={homeTrip.id}>
          <img src={homeTrip.picture} alt={homeTrip.destination} />
          <div className="home-page--favorites-card-infos">
            <div className="home-page--favorites-card-text">
              <h2>{homeTrip.destination}</h2>
              <p>Du {format(new Date(homeTrip.start_date), 'dd/MM/yyyy')} au {format(new Date(homeTrip.end_date), 'dd/MM/yyyy')}</p>
            </div>
            <div className="home-page--favorites-card-icons">
              <FontAwesomeIcon className="eye-icon" icon={faEye} />
            </div>
          </div>
        </div>
        ))}
      </div>
    </main>
  )
};

Home.propTypes = {
  homeTripsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      destination: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      start_date: PropTypes.instanceOf(Date).isRequired,
      end_date: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
};

export default Home;

