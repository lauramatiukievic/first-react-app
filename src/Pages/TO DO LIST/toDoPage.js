import Container from "../../Components/Container/container";
import ToDoFormHook from "../../Components/ToDo/ToDoFormHook/toDoFormHook";
import TodoList from "../../Components/ToDo/TodoList/TodoList";
import deleteFunctions from "../../Functions/deleteItem";

import { useState } from "react";

function ToDoPage() {
  const [items, setItems] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  let createTask = (task) => {
    const newItems = [...items, task];
    setItems(newItems);
  };

  let editTask = (id, title, description, finishTaskTill) => {
    setItems((prevState) => {
      let item = prevState.filter((item) => item.id === id)[0];
      const index = prevState.indexOf(item);
      item.title = title;
      item.description = description;
      item.finishTaskTill = finishTaskTill;
      return deleteFunctions.insertUpdatedItemIntoArrayByIndex(prevState, index, item);
    });
    setEditTodo(null);
  };

  let completeTask = (id, isDone) => {
    setItems((prevState) => {
      let item = prevState.filter((item) => item.id === id)[0];
      const index = prevState.indexOf(item);
      item.isDone = isDone;
      return deleteFunctions.insertUpdatedItemIntoArrayByIndex(prevState, index, item);
    });
  };

  let editTaskHandler = (id) => {
    let selectedEdit = items.find((item) => item.id === id);
    setEditTodo(selectedEdit);
  };

  let deleteTask = (id) => {
    const deleteItem = deleteFunctions.deleteItemFromArrayById(items, id);
    setItems(deleteItem);
  };
  return (
    <Container>
      <ToDoFormHook onCreate={createTask} editData={editTodo} onEdit={editTask} />
      {/* <ToDoForm task onNewTask={taskItemAdd}></ToDoForm> */}
      <TodoList onEdit={editTaskHandler} onComplete={completeTask} onDelete={deleteTask} items={items}></TodoList>
    </Container>
  );
}
export default ToDoPage;
