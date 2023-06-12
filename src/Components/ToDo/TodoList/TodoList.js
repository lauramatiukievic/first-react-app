import ToDoItem from "../TodoItem/TodoItem";

function TodoList({ items, onDelete }) {
  const todoItems = items.map((item, index) => <ToDoItem key={index} item={item} onDelete={onDelete} />);
  return (
    <div>
      <h3>{items && items.length > 0 ? "Task list" : "no task :("}</h3>
      {todoItems}
    </div>
  );
}
export default TodoList;
