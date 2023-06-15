import AiForm from "../../Components/AiForm/AiForm";
import AiItem from "../../Components/AiItem/AiItem";
import Container from "../../Components/Container/container";
import { useState } from "react";

function AiPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationalize, setNationalize] = useState([]);
  const [gender, setGender] = useState("");
  let getInfo = (event, searchName) => {
    event.preventDefault();
    setName(searchName);
    getAge();
    getNationalize();
    getGender();
  };

  let getAge = (searchName) => {
    fetch(`https://api.agify.io?name=${searchName}
      `)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.age);
        setAge(data.age);
      });
  };
  let getNationalize = (searchName) => {
    fetch(`https://api.nationalize.io?name=${searchName}`)
      .then((res) => res.json())
      .then((data) => {
        setNationalize(data.country);
        console.log(data.country);
      });
  };
  let getGender = (searchName) => {
    fetch(`https://api.genderize.io?name=${searchName}`)
      .then((res) => res.json())
      .then((data) => {
        setGender(data.gender);
        console.log(data.gender);
      });
  };
  let item = { name, age, nationalize, gender };

  return (
    <Container>
      <AiForm onSubmit={getInfo}></AiForm>
      <AiItem item={item}></AiItem>
    </Container>
  );
}

export default AiPage;
