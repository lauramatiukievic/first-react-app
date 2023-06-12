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

  let addDoneTask = (id) => {
    //atfiltruoti pagal id itema is items masyvo
    //ideti paupdatinta itema i items masyva

    setItems((prevState) => {
      debugger;
      const item = prevState.filter((item) => item.id === id);
      const index = prevState.indexOf(item);
      //uzsetinti ant to itemo isDone true
      item.isDone = true;

      return deleteFunctions.insertUpdatedItemIntoArrayByIndex(prevState, index, item);
    });
  };

  let deleteTask = (id) => {
    const deleteItem = deleteFunctions.deleteItemFromArrayById(items, id);
    setItems(deleteItem);
  };
  return (
    <Container>
      <ToDoForm task onNewTask={taskItemAdd}></ToDoForm>
      <TodoList onDone={addDoneTask} items={items} onDelete={deleteTask}></TodoList>
    </Container>
  );
}
export default ToDoPage;
