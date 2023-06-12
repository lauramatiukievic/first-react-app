import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ToDoForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [finishTaskTill, setfinishTaskTill] = useState("");
  let addTitleHandle = (event) => {
    setTitle(event.target.value);
  };
  let addDescriptionHandle = (event) => {
    setDescription(event.target.value);
  };

  let addfinishTaskTill = (event) => {
    setfinishTaskTill(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const time = new Date().toLocaleString();
    let id = uuidv4();
    const newData = { id, title, time, description, finishTaskTill };
    setTitle("");
    setDescription("");
    setfinishTaskTill("");
    props.onNewTask(newData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={addTitleHandle}></input>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea type="text" id="description" value={description} onChange={addDescriptionHandle}></textarea>
      </div>

      <div>
        <label htmlFor="finish-till">Finish till:</label>
        <input type="date" id="finish-till" value={finishTaskTill} onChange={addfinishTaskTill}></input>
      </div>
      <div>
        <input type="submit" value="Save"></input>
      </div>
    </form>
  );
}
export default ToDoForm;

// TODO UŽDUOTIS:
// 1. Sukurti 4 komponentus:
// 1.1. TodoPage (pradinis komponentas)
// 1.2. TodoForm (forma)
// 1.3. TodoList (visų todo užduočių sąrašas)
// 1.4. TodoItem (vienos todo užduoties komponentas)

// 2. Kiekviena sukurta užduotis turi turėti:
// 2.1. Unikalų id (prisideda automatiškai)
// 2.2. Pavadinimą
// 2.3. Aprašymą
// 2.4. Sukūrimo datą (prisideda automatiškai)
// 2.5. Done (nurodo ar užduotis jau atlikta)
// 2.6. Data iki kada užduotį reikia atlikti
