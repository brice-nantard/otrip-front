/* eslint-disable prettier/prettier */
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { handleSuccessfulLogin } from '../../actions/user';

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

  useEffect(() =>  {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    // si les deux valeurs sont présentes dans le localStorage, la reconnexion se fera automatiquement
    // sinon, on redirige vers la page de connexion
    if (storedToken && storedUsername) {
      dispatch(handleSuccessfulLogin(storedToken, storedUsername));
    }
  }, [dispatch]);

  return (
    <div>
      <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/se-connecter" element={<LoginForm />} />
          <Route path="/creer-un-compte" element={<CreateAccount />} />
          <Route path="/mon-compte" element={<UserAccount />} />
          <Route path="/mes-voyages" element={<MesVoyages />} />
          <Route path="/creer-un-voyage" element={<CreateTrip />} />
          <Route path="/gestion-activite" element={<Activity />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
