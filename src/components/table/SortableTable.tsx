import Table from './Table';
import { useState } from 'react';

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

  const handleSort = (getSortValueFn: any, order?: 'acs' | 'decs') => {
    const newSortedData = data.sort((a, b) => {
      const valA = getSortValueFn(a);
      const valB = getSortValueFn(b);

      const reverseOrder = order === 'acs' ? 1 : -1;

      if (typeof valA === 'string') {
        return valA.localeCompare(valB) * reverseOrder;
      } else {
        return (valA - valB) * reverseOrder;
      }
    });

    setSortedData([...newSortedData]);
  };

  const configWithAction = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th>
            {column.label}

            <button
              onClick={() => {
                handleSort(column.sortValue, 'acs');
              }}
            >
              ^
            </button>
            <button
              onClick={() => {
                handleSort(column.sortValue, 'decs');
              }}
            >
              v
            </button>
          </th>
        ),
      };
    }
    return column;
  });

  return <Table<C, D> config={configWithAction} data={sortedData} {...rest} />;
}

export default SortableTable;
