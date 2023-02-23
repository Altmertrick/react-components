import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

type ItemT = {
  id: string;
  label: string;
  content: string;
};

interface PropsT {
  items: Array<ItemT>;
}

const Accordion: React.FC<PropsT> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (idx: number) => {
    //use functional state update,
    // because new state value is depending on the old state value
    setExpandedIndex((currentExpIdx) => {
      if (currentExpIdx === idx) {
        return -1;
      }
      return idx;
    });

    // if (idx === expandedIndex) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(idx);
    // }
  };

  const renderedItems = items.map((item, idx) => {
    const isExpanded = expandedIndex === idx;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div style={{ border: '3px solid back' }} key={item.id}>
        <div
          className="flex items-center justify-between p-3 border-b bg-gray-50 cursor-pointer"
          onClick={() => {
            handleClick(idx);
          }}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
