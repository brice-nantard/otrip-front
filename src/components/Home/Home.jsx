/* eslint-disable prettier/prettier */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

import './Home.scss';

const Home = () => {
  return (
    <main className="home-page">

      <div className="home-page--cover">
        <img src="../../src/assets/home-picture.jpg" alt="home-otrip" />
        <p>Regroupez vos informations et planifiez vos voyages sereinement</p>
      </div>
      
      <div className="home-page--favorites-title">
        <h1>Nos recommandations pour vous</h1>
      </div>

      <div className="home-page--favorites">
      <div className="home-page--favorites-card">
          <img src="../../src/assets/vered-caspi-a7X5Ut1ArPQ-unsplash.jpg" alt="alsace" />
          <div className="home-page--favorites-card-infos">
            <div className="home-page--favorites-card-text">
              <h2>L'Alsace</h2>
              <p>Du 11/08/2023 au 15/08/2023</p>
            </div>
            <div className="home-page--favorites-card-icons">
              <FontAwesomeIcon className="eye-icon" icon={faEye} />
            </div>
          </div>
        </div>

        <div className="home-page--favorites-card">
          <img src="../../src/assets/mihai-lupascu-_M-VWppUy5w-unsplash.jpg" alt="verdon" />
          <div className="home-page--favorites-card-infos">
            <div className="home-page--favorites-card-text">
              <h2>Les Gorges du Verdon</h2>
              <p>Du 13/08/2023 au 21/08/2023</p>
            </div>
            <div className="home-page--favorites-card-icons">
              <FontAwesomeIcon className="eye-icon" icon={faEye} />
            </div>
          </div>
        </div>
        
        <div className="home-page--favorites-card">
          <img src="../../src/assets/rebe-adelaida-zunQwMy5B6M-unsplash.jpg" alt="venise" />
          <div className="home-page--favorites-card-infos">
            <div className="home-page--favorites-card-text">
              <h2>Venise</h2>
              <p>Du 20/09/2023 au 30/09/2023</p>
            </div>
            <div className="home-page--favorites-card-icons">
              <FontAwesomeIcon className="eye-icon" icon={faEye} />
            </div>
          </div>
        </div>

        <div className="home-page--favorites-card">
          <img src="../../src/assets/jonne-makikyro-knbve9xxH4U-unsplash.jpg" alt="amsterdam" />
          <div className="home-page--favorites-card-infos">
            <div className="home-page--favorites-card-text">
              <h2>Amsterdam</h2>
              <p>Du 07/10/2023 au 14/10/2023</p>
            </div>
            <div className="home-page--favorites-card-icons">
              <FontAwesomeIcon className="eye-icon" icon={faEye} />
            </div>
          </div>
        </div>

        <div className="home-page--favorites-card">
          <img src="../../src/assets/markus-winkler-N4QFdo_1FJQ-unsplash.jpg" alt="seoul" />
          <div className="home-page--favorites-card-infos">
            <div className="home-page--favorites-card-text">
              <h2>Séoul</h2>
              <p>Du 01/09/2023 au 22/09/2023</p>
            </div>
            <div className="home-page--favorites-card-icons">
              <FontAwesomeIcon className="eye-icon" icon={faEye} />
            </div>
          </div>
        </div>

      </div>
    </main>
  )
};

export default Home;

