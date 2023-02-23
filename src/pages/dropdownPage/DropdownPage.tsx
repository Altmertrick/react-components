import { useState, useEffect, useRef } from 'react';
import Dropdown, { OptionT } from '../../components/dropdown/Dropdown';

const DropdownPage = () => {
  const [valueColor, setValueColor] = useState<OptionT | null>(null);
  const [valueDrink, setValueDrink] = useState<OptionT | null>(null);

  const handleSelectColors = (value: OptionT) => {
    setValueColor(value);
  };
  const handleSelectDrinks = (value: OptionT) => {
    setValueDrink(value);
  };

  const colors = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];
  const drinks = [
    { label: 'Tea', value: 'tea' },
    { label: 'Coffee', value: 'coffee' },
    { label: 'Milk', value: 'milk' },
  ];

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <Dropdown
          options={colors}
          value={valueColor}
          onChange={handleSelectColors}
        />
        <Dropdown
          options={drinks}
          value={valueDrink}
          onChange={handleSelectDrinks}
        />
      </div>
    </div>
  );
};

export default DropdownPage;
