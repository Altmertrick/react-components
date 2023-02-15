import { useState, useEffect } from 'react';
import Button from '../../components/button/Button';

type PropsT = {
  initialCount?: number;
};

//Custom hook
const useCounter = (initialCount: number | undefined) => {
  const [count, setCount] = useState(initialCount || 0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
};

const CounterPage: React.FC<PropsT> = ({ initialCount }) => {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <div>{count}</div>
      <Button onClick={increment} styleType="primary">
        Add
      </Button>
    </div>
  );
};

export default CounterPage;
