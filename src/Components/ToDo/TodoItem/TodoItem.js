import React, { useState } from "react";
import "./ToDoItem.css";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  const addTaskDone = (event) => {
    setIsDone(event.target.checked);
  };
  const { id, title, time, description, finishTaskTill } = props.item;
  let classes = isDone ? "done-task" : "";

  const timeStart = new Date(time);
  const timeEnd = new Date(finishTaskTill);
  // const hourDiff = (timeEnd - timeStart) / 1000 / 60 / 60;
  const hourDiff = new Date(timeEnd - timeStart);

  return (
    <div className={classes}>
      <span>{time}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <label htmlFor="is-done">Done:</label>
        <input type="checkbox" id="is-done" onChange={addTaskDone}></input>
      </div>

      <span>Finish until:{timeEnd.toLocaleString()}</span>
      <button onClick={() => props.onDelete(id)}>Delete</button>
      <span>Hours left: {hourDiff.getUTCHours()}</span>
    </div>
  );
}

export default ToDoItem;
