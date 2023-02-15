import { GoArrowSmallUp, GoArrowSmallDown } from 'react-icons/go';
import { useSort } from '../../hooks/use-sort';
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
  const { sortBy, sortOrder, sortedData, setSortableColumn } = useSort(
    config,
    data
  );

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
            setSortableColumn(column.label);
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

  return (
    <Table<typeof updatedConfig[0], typeof sortedData[0]>
      config={updatedConfig}
      data={sortedData}
      {...rest}
    />
  );
}

export default SortableTable;
