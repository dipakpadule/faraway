import { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: false },
  { id: 4, description: "Camera", quantity: 2, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems); //empty array to store items

  function handleItems(item) {
    setItems((items) => [...items, item]); //add new items to array by spreading existing
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

export default App;

function Form({ onAddItems }) {
  const [description, setDescription] = useState(""); //item name or description
  const [quantity, setQuantity] = useState(1); //quantity of items

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: +String(Date.now()).slice(-5),
      description,
      packed: false,
      quantity,
    };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDelete={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDelete }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
