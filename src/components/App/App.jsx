/* eslint-disable prettier/prettier */
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import './App.scss';

function App() {
  return (
    <div>
      <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/se-connecter" element={<LoginForm />} />
          <Route path="/creer-un-compte" element={<CreateAccount />} />
          <Route path="/mes-voyages" element={<MesVoyages />} />
          <Route path="/creer-un-voyage" element={<CreateTrip />} />
          <Route path="/gestion-activite" element={<Activity />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
