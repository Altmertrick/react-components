import './App.css';

import ButtonPage from './pages/buttonPage/ButtonPage';
import AccordionPage from './pages/accordionPage/AccordionPage';
import DropdownPage from './pages/dropdownPage/DropdownPage';

import Route from './components/route/Route';
import Sidebar from './components/sidebar/Sidebar';
import ModalPage from './pages/modalPage/ModalPage';
import TablePage from './pages/tablePage/TablePage';
import CounterPage2 from './pages/counterPage/counterPage2';
import DragAndDropPage from './pages/drag-and-dropPage/DragAndDropPage';

const App = () => {
  return (
    <div>
      <div className="container mx-auto p-4 bg-blue-500 ">
        <h1 className="m-3 text-3xl font-bold text-white">Components</h1>
      </div>

      <div className="container mx-auto	grid grid-cols-6 gap-4 mt-4 ">
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
          <Route path="/modal">
            <ModalPage />
          </Route>
          <Route path="/table">
            <TablePage />
          </Route>
          <Route path="/counter">
            <CounterPage2 />
          </Route>
          <Route path="/drag">
            <DragAndDropPage />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default App;
