import Container from "../../Components/Container/container";
import ToDoForm from "../../Components/ToDo/ToDoForm/ToDoForm";
import TodoList from "../../Components/ToDo/TodoList/TodoList";

import deleteFunctions from "../../Functions/deleteItem";
import { useState } from "react";

function ToDoPage() {
  const [items, setItems] = useState([]);

  let taskItemAdd = (task) => {
    const newItems = [...items, task];
    setItems(newItems);
  };

  let deleteTask = (id) => {
    const deleteItem = deleteFunctions.deleteItemFromArrayById(items, id);
    setItems(deleteItem);
  };
  return (
    <Container>
      <ToDoForm onNewTask={taskItemAdd}></ToDoForm>
      <TodoList items={items} onDelete={deleteTask}></TodoList>
    </Container>
  );
}
export default ToDoPage;
