interface Config {
  label: string;
  render: (item: any) => any;
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
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData: any) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-3" key={column.label}>
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
//each object controls how one of the column will be displayed

//data is array of objects,
//each object represents one row of the table
