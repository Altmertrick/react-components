import { Fragment } from 'react';

interface Config {
  label: string;
  render: (item: any) => any;
  header?: () => JSX.Element;
}
interface DataT {}

interface DataGridProps<C, D> {
  config: Array<C>;
  data: Array<D>;
  rowKeyFn: (rowData: D) => string;
}

function Table<C extends Config, D>({
  config,
  data,
  rowKeyFn,
}: DataGridProps<C, D>) {
  const renderedHeaders = config.map((column: C) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData: any) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-3 text-center" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={rowKeyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;

//Table accepts data and config props
//config is array of objects,
//each object in config controls how one of the column will be displayed

// config.label - name of the column (table header)
//config.render - forms every value of a column (.render: (item)=>item.price)
//config.header - optional fn to decide what put inside <th></th> if not provided show .label
//config.sortValue - optional fn to describe how to extract values for sorting when this column is clicked
// if colum should be sortable provide only .sortValue and .header must be omitted
// header will be returned from SortableTable
// .sortValue(item) => item.price // sorting based on items price prop

//<SortableTable config data /> - comp. where all sorting logic will be
//Purpose:
// Look at each object in config arr
// Check if the ojb have a 'sortValue' function
// If so, column that represents this obj must be sortable
// Adds a  header props that will show clickable header cell
// When user click the cell sorts the data and passes it down to the Table

//data is array of objects,
//each object represents one row of the table
