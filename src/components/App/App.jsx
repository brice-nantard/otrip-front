/* eslint-disable prettier/prettier */
import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { handleSuccessfulLogin } from '../../actions/user';
import { fetchHomeTrips, fetchUserTrips } from '../../actions/trip';

import Header from '../Header/Header';
import Home from '../Home/Home';
import LoginForm from '../LoginForm/LoginForm';
import CreateAccount from '../CreateAccount/CreateAccount';
import MesVoyages from '../MesVoyages/MesVoyages';
import CreateTrip from '../CreateTrip/CreateTrip';
import Activity from '../Activity/Activity';
import ContactForm from '../ContactForm/ContactForm';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import UserAccount from '../UserAccount/UserAccount';
import Loading from './Loading/Loading';

import './App.scss';

const App = () => {
  const isTripsLoaded = useSelector((state) => state.trip.isTripsLoaded);
  // mise en place de la protection de certaines routes si l'utilisateur n'est pas connecté
  const isLogged = useSelector((state) => state.user.logged);

  const dispatch = useDispatch();
  // stocker les voyages de la Home dans le state
  const [homeTripsData, setHomeTripsData] = useState([]);
  // stocker les voyages de l'utilisateur dans le state
  const [userTripsData, setUserTripsData] = useState([]);

  useEffect(() =>  {
    // récupération des identifiants de l'utilisateur depuis le localStorage
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    // si les deux valeurs sont présentes dans le localStorage, la reconnexion se fera automatiquement au refresh
    if (storedToken && storedUsername) {
      dispatch(handleSuccessfulLogin(storedToken, storedUsername));
    };

    // récupération des voyages de la Home depuis le localStorage
    const storedHomeTrips = JSON.parse(localStorage.getItem('homeTrips'));
    if (storedHomeTrips) {
      setHomeTripsData(storedHomeTrips);
    }
    dispatch(fetchHomeTrips());

    // récupération des voyages de l'utilisateur depuis le localStorage
    const storedUserTrips = JSON.parse(localStorage.getItem('userTrips'));
    if (storedUserTrips) {
      setUserTripsData(storedUserTrips);
    }
    dispatch(fetchUserTrips());
    
  }, [dispatch]);

  // si les voyages ne sont pas chargés, on remplace toute l'appli par le loader
  if (!isTripsLoaded) {
    return <Loading />;
  }
  // si l'utilisateur est connecté, il a accès à toutes les routes
  // s'il n'est pas connecté, il a accès uniquement à Home, Contact, Error et se connecter et créer un compte
  return (
    <div>
      <Header /> 
        <Routes>
          {isLogged ? (
            <>
              <Route path="/" element={<Home homeTripsData={homeTripsData}/>} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="*" element={<Error />} />
              <Route path="/se-connecter" element={<LoginForm />} />
              <Route path="/creer-un-compte" element={<CreateAccount />} />
              <Route path="/mon-compte" element={<UserAccount />} />
              <Route path="/mes-voyages" element={<MesVoyages userTripsData={userTripsData}/>} />
              <Route path="/creer-un-voyage" element={<CreateTrip />} />
              <Route path="/gestion-activite" element={<Activity />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home homeTripsData={homeTripsData}/>} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="*" element={<Error />} />
              <Route path="/se-connecter" element={<LoginForm />} />
              <Route path="/creer-un-compte" element={<CreateAccount />} />
            </>
          )}
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
