interface ItemProps {
  data: {
    id: number;
    name: string;
  };
  active: boolean;
}

export const Bars = ({ data, active }: ItemProps) => {
  return (
    <li
      className={`w-full flex divide-x-2 divide-background-600 transition duration-1000 ${
        active ? "cardActive" : ""
      }`}
    >
      <span className="text7 w-24 p-3 text-end">{data.id}</span>
      <div className={`p-3 w-full`}>
        <h4 className="text7">{data.name}</h4>
      </div>
    </li>
  );
};
