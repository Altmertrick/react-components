import { DragEvent, useState } from 'react';
import Panel from '../../components/panel/Panel';

const dataList = [
  {
    id: 1,
    order: 3,
    label: 'Card 1',
    text: 'Some text related to the card, Some text related to the card',
  },
  { id: 2, order: 1, label: 'Card 2', text: 'Some text related to the card' },
  {
    id: 3,
    order: 2,
    label: 'Card 3',
    text: 'Some text related to the card',
  },
  { id: 4, order: 4, label: 'Card 4', text: 'Some text related to the card' },
  { id: 5, order: 5, label: 'Card 5', text: 'Some text related to the card' },
  { id: 6, order: 7, label: 'Card 6', text: 'Some text related to the card' },
  { id: 7, order: 8, label: 'Card 7', text: 'Some text related to the card' },
  { id: 8, order: 6, label: 'Card 8', text: 'Some text related to the card' },
];

interface CardT {
  id: number;
  order: number;
  label: string;
  text: string;
}

const DragAndDropPage: React.FC<any> = (props) => {
  const [cardList, setCardList] = useState(dataList);
  const [currentCard, setCurrentCard] = useState<null | CardT>(null);

  const dragStartHandler = (e: DragEvent<HTMLDivElement>, card: CardT) => {
    e.stopPropagation();

    setCurrentCard(card);
  };

  const dragEndHandler = (
    e: DragEvent<HTMLDivElement> & { target: Element }
  ) => {
    e.preventDefault();
    e.stopPropagation();

    e.target.classList.remove('bg-gray-200');
  };

  const dragLeaveHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    //if (e.currentTarget.contains(e.relatedTarget)) return;

    e.target.classList.remove('bg-gray-200');
  };

  const dragOverHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.contains(e.relatedTarget)) return;

    e.target.classList.add('bg-gray-200');
  };

  const dragDropHandler = (
    e: DragEvent<HTMLDivElement> & { target: Element },
    card: CardT
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setCardList(
      cardList.map((c) => {
        if (c.id === card.id && currentCard) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard?.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
    );
    e.target.classList.remove('bg-gray-200');
    console.log('dDrop', card);
  };

  const sortCards = (a: any, b: any) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  const renderedCards = cardList.sort(sortCards).map((card) => {
    return (
      <div
        key={card.id}
        className="cursor-grab p-3 m-2 border-2 rounded border-gray-300 shadow"
        draggable
        onDragStart={(e) => {
          dragStartHandler(e, card);
        }}
        onDragLeave={(e: any) => {
          dragLeaveHandler(e);
        }}
        onDragEnd={(e: any) => {
          dragEndHandler(e);
        }}
        onDragOver={(e: any) => {
          dragOverHandler(e);
        }}
        onDrop={(e: any) => {
          dragDropHandler(e, card);
        }}
      >
        <div className="w-36 ">
          <h3>{card.label}</h3>
          <div className="h-36  p-1">{card.text}</div>
        </div>
      </div>
    );
  });

  return (
    <Panel className="flex justify-center flex-wrap">{renderedCards}</Panel>
  );
};

export default DragAndDropPage;
