import React from 'react';

import { GoBell, GoGlobe, GoSquirrel } from 'react-icons/go';

import './App.css';
import Button from './Button/Button';

function App() {
  const handleEvent = () => {
    console.log('Hello');
  };

  return (
    <div className="App">
      <div>
        <Button onClick={handleEvent} styleType={'primary'} outlined>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button onMouseEnter={handleEvent} styleType={'secondary'}>
          <GoSquirrel />
          Secondary
        </Button>
      </div>
      <div>
        <Button styleType={'success'} outlined>
          <GoGlobe />
          Success
        </Button>
      </div>
      <div>
        <Button styleType={'warning'}>Warning</Button>
      </div>
      <div>
        <Button styleType={'danger'}>Danger</Button>
      </div>
    </div>
  );
}

export default App;
