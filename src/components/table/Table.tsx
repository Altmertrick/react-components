type ItemT = {
  name: string;
  color: string;
  score: number;
};

type PropsT = {
  data: Array<ItemT>;
};

const Table: React.FC<PropsT> = ({ data }) => {
  const renderedRows = data.map((item) => {
    return (
      <tr className="border-b" key={item.name}>
        <th className="p-3">{item.name}</th>
        <th className="p-3">
          <div className={`p-3 m-2 ${item.color}`}></div>
        </th>
        <th className="p-3">{item.score}</th>
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Fruits</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
