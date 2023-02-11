import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export type OptionT = {
  label: string;
  value: string;
};
type PropsT = {
  options: Array<OptionT>;
  value: OptionT | null;
  onChange: (value: OptionT) => void;
};

const Dropdown: React.FC<PropsT> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option: OptionT) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        className="cursor-pointer hover:bg-sky-100 p-1 rounded"
        onClick={() => {
          handleOptionClick(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="cursor-pointer w-48 relative">
      <div
        className="cursor-pointer flex items-center justify-between border rounded p-3 shadow bg-white w-full"
        onClick={toggleIsOpen}
      >
        {value?.label || 'Select...'}
        <span className="text-lg">
          {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};
//use position: absolute on div with options,
//so when it is shown the neighboring elements will act as if the element doesn’t exist

export default Dropdown;
