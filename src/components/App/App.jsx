/* eslint-disable prettier/prettier */
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import LoginForm from '../LoginForm/LoginForm';
import CreateAccount from '../CreateAccount/CreateAccount';
import MesVoyages from '../MesVoyages/MesVoyages';
import CreateTrip from '../CreateTrip/CreateTrip';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/mes-voyages" element={<MesVoyages />} />
          <Route path="/creer-un-voyage" element={<CreateTrip />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
