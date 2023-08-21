/* eslint-disable prettier/prettier */
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import LoginForm from '../LoginForm/LoginForm';
import Footer from '../Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
