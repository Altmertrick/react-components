import React from 'react';

import { GoBell } from 'react-icons/go';

import './App.css';
import Button from './Button/Button';

function App() {
  return (
    <div className="App">
      <div>
        <Button type={'primary'} outlined>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button type={'secondary'}>Secondary</Button>
      </div>
      <div>
        <Button type={'success'} outlined>
          <GoBell />
          Success
        </Button>
      </div>
      <div>
        <Button type={'warning'}>Warning</Button>
      </div>
      <div>
        <Button type={'danger'}>Danger</Button>
      </div>
    </div>
  );
}

export default App;
