import { useState } from "react";

export default function List({ items, deleteItem, toggleItem, handleReset }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  // Will use items.slice as we want to make new arr instead of mutating original item one
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  // Using number func to convert as packed is boolean
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <li
              key={item.id}
              style={
                item.packed === true ? { textDecoration: "line-through" } : {}
              }
            >
              <input
                type="checkbox"
                value={item.packed}
                onChange={() => toggleItem(item.id)}
              />
              <span>
                {item.quantity} {item.description}
              </span>
              <button onClick={() => deleteItem(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleReset}>Clear List</button>
      </div>
    </div>
  );
}
