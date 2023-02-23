//import Table from '../../components/table/Table';
import SortableTable from '../../components/table/SortableTable';

const TablePage: React.FC<any> = () => {
  console.log('table page render');
  const config = [
    {
      label: 'Name',
      render: (item: any) => item.name,
      sortValue: (item: any) => item.name,
    },
    {
      label: 'Color',
      header: () => <th>Color</th>,
      render: (item: any) => <div className={`p-3 m-2 ${item.color}`}></div>,
    },
    {
      label: 'Price',
      render: (item: any) => item.price,
      sortValue: (item: any) => item.price,
    },
    {
      label: 'Weight',
      render: (item: any) => item.weight,
      sortValue: (item: any) => item.weight,
    },
    {
      label: 'Price/Weight',
      render: (item: any) => Math.floor((item.price / item.weight) * 100) / 100,
      sortValue: (item: any) =>
        Math.floor((item.price / item.weight) * 100) / 100,
    },
  ];
  const data = [
    { name: 'Orange', color: 'bg-orange-500', price: 5, weight: 1.3 },
    { name: 'Apple', color: 'bg-red-500', price: 3, weight: 2.5 },
    { name: 'Banana', color: 'bg-yellow-500', price: 1, weight: 1.1 },
    { name: 'Lime', color: 'bg-green-500', price: 2, weight: 0.2 },
  ];
  const rowKeyFn = (rowData: typeof data[0]) => rowData.name;

  return (
    <div className="flex justify-center">
      <SortableTable data={data} config={config} rowKeyFn={rowKeyFn} />
    </div>
  );
};

export default TablePage;
