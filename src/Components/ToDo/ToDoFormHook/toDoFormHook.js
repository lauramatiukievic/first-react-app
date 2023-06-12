import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export default function ToDoFormHook(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const time = new Date().toLocaleString();
    let id = uuidv4();
    const task = { id, time, title: data.title, isDone: data.isDone, description: data.description, finishTaskTill: data.finishTaskTill };
    props.onCreate(task);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} />
      <input {...register("description")} />

      <input type="date" {...register("finishTaskTill")} />
      <input {...register("isDone")} type="checkbox" />
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ToDoFormHook />, rootElement);
