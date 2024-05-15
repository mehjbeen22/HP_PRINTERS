import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './sections/Footer';
import AboutUs from './pages/About';
import IconBox from './pages/Service';
import ContactForm from './pages/ContactForm';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<IconBox />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
