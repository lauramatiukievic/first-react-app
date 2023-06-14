import ToDoItem from "../TodoItem/TodoItem";

function TodoList(props) {
  let getSortedItems = () => {
    const tasks = props.items.filter((item) => item.isDone === false);
    const tasksDone = props.items.filter((item) => item.isDone === true);
    return tasks.concat(tasksDone);
  };

  const todoItems = getSortedItems().map((item, index) => <ToDoItem key={index} item={item} onDelete={props.onDelete} onComplete={props.onComplete} onEdit={props.onEdit} />);
  return (
    <div>
      <h3>{props.items && props.items.length > 0 ? "Task list" : "no task :("}</h3>
      {todoItems}
    </div>
  );
}
export default TodoList;
