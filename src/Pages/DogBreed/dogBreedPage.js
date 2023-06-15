import React, { useState } from "react";
import Container from "../../Components/Container/container";
import DogForm from "../../Components/DogForm/DogForm";
import DogImage from "../../Components/DogImage/DogImage";

function DogBreedPage() {
  const [selectedBreed, setSelectedBreed] = useState("");
  const handleSelect = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <Container>
      <DogForm onBreedSelect={handleSelect} selectedBreed={selectedBreed}></DogForm>
      <DogImage breed={selectedBreed}></DogImage>
    </Container>
  );
}

export default DogBreedPage;
