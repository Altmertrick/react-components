import { useState, useEffect, useRef } from 'react';
import Dropdown, { OptionT } from '../../components/dropdown/Dropdown';

const DropdownPage = () => {
  const [value, setValue] = useState<OptionT | null>(null);

  const handleSelect = (value: OptionT) => {
    setValue(value);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <Dropdown options={options} value={value} onChange={handleSelect} />
      </div>
    </div>
  );
};

export default DropdownPage;
