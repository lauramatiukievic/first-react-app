import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "../../Components/Container/container";
import CatItem from "../../Components/CatItem.js/catItem";
function CatFactPage() {
  const [cats, setCats] = useState([]);
  const [fact, setFact] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedCat, setSelectedCat] = useState("");

  const handleSelect = (breed) => {
    setSelectedBreed(breed);
    fetch(`https://catfact.ninja/fact`)
      .then((res) => res.json())
      .then((dataFact) => {
        console.log(dataFact.fact);
        setFact(dataFact.fact);
      });
    const catByBreed = cats.filter((c) => c.breed === breed)[0];
    setSelectedCat(catByBreed);
  };

  useEffect(() => {
    fetch(`https://catfact.ninja/breeds`)
      .then((res) => res.json())
      .then((dataCat) => {
        const cats = dataCat.data;

        setCats(cats);
      });
  }, []);

  let breedsOptionEl = cats.map((cat) => {
    return (
      <option key={uuidv4()} value={cat.breed}>
        --- {cat.breed}
      </option>
    );
  });

  if (cats.length === 0) {
    return "";
  }

  return (
    <Container>
      <div>
        <label>Select a category</label>
        <select value={selectedBreed} onChange={(e) => handleSelect(e.target.value)}>
          <option value="" disabled>
            Select a breed
          </option>

          {breedsOptionEl}
        </select>
      </div>
      {selectedCat && <CatItem selectedCat={selectedCat} fact={fact}></CatItem>}
    </Container>
  );
}

export default CatFactPage;
