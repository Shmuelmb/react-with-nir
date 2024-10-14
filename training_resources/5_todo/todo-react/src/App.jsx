import { List } from "./components/List";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([{ title: "First title" }]);
  const addNewItem = (newItem) => {
    setItems([...items, newItem]);
  };
  const deleteItems = () => {
    setItems([]);
  };
  const deleteItem = (title) => {
    const newItems = items.filter((item) => item.title !== title);
    setItems(newItems);
  };
  return (
    <div className="todoapp">
      <Header addNewItem={addNewItem} />
      <List items={items} deleteItem={deleteItem} />
      <Footer itemsLeft={items.length} clear={deleteItems} />
    </div>
  );
}

export default App;
