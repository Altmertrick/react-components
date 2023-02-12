import './App.css';

import { useState, useEffect, useRef, useContext } from 'react';

import ButtonPage from './pages/buttonPage/ButtonPage';
import AccordionPage from './pages/accordionPage/AccordionPage';
import DropdownPage from './pages/dropdownPage/DropdownPage';

import Route from './components/route/Route';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <div className="container mx-auto	grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
