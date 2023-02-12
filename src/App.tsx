import './App.css';

import { useState, useEffect, useRef } from 'react';

import ButtonPage from './pages/buttonPage/ButtonPage';
import AccordionPage from './pages/accordionPage/AccordionPage';
import DropdownPage from './pages/dropdownPage/DropdownPage';

const App = () => {
  return (
    <div>
      <DropdownPage />
    </div>
  );
};

export default App;
