import { List } from "./components/List";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { title: "First title", id: 0, completed: false },
  ]);
  const addNewItem = (newItem) => {
    newItem.id = items.length;
    newItem.completed = false;
    setItems([...items, newItem]);
  };
  const deleteItems = () => {
    setItems([]);
  };
  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const updateItem = ({ id, key, value }) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        item[key] = value;
      }
      return item;
    });
    setItems(newItems);
  };
  return (
    <div className="todoapp">
      <Header addNewItem={addNewItem} />
      <List items={items} deleteItem={deleteItem} updateItem={updateItem} />
      <Footer itemsLeft={items.length} clear={deleteItems} />
    </div>
  );
}

export default App;
