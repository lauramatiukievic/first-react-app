import React from "react";
import Container from "../Container/container";

function AiItem({ item }) {
  let { name, age, nationalize, gender } = item;
  return (
    <Container>
      <div>
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

export default AiItem;
