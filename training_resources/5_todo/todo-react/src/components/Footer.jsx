export function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.itemsLeft}</strong> items left
      </span>
      <button className="clear-completed" onClick={props.clear}>
        Clear completed
      </button>
    </footer>
  );
}
