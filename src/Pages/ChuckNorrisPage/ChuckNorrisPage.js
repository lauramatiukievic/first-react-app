import React, { useEffect, useState } from "react";
import Container from "../../Components/Container/container";

function ChuckNorrisPage() {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("");
  const [searchJoke, setSearchJoke] = useState("");

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/categories`)
      .then((res) => res.json())
      .then((categoriesData) => {
        setCategories(categoriesData);
        console.log(categoriesData);
      });
  }, []);
  useEffect(() => {
    const categoryParam = selectedCategories ? `?category=${selectedCategories}` : "";
    fetch(`https://api.chucknorris.io/jokes/random` + categoryParam)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.value);
      });
  }, [selectedCategories]);

  let getJokeHandler = (event) => {
    event.preventDefault();
    const searchParam = searchJoke ? `?query=${searchJoke}` : "";
    fetch(`https://api.chucknorris.io/jokes/search` + searchParam)
      .then((res) => {
        if (!res.ok) {
          throw new Error("No Jokes :(");
        }
        return res.json();
      })

      .then((searchData) => {
        const total = searchData.total;
        const index = Math.floor(Math.random() * total);
        const joke = searchData.result[index];
        console.log(joke.value);

        setJoke(joke.value);
      })
      .catch((error) => {
        setJoke(error.message);
      });
  };

  const categorySelectHandler = (event) => setSelectedCategories(event.target.value);
  const searchInputHandler = (event) => setSearchJoke(event.target.value);

  return (
    <Container>
      <div>
        <form>
          <select onChange={categorySelectHandler} defaultValue="">
            <option value="" disabled>
              Pick Category{" "}
            </option>
            {categories.map((category, index) => (
              <option value={category} key={index}>
                ---{category}
              </option>
            ))}
          </select>
          <input type="text" value={searchJoke} onChange={searchInputHandler} />
          <button onClick={getJokeHandler}>Search for a Joke</button>
        </form>
        <p>{joke}</p>
      </div>
    </Container>
  );
}

export default ChuckNorrisPage;
