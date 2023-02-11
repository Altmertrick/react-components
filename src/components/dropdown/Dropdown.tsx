import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import Panel from '../panel/Panel';

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
      <Panel
        className="cursor-pointer flex items-center justify-between "
        onClick={toggleIsOpen}
      >
        {value?.label || 'Select...'}
        <span className="text-lg">
          {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
};
//use position: absolute on div with options,
//so when it is shown the neighboring elements will act as if the element doesn’t exist

export default Dropdown;
