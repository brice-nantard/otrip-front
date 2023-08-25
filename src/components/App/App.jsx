import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import LoginForm from '../LoginForm/LoginForm';
import CreateAccount from '../CreateAccount/CreateAccount';
import MesVoyages from '../MesVoyages/MesVoyages';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import './App.scss';

function App() {
  return (
    <div>
      <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/mes-voyages" element={<MesVoyages />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
