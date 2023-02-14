import { useState } from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import Table from './Table';

interface DataT {}
interface ConfigT {
  label: string;
  render: (item: any) => any;
  sortValue?: (item: any) => any;
  header?: () => JSX.Element;
}
interface PropsT<C, D> {
  config: Array<C>;
  data: Array<D>;
  rowKeyFn: (rowData: D) => string;
}

function SortableTable<C extends ConfigT, D>({
  config,
  data,
  ...rest
}: PropsT<C, D>) {
  const [sortedData, setSortedData] = useState(data);

  const handleSort = (getSortValueFn: any, order?: 'asc' | 'desc') => {
    const newSortedData = data.sort((a, b) => {
      const valA: any = getSortValueFn(a);
      const valB = getSortValueFn(b);

      const reverseOrder = order === 'asc' ? 1 : -1;

      if (typeof valA === 'string') {
        return valA.localeCompare(valB) * reverseOrder;
      } else {
        return (valA - valB) * reverseOrder;
      }
    });

    setSortedData([...newSortedData]);
  };

  const configWithAction = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th className="flex items-center">
          {column.label}
          <div className="p-2">
            <span
              className="cursor-pointer"
              onClick={() => {
                handleSort(column.sortValue, 'asc');
              }}
            >
              <GoTriangleUp />
            </span>
            <span
              className="cursor-pointer"
              onClick={() => {
                handleSort(column.sortValue, 'desc');
              }}
            >
              <GoTriangleDown />
            </span>
          </div>
        </th>
      ),
    };
  });

  return <Table<C, D> config={configWithAction} data={sortedData} {...rest} />;
}

export default SortableTable;
