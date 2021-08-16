import React from 'react';
import Movies from '../components/movies/Movies';
import Slider from '../components/slider/Slider';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="container">
        <Slider />
        <Movies />
      </div>
    </div>
  );
};

export default Home;
