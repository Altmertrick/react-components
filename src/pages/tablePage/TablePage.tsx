import Table from '../../components/table/Table';

const TablePage: React.FC<any> = () => {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 2 },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default TablePage;
