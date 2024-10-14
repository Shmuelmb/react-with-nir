import { Item } from "./Item";
export function List(props) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        {props.items.map((item) => (
          <Item title={item.title} deleteItem={props.deleteItem} />
        ))}
      </ul>
    </section>
  );
}
