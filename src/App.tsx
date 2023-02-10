import './App.css';
import Accordion from './components/accordion/Accordion';

import ButtonPage from './pages/buttonPage/ButtonPage';

function App() {
  const items = [
    {
      id: 'sdfsadf',
      label: 'Hello world Hello world',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea obcaecati eum consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
      id: 'asfwer2',
      label: 'Hi there Hi there',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea obcaecati eum consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
      id: 'asfwserer2',
      label: 'How are you How are you',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea obcaecati eum consequuntur',
    },
  ];

  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
