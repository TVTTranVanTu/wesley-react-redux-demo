import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import './scss/main.scss';
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
