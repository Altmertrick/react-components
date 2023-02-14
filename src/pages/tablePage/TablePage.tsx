//import Table from '../../components/table/Table';
import SortableTable from '../../components/table/SortableTable';

const TablePage: React.FC<any> = () => {
  const config = [
    {
      label: 'Name',
      render: (item: any) => item.name,
      sortValue: (item: any) => item.name,
    },
    {
      label: 'Color',
      header: () => <th className="bg-red-500">Color</th>,
      render: (item: any) => <div className={`p-3 m-2 ${item.color}`}></div>,
    },
    {
      label: 'Price',
      render: (item: any) => item.price,
      sortValue: (item: any) => item.price,
    },
  ];
  const data = [
    { name: 'Orange', color: 'bg-orange-500', price: 5 },
    { name: 'Apple', color: 'bg-red-500', price: 3 },
    { name: 'Banana', color: 'bg-yellow-500', price: 1 },
    { name: 'Lime', color: 'bg-green-500', price: 2 },
  ];
  const rowKeyFn = (rowData: typeof data[0]) => rowData.name;

  return (
    <div>
      <SortableTable data={data} config={config} rowKeyFn={rowKeyFn} />
    </div>
  );
};

export default TablePage;
