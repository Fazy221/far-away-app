import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleReset() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleItems={handleItems} />
      <List
        items={items}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
        handleReset={handleReset}
      />
      <Stats items={items} />
    </div>
  );
}
