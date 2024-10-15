import { useState } from "react";

export function Header(props) {
  const [input, setInput] = useState({ current: "" });
  const handleClick = (event) => {
    if (event.key === "Enter") {
      if (input.current.value.trim().length === 0) {
        alert("Please enter todo item");
        return;
      }
      props.addNewItem({ title: input.current.value });
      input.current.value = "";
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        ref={input}
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={handleClick}
      />
    </header>
  );
}
