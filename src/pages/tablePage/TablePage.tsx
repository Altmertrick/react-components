import Table from '../../components/table/Table';

const TablePage: React.FC<any> = () => {
  const config = [
    { label: 'Name', render: (item: any) => item.name },
    {
      label: 'Color',
      render: (item: any) => <div className={`p-3 m-2 ${item.color}`}></div>,
    },
    { label: 'Price', render: (item: any) => item.score },
  ];
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 2 },
  ];
  const rowKeyFn = (rowData: typeof data[0]) => rowData.name;

  return (
    <div>
      <Table<typeof config[0], typeof data[0]>
        data={data}
        config={config}
        rowKeyFn={rowKeyFn}
      />
    </div>
  );
};

export default TablePage;
