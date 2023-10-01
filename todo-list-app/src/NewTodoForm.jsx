import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newItem === "") {
      return;
    }

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="main-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn-add">Add</button>
    </form>
  );
}
