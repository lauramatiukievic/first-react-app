import React from "react";
import "./ToDoItem.css";

function ToDoItem(props) {
  const { id, title, time, isDone, description, finishTaskTill } = props.item;
  let classes = isDone ? "done-task" : "";

  const timeStart = new Date(time);
  const timeEnd = new Date(finishTaskTill);
  const hourDiff = new Date(timeEnd - timeStart) / 1000 / 60 / 60;

  return (
    <div className={classes}>
      <span>{time}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <label htmlFor="is-Done">Done:</label>
        <input
          type="checkbox"
          id="is-Done"
          checked={isDone}
          onChange={(event) => {
            props.onComplete(id, event.target.checked);
          }}
        />
      </div>

      <span>Finish until:{timeEnd.toLocaleString()}</span>
      <button onClick={() => props.onDelete(id)}>Delete</button>
      <button onClick={() => props.onEdit(id)}>Edit</button>
      <span>Hours left: {hourDiff.toFixed(0)}</span>
    </div>
  );
}

export default ToDoItem;
