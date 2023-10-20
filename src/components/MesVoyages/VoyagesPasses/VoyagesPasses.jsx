/* eslint-disable prettier/prettier */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './VoyagesPasses.scss';
import taniamousinho from '../../../assets/tania-mousinho-vF0l0bqLRKY-unsplash.jpg';

const VoyagesPasses = () => {
  return (
    <div className="mes-voyages--passes">
        <h2 className="mes-voyages--passes-title">Mes voyages passés</h2>

        <div className="mes-voyages--passes-list">
          <div className="mes-voyages--passes-card">
            <img src={taniamousinho} alt="lille" />
            <div className="mes-voyages--passes-infos">
              <div className="mes-voyages--passes-text">
                <h3>Santorin, Grèce</h3>
                <p>Du 17/04/2023 au 23/04/2023</p>
              </div>
              <div className="mes-voyages--passes-icons">
                <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
                <FontAwesomeIcon className="eye-icon" icon={faEye} />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
};

export default VoyagesPasses;