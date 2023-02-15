import { useState } from 'react';

interface ConfigT {
  label: string;
  render: (item: any) => any;
  sortValue?: (item: any) => any;
  header?: () => JSX.Element;
}

type SortOrderT = null | 'asc' | 'desc';

export function useSort<D>(config: Array<ConfigT>, data: Array<D>) {
  const [sortOrder, setSortOrder] = useState<SortOrderT>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);

  const setSortableColumn = (label: any) => {
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

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue }: any = config.find(
      (column: ConfigT) => column.label === sortBy
    );

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

  return { sortOrder, sortBy, sortedData, setSortableColumn };
}

//Creating a custom hook
// 1 Create fn called 'useSomething'
// 2 Find all all the non-JSX expressions that refer to 1-2
// pieces of state
// 3 Cut the all out, paste into 'useSomething'
// 4 Find not defined errors in your component
// 5 In your hook, return object that contains all the variables the component needs
// 6 In your component, call the hook. Destructure the properties the component needs
// 7 Find 'node defined' errors in the hook. Pass all the missing variables to the hook
// 8 Rename the hook to something more meaningful
// 9 Rename returned properties to something meaningful
