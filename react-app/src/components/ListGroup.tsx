import { useState } from "react";

interface Props {
  title: string[];
  cities: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ title, cities, onSelectItem }: Props) {
  //Props are inputs to components

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{cities}</h1>
      <ul className="list-group">
        {title.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
