import { useReducer, useState } from 'react';
import Button from '../../components/button/Button';
import Panel from '../../components/panel/Panel';

type PropsT = {
  initialCount?: number;
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_VALUE_TO_ADD = 'SET_VALUE_TO_ADD';
const ADD_A_LOT = 'ADD_A_LOT';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    case ADD_A_LOT:
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };

    default:
      return state;
  }
};

const CounterPage2: React.FC<PropsT> = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount || 0);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount || 0,
    valueToAdd: 0,
  });

  const handleIncrement = () => {
    // setCount(count + 1);
    dispatch({ type: INCREMENT });
  };
  const handleDecrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
    // setValueToAdd(value);
  };
  const handleAddALot = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ADD_A_LOT });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel>
      <h2 className="text-lg">Count is {state.count}</h2>
      <div className="flex">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>

      <form onSubmit={handleAddALot}>
        <label>Add a lot!</label>
        <input
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          type={'number'}
          value={state.valueToAdd || ' '}
          onChange={handleChange}
        />
        <Button>Add a lot</Button>
      </form>
    </Panel>
  );
};

export default CounterPage2;
