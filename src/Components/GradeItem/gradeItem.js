import React from "react";

function GradeItem({ index, grade, deleteGrade, editGrade }) {
  let color = "red";
  if (grade >= 5) {
    color = "green";
  }
  return (
    <li className={color}>
      {grade}

      <button onClick={() => deleteGrade(index)}> Delete Item</button>
      <button onClick={() => editGrade(index)}> Edit Item</button>
    </li>
  );
}

export default GradeItem;
