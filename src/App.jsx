import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './sections/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <Footer />
    </Router>
  );
};

export default App;
