import { useState } from 'react';

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
        onClick={() => {
          handleOptionClick(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={toggleIsOpen}>{value?.label || 'Select...'}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdown;
