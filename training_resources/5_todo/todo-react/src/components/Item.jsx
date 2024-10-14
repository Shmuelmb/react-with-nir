export function Item(props) {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{props.title}</label>
        <button
          className="destroy"
          onClick={() => props.deleteItem(props.title)}
        />
      </div>
      <input className="edit" />
    </li>
  );
}
