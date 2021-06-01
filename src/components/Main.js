import React from 'react';
import Carousel from './Carousel'
import Calculation from './Calculation'
import Advantages from './Advantages';
import About from './About';
import Services from './Services';
import Welcome from './Welcome';

function Main() {
  return (
    <main>
        <Carousel />
        <Advantages />
        <Calculation />
        <Welcome />
    </main>
  );
}

export default Main;
