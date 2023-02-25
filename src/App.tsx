import './App.css';

import ButtonPage from './pages/buttonPage/ButtonPage';
import AccordionPage from './pages/accordionPage/AccordionPage';
import DropdownPage from './pages/dropdownPage/DropdownPage';

import Sidebar from './components/sidebar/Sidebar';
import ModalPage from './pages/modalPage/ModalPage';
import TablePage from './pages/tablePage/TablePage';
import CounterPage2 from './pages/counterPage/counterPage2';
import DragAndDropPage from './pages/drag-and-dropPage/DragAndDropPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="container mx-auto p-4 bg-blue-500 ">
        <h1 className="m-3 text-3xl font-bold text-white">Components</h1>
      </div>

      <div className="container mx-auto	grid grid-cols-6 gap-4 mt-4 ">
        <Sidebar />
        <div className="col-span-5">
          <Routes>
            <Route path="/" element={<DropdownPage />} />
            <Route path="/accordion" element={<AccordionPage />} />
            <Route path="/buttons" element={<ButtonPage />} />
            <Route path="/modal" element={<ModalPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/counter" element={<CounterPage2 />} />
            <Route path="/drag" element={<DragAndDropPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
