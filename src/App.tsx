import './App.css';

import { useState, useEffect, useRef, useContext } from 'react';

import ButtonPage from './pages/buttonPage/ButtonPage';
import AccordionPage from './pages/accordionPage/AccordionPage';
import DropdownPage from './pages/dropdownPage/DropdownPage';
import NavigationContext from './context/navigation';

const App = () => {
  const { a } = useContext(NavigationContext);

  return <div>{a}</div>;
};

export default App;
