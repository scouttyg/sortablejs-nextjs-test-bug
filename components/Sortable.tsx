import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

type SortableItem = {
  id: string | number
  selected?: boolean;
  chosen?: boolean;
  filtered?: boolean;
  [property: string]: any;
}

interface Props {
  items: SortableItem[];
}

export const Sortable = ({items = []}:Props) => {
  const [sortableItems, setSortableItems] = useState(items);

  return (
    <ReactSortable
      animation={150}
      list={sortableItems}
      setList={setSortableItems}
    >
      {sortableItems.map(item => (
        <div className="sortable-item" key={item.id}>
          <span>{item.name}</span>
        </div>
      ))}
    </ReactSortable>
  );
}
