import ToDoItem from "../TodoItem/TodoItem";

function TodoList(props) {
  const todoItems = props.items.map((item, index) => <ToDoItem key={index} item={item} />);
  return (
    <div>
      <h3>{props.items && props.items.length > 0 ? "Task list" : "no task :("}</h3>
      {todoItems}
    </div>
  );
}
export default TodoList;
