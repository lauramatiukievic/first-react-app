import React, { useEffect, useState } from "react";
import Container from "../../Components/Container/container";
import { v4 as uuidv4 } from "uuid";

function DogForm({ onBreedSelect, selectedBreed }) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const breedsData = data.message;
        const breedsArr = [];
        for (let mainBreed in breedsData) {
          const subBreeds = breedsData[mainBreed];
          const breedObj = { mainBreed, subBreeds };

          console.log(breedsData[mainBreed]);
          breedsArr.push(breedObj);
        }

        console.log(data.message);
        setBreeds(breedsArr);
      });
  });

  const breedsOptionEL = breeds.map((breed) => {
    const mainBreed = breed.mainBreed;
    const subBreeds = breed.subBreeds;

    if (subBreeds.length > 0) {
      const subBreedsOptionEl = subBreeds.map((subBreed) => (
        <option key={uuidv4()} value={`${mainBreed}/${subBreed}`}>
          {mainBreed} ({subBreed})
        </option>
      ));

      return subBreedsOptionEl;
    }
    return (
      <option key={uuidv4()} value={mainBreed}>
        {mainBreed}
      </option>
    );
  });

  if (breeds.length === 0) {
    return "";
  }

  return (
    <Container>
      <form>
        <label>Select a category</label>
        <select value={selectedBreed} onChange={(e) => onBreedSelect(e.target.value)}>
          <option value="" disabled>
            Select a breed
          </option>
          {breedsOptionEL}
        </select>
      </form>
    </Container>
  );
}

export default DogForm;
