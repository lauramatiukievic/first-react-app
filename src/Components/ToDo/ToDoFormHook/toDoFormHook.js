import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

export default function ToDoFormHook(props) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (props.editData) {
      const defaultValues = {
        id: props.editData.id,
        time: props.editData.time,
        title: props.editData.title,
        description: props.editData.description,
        finishTaskTill: props.editData.finishTaskTill,
        isDone: props.editData.done,
        updateDate: new Date().toLocaleString(),
      };
      reset({ ...defaultValues });
    } else {
      const defaultValues = {
        time: null,
        title: "",
        description: "",
        finishTaskTill: "",
        isDone: false,
        updateDate: null,
      };
      reset({ ...defaultValues });
    }
  }, [props.editData, reset]);

  const onSubmit = (data) => {
    if (!props.editData) {
      const id = uuidv4();
      const time = new Date().toLocaleString();
      const task = { id: id, time, title: data.title, description: data.description, finishTaskTill: data.finishTaskTill, isDone: data.isDone, updateDate: data.updateDate };
      props.onCreate(task);
    } else {
      let id = data.id;
      let title = data.title;
      let description = data.description;
      let finishTaskTill = data.finishTaskTill;
      let updateDate = data.updateDate;

      props.onEdit(id, title, description, finishTaskTill, updateDate);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} />
      <input {...register("description")} />

      <input type="date" {...register("finishTaskTill")} />

      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ToDoFormHook />, rootElement);
