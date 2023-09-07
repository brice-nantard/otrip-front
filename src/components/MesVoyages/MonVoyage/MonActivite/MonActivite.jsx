/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types';
import './MonActivite.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { format } from 'date-fns';

const MonActivite = ({ tripActivity }) => {
  return (
    <div className="mon-activite">
      <h1>Mes activités</h1>
      <ul>
        {tripActivity.steps && tripActivity.steps.map((activity) => (
        <li key={activity.id} className="activity-card">
          <NavLink to="" className="activity-picture">
            {activity.picture && <img src={activity.picture} alt={activity.place} />}
          </NavLink>
            <article className="activity-details">
              <header>
                <p className="activity-dates">{format(new Date(activity.start_date), 'dd/MM/yyyy')} au {format(new Date(activity.end_start), 'dd/MM/yyyy')}</p>
                <div className="activity-place">
                  <h3>{activity.place}</h3>
                </div>
                <p className="activity-description">{activity.description}</p>
              </header>
              <div className="activity-comodites">
                <div className="transport-type">{activity.transport}</div>
                <div className="accomodation-type">{activity.accomodation}</div>
              </div>
              <div className="activity-icons">
              <NavLink to="">
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
                <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
              </NavLink>
              </div>
            </article>
        </li>
        ))}
      </ul>
    </div>
  );
};

MonActivite.propTypes = {
  tripActivity: PropTypes.shape({
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        destination: PropTypes.string.isRequired,
        start_date: PropTypes.string.isRequired,
        end_start: PropTypes.string.isRequired,
        transport: PropTypes.number.isRequired,
        accomodation: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MonActivite;