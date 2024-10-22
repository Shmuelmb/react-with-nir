import { Item } from "./Item";
export function List(props) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        {props.items.map((item) => (
          <Item
            title={item.title}
            id={item.id}
            deleteItem={props.deleteItem}
            updateItem={props.updateItem}
          />
        ))}
      </ul>
    </section>
  );
}
