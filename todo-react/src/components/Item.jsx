import { useState } from "react";

export function Item(props) {
  const [completed, setCompleted] = useState(false);
  const [input, setInput] = useState({ current: "" });

  const handleClick = (event) => {
    if (event.key === "Enter") {
      if (input.current.value.trim().length === 0) {
        alert("Please enter todo item");
        return;
      }
      props.updateItem({
        id: props.id,
        key: "title",
        value: input.current.value,
      });
      input.current.value = "";
    }
  };
  return (
    <li>
      <div className="view">
        <input
          type="checkbox"
          onClick={() => {
            setCompleted(!completed);
            props.updateItem({
              id: props.id,
              key: "completed",
              value: !completed,
            });
          }}
        />
        <label style={{ textDecoration: completed && "line-through" }}>
          {props.title}
        </label>
        <button
          className="destroy"
          onClick={() => props.deleteItem(props.id)}
        />
      </div>
      <input ref={input} onKeyDown={handleClick} />
    </li>
  );
}
