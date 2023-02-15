import { useState } from 'react';
import { GoArrowSmallUp, GoArrowSmallDown } from 'react-icons/go';
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

type SortOrderT = null | 'asc' | 'desc';

function SortableTable<C extends ConfigT, D>({
  config,
  data,
  ...rest
}: PropsT<C, D>) {
  const [sortOrder, setSortOrder] = useState<SortOrderT>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);

  const handleSort = (label: any) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    //sort cycle null(unsorted) - click => asc -click => desc - click => unsorted
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const showIcons = (
    label: string,
    sortBy: null | string,
    sortOrder: SortOrderT
  ) => {
    const arrowUp = (
      <span className="text-xl">
        <GoArrowSmallUp />
      </span>
    );
    const arrowDown = (
      <span className="text-xl">
        <GoArrowSmallDown />
      </span>
    );

    if (label === sortBy && sortOrder) {
      if (sortOrder === 'asc') {
        return <div className="mr-1 ">{arrowUp}</div>;
      } else if (sortOrder === 'desc') {
        return <div className="mr-1">{arrowDown}</div>;
      }
    }

    return (
      <div className="mr-1 ">
        {arrowUp}
        {arrowDown}
      </div>
    );
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => {
            handleSort(column.label);
          }}
        >
          <div className="flex items-center">
            {showIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue }: any = config.find((column) => column.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === 'asc' ? 1 : -1;
      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table<C, D> config={updatedConfig} data={sortedData} {...rest} />;
}

export default SortableTable;
