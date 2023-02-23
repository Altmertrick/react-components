import { useState } from 'react';
import Panel from '../../components/panel/Panel';
const dataList = [
  { id: 1, order: 3, text: 'Card 3' },
  { id: 2, order: 1, text: 'Card 1' },
  { id: 3, order: 2, text: 'Card 2' },
  { id: 4, order: 4, text: 'Card 4' },
];

const DragAndDropPage: React.FC<any> = (props) => {
  const [cardList, setCardList] = useState(dataList);

  const renderedCards = cardList.map((card) => {
    return (
      <div
        className="cursor-grab p-6 m-2 border-2 border-gray-300 shadow"
        draggable
        onDragStart={(e) => {}}
        onDragLeave={(e) => {}}
        onDragOver={(e) => {}}
        onDrop={(e) => {}}
      >
        {card.text}
      </div>
    );
  });

  return <Panel className="flex justify-center">{renderedCards}</Panel>;
};

export default DragAndDropPage;
