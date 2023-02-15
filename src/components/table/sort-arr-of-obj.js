const data = [
  { name: 'Onion', weight: 2, price: 10 },
  { name: 'Tomato', weight: 5, price: 6 },
  { name: 'Carrot', weight: 3, price: 15 },
  { name: 'Garlic', weight: 1, price: 16 },
];

const getSortValue = (item) => {
  return item.price;
};

const sortOrder = 'decs';

data.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);

  const reverseOrder = sortOrder === 'acs' ? 1 : -1;

  if (typeof valueA === 'string') {
    return valueA.localeCompare(valueB) * reverseOrder;
  } else {
    return (valueA - valueB) * reverseOrder;
  }
});
