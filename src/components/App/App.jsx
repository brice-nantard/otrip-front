import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
