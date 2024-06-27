import './css/App.css';

import React from 'react';
import { useState } from 'react';
import AnimalShow from './AnimalShow.js';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  function renderAnimals(animalsArr) {
    animalsArr = animalsArr.map((animal, index) => {
      return <AnimalShow type={animal} key={index} />;
    });
    return animalsArr;
  }

  function handleClick() {
    setCount(count + 1);
    setAnimals([...animals, getRandomAnimal()]);
  }

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div>Animals Shown: {count}</div>
      <div className='animal-list'>{renderAnimals(animals)}</div>
    </div>
  );
}

export default App;
