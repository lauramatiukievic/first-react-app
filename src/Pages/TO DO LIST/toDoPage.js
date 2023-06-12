import Container from "../../Components/Container/container";
import ToDoFormHook from "../../Components/ToDo/ToDoFormHook/toDoFormHook";
import TodoList from "../../Components/ToDo/TodoList/TodoList";

import { useState } from "react";

function ToDoPage() {
  const [items, setItems] = useState([]);

  // let taskItemAdd = (task) => {
  //   const newItems = [...items, task];
  //   setItems(newItems);
  // };
  let createTask = (task) => {
    const newItems = [...items, task];
    setItems(newItems);
  };

  // let addDoneTask = (id) => {
  //   //atfiltruoti pagal id itema is items masyvo
  //   //ideti paupdatinta itema i items masyva

  //   setItems((prevState) => {
  //     const item = prevState.filter((item) => item.id === id);
  //     const index = prevState.indexOf(item);
  //     //uzsetinti ant to itemo isDone true
  //     item.isDone = true;

  //     return deleteFunctions.insertUpdatedItemIntoArrayByIndex(prevState, index, item);
  //   });
  // };

  // let deleteTask = (id) => {
  //   const deleteItem = deleteFunctions.deleteItemFromArrayById(items, id);
  //   setItems(deleteItem);
  // };
  return (
    <Container>
      <ToDoFormHook onCreate={createTask} />
      {/* <ToDoForm task onNewTask={taskItemAdd}></ToDoForm> */}
      <TodoList items={items}></TodoList>
    </Container>
  );
}
export default ToDoPage;
