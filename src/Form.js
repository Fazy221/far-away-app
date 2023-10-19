import { useState } from "react";

export default function Form({ handleItems }) {
  const options = Array.from({ length: 20 }, (_, index) => index + 1);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    handleItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Items</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
