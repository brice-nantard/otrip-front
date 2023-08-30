/* eslint-disable prettier/prettier */
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { handleSuccessfulLogin } from '../../actions/user';
import { fetchUserTrips, fetchHomeTrips } from '../../actions/trip';

import Header from '../Header/Header';
import Home from '../Home/Home';
import LoginForm from '../LoginForm/LoginForm';
import CreateAccount from '../CreateAccount/CreateAccount';
import MesVoyages from '../MesVoyages/MesVoyages';
import CreateTrip from '../CreateTrip/CreateTrip';
import Activity from '../Activity/Activity';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import UserAccount from '../UserAccount/UserAccount';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  // stocker les voyages de l'utilisateur dans le state
  const [tripData, setTripData] = useState([]);

  // stocker les voyages de la Home dans le state
  const [homeTripsData, setHomeTripsData] = useState([]);

  useEffect(() =>  {
    // récupération des identifiants de l'utilisateur depuis le localStorage
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    // si les deux valeurs sont présentes dans le localStorage, la reconnexion se fera automatiquement au refresh
    if (storedToken && storedUsername) {
      dispatch(handleSuccessfulLogin(storedToken, storedUsername));
    }

    // récupération des voyages de l'utilisateur connecté de la Home depuis le localStorage
    const storedTrips = JSON.parse(localStorage.getItem('trips'));
    if (storedTrips) {
      setTripData(storedTrips);
    }

    // récupération des voyages de la Home depuis le localStorage
    const storedHomeTrips = JSON.parse(localStorage.getItem('homeTrips'));
    if (storedHomeTrips) {
      setHomeTripsData(storedHomeTrips);
    }

    dispatch(fetchUserTrips());
    dispatch(fetchHomeTrips());
    
  }, [dispatch]);


  return (
    <div>
      <Header /> 
        <Routes>
          <Route path="/" element={<Home homeTripsData={homeTripsData}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/se-connecter" element={<LoginForm />} />
          <Route path="/creer-un-compte" element={<CreateAccount />} />
          <Route path="/mon-compte" element={<UserAccount />} />
          <Route path="/mes-voyages" element={<MesVoyages tripData={tripData} />} />
          <Route path="/creer-un-voyage" element={<CreateTrip />} />
          <Route path="/gestion-activite" element={<Activity />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
