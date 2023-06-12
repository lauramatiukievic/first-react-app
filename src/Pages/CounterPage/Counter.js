import { useState } from "react";

import Container from "../../Components/Container/container";
import "./Counter.css";
import GradeItem from "../../Components/GradeItem/gradeItem";

import deleteFunctions from "../../Functions/deleteItem";

function CaunterPage() {
  const initialValue = 5;

  const [count, setCount] = useState(initialValue);

  const [grades, setGrades] = useState([]);

  let color = "red";
  if (count >= 5) {
    color = "green";
  }

  const resetHandler = () => {
    setCount(initialValue);
    setGrades([]);
  };

  const countButtonHandler = (num) => {
    setCount((prevState) => prevState + num);
  };

  const changeHandler = (event) => {
    const inputValue = Number(event.target.value);
    if (inputValue > 10) {
      setCount(10);
    } else if (inputValue < 1) {
      setCount(1);
    } else {
      setCount(inputValue);
    }
  };

  const addGradeHAndler = () => {
    setGrades((prevState) => {
      const newState = [...prevState];
      newState.push(count);
      return newState;
    });
  };
  const deleteGrade = (index) => {
    setGrades((prevState) => deleteFunctions.deleteItemFromArrayByIndex(prevState, index));
  };

  const editGrade = (index) => {
    setGrades((prevState) => {
      const beforeUpdate = prevState.slice(0, index);
      beforeUpdate.push(2);
      const afterUpdate = prevState.slice(index + 1);
      return beforeUpdate.concat(afterUpdate);
    });
  };

  return (
    <Container>
      <div className="grade-form"></div>
      <h3 className={color}>{count}</h3>

      <button onClick={() => countButtonHandler(-1)} disabled={count <= 1}>
        -1
      </button>
      <button onClick={() => countButtonHandler(-2)} disabled={count <= 2}>
        -2
      </button>
      <button onClick={() => countButtonHandler(-5)} disabled={count <= 5}>
        -5
      </button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={() => countButtonHandler(+5)} disabled={count >= 6}>
        +5
      </button>
      <button onClick={() => countButtonHandler(+2)} disabled={count >= 9}>
        +2
      </button>
      <button onClick={() => countButtonHandler(+1)} disabled={count >= 10}>
        +1
      </button>
      <input value={count} type="number" max="10" min="1" onChange={changeHandler} />

      <div className="grades-list-wrapper">
        <h4>{grades && grades.length > 0 ? "Balai:" : "Nera balu"}</h4>
        {grades && grades.length > 0 && <ul>{grades && grades.map((grade, index) => <GradeItem key={index} index={index} grade={grade} deleteGrade={deleteGrade} editGrade={editGrade} />)}</ul>}
        <button onClick={addGradeHAndler}>Irasyti bala</button>
      </div>
    </Container>
  );
}

export default CaunterPage;
