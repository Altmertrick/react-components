import './App.css';

import ButtonPage from './pages/buttonPage/ButtonPage';
import AccordionPage from './pages/accordionPage/AccordionPage';
import DropdownPage from './pages/dropdownPage/DropdownPage';

import Route from './components/route/Route';
import Sidebar from './components/sidebar/Sidebar';
import ModalPage from './pages/modalPage/ModalPage';
import TablePage from './pages/tablePage/TablePage';

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
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
};

export default App;
