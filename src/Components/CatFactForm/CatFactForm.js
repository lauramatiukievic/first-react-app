import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
function CatFactForm() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");

  const handleSelect = (cat) => {
    setSelectedCat(JSON.parse(cat));
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
      <option key={uuidv4()} value={JSON.stringify(cat)}>
        --- {cat.breed}
      </option>
    );
  });

  if (cats.length === 0) {
    return "";
  }

  return (
    <div>
      <form>
        <label>Select a category</label>
        <select onChange={(e) => handleSelect(e.target.value)}>
          <option value="" disabled>
            Select a breed
          </option>

          {breedsOptionEl}
        </select>
      </form>
      <div>
        <h2>Breed: {selectedCat.breed}</h2>
        <p>Country: {selectedCat.country ? selectedCat.country : "This breed doesn't have country"}</p>
        <p>Origin: {selectedCat.origin ? selectedCat.origin : "This breed doesn't have origin"}</p>
        <p>Coat: {selectedCat.coat ? selectedCat.coat : "This breed doesn't have coat"}</p>
        <p>Pattern: {selectedCat.pattern ? selectedCat.pattern : "This breed doesn't have pattern"}</p>
      </div>
    </div>
  );
}

export default CatFactForm;
