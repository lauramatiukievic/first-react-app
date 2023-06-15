import Container from "../Container/container";
import React, { useState } from "react";

function AiForm({ onSubmit }) {
  const [searchName, setSearchName] = useState("");

  let nameChange = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <Container>
      {" "}
      <form
        onSubmit={(event) => {
          onSubmit(event, searchName);
          setSearchName("");
        }}
      >
        <label>Write Name</label>
        <input type="text" value={searchName} placeholder="Write name here" onChange={nameChange}></input>
        <button>Submit</button>
      </form>
    </Container>
  );
}

export default AiForm;
