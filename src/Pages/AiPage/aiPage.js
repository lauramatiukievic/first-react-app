import React, { useState } from "react";
import Container from "../../Components/Container/container";

function AiPage() {
  const [searchName, setSearchName] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationalize, setNationalize] = useState([]);
  const [gender, setGender] = useState("");
  let nameChange = (event) => {
    setSearchName(event.target.value);
  };

  let getInfo = (event) => {
    event.preventDefault();
    setName(searchName);
    getAge();
    getNationalize();
    getGender();
    clearFields();
  };
  let clearFields = () => {
    setSearchName("");
  };
  let getAge = () => {
    fetch(`https://api.agify.io?name=${searchName}
  `)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.age);
        setAge(data.age);
      });
  };
  let getNationalize = () => {
    fetch(`https://api.nationalize.io?name=${searchName}`)
      .then((res) => res.json())
      .then((data) => {
        setNationalize(data.country);
        console.log(data.country);
      });
  };
  let getGender = () => {
    fetch(`https://api.genderize.io?name=${searchName}`)
      .then((res) => res.json())
      .then((data) => {
        setGender(data.gender);
        console.log(data.gender);
      });
  };

  return (
    <Container>
      <div>
        <form onSubmit={getInfo}>
          <label>Write Name</label>
          <input type="text" value={searchName} placeholder="Write name here" onChange={nameChange}></input>
          <button>Submit</button>
        </form>
        <p>Name: {name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <p>Age: {age}</p>
        <p>Nationality:</p>{" "}
        <ul>
          {" "}
          {nationalize.map((country, index) => (
            <li key={index}>
              {country.country_id} {country.probability}
            </li>
          ))}
        </ul>
        <p>Gender: {gender.charAt(0).toUpperCase() + gender.slice(1)}</p>
      </div>
    </Container>
  );
}

export default AiPage;
