import CitiesItem from "../../Components/CitieItem/CitieItem";
import "./cities.css";
import Container from "../../Components/Container/container";
import { useState } from "react";

import deleteItemFromArrayByIndex from "../../Functions/deleteItem";

function CitiesPage() {
  const cities = [
    {
      name: "Vilnius",
      population: 500000,
      location: {
        continent: "Europa",
        country: "Lietuva",
      },
      attractions: ["gedimino pilis", "mo muziejus", "rotuse", "katedra"],
      isCapital: true,
    },
    {
      name: "Kaunas",
      population: 100000,
      location: {
        continent: "Europa",
        country: "Lietuva",
      },
      attractions: ["stadijonas"],
      isCapital: false,
    },
    {
      name: "Druskininkai",
      population: 60000,
      location: {
        continent: "Europa",
        country: "Lietuva",
      },
      attractions: ["dineikos parkas", "aleja", "gydyklo", "spa"],
      isCapital: false,
    },
    {
      name: "Paryzius",
      population: 500000,
      location: {
        continent: "Europa",
        country: "Prancuzija",
      },
      attractions: ["eifelio bokstas", "luvras"],
      isCapital: true,
    },
    {
      name: "Kairas",
      population: 500000,
      location: {
        continent: "Afrika",
        country: "Egiptas",
      },
      attractions: ["piramides", "dykuma"],
      isCapital: false,
    },
    {
      name: "Ryga",
      population: 500000,
      location: {
        continent: "Europa",
        country: "Latvija",
      },
      attractions: ["muziejai", "senamiestis"],
      isCapital: true,
    },
    {
      name: "Vilnius",
      population: 500000,
      location: {
        continent: "Europa",
        country: "Lietuva",
      },
      attractions: [],
      isCapital: true,
    },
    {
      name: "Vilnius",
      population: 500000,
      location: {
        continent: "Europa",
        country: "Lietuva",
      },
      attractions: ["gedimino pilis"],
      isCapital: true,
    },
    {
      name: "Vilnius",
      population: 500000,
      location: {
        continent: "Europa",
        country: "Lietuva",
      },
      attractions: [],
      isCapital: true,
    },
  ];

  const [items, setItems] = useState(cities);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [currentCityIndex, setCurrentCityIndex] = useState();

  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [attractions, setAttractions] = useState("");
  const [isCapital, setIsCapital] = useState(false);

  let cityItemAdd = (event) => {
    event.preventDefault();
    const attractionList = getAttractions();
    debugger;
    const newCity = { name: name, population: Number(population), location: { continent: continent, country: country }, attractions: attractionList, isCapital: isCapital };
    const newItems = [...items, newCity];
    setItems(newItems);
    clearFields();
  };

  let clearFields = () => {
    setName("");
    setPopulation("");
    setContinent("");
    setCountry("");
    setAttractions("");
    setIsCapital(false);
  };

  let getAttractions = () => {
    return attractions.split(",");
  };

  let cityNameChange = (event) => {
    setName(event.target.value);
  };
  let poplationChange = (event) => {
    setPopulation(event.target.value);
  };

  let continentChange = (event) => {
    setContinent(event.target.value);
  };
  let countryChange = (event) => {
    setCountry(event.target.value);
  };
  let attractionChange = (event) => {
    setAttractions(event.target.value);
  };
  let isCapitalChange = (event) => {
    setIsCapital(event.target.checked);
  };

  const deleteCityHandler = (index) => {
    setItems((prevState) => deleteItemFromArrayByIndex(prevState, index));
  };

  const setCityData = (index) => {
    setShowSaveButton(true);
    setCurrentCityIndex(index);
    const city = items[index];
    setName(city.name);
    setPopulation(city.population);
    setContinent(city.location.continent);
    setCountry(city.location.country);
    setAttractions(city.attractions.join(","));
    setIsCapital(city.isCapital);
  };

  const editCityHandler = (index) => {
    setItems((prevState) => {
      setShowSaveButton(false);
      const beforeUpdate = prevState.slice(0, index);
      const updatedCity = {
        name: name,
        population: population,
        location: {
          continent: continent,
          country: country,
        },
        attractions: getAttractions(),
        isCapital: isCapital,
      };
      beforeUpdate.push(updatedCity);
      const afterUpdate = prevState.slice(index + 1);
      const updatedCities = beforeUpdate.concat(afterUpdate);

      return updatedCities;
    });

    clearFields();
  };

  const getClassName = (index) => {
    if (items.length % 2 === 0) {
      return "smallCityItem";
    } else if (items.length - 1 === index) {
      return "largeCityItem";
    } else {
      return "smallCityItem";
    }
  };
  const cityItems = items.map((city, index) => <CitiesItem className={getClassName(index)} key={index} data={city} onDeleteCity={deleteCityHandler} index={index} onEditCity={setCityData} />);

  return (
    <Container>
      <form className="city-form" onSubmit={cityItemAdd}>
        <div className="form-input">
          <label className="input-title" htmlFor="city-name">
            City
          </label>
          <input className="input-select-data" type="text" value={name} id="city-name" placeholder="Write city:" onChange={cityNameChange} />
        </div>
        <div className="form-input">
          <label className="input-title" htmlFor="city-population">
            Population
          </label>
          <input className="input-select-data" step="1000" type="number" value={population} id="city-population" placeholder="Numbers" onChange={poplationChange} />
        </div>
        <div className="form-input">
          <label className="input-title" htmlFor="city-continent">
            Continent
          </label>
          <input className="input-select-data" type="text" value={continent} id="city-continent" placeholder="Witch Continent" onChange={continentChange} />
        </div>
        <div className="form-input">
          <label className="input-title" htmlFor="city-country">
            Country
          </label>
          <input className="input-select-data" type="text" value={country} id="city-country" placeholder="Write country here" onChange={countryChange} />
        </div>
        <div className="form-input">
          <label className="input-title" htmlFor="city-attraction">
            Attraction
          </label>
          <textarea className="input-select-data" type="text" value={attractions} id="city-attraction" placeholder="Add attraction here" onChange={attractionChange} />
        </div>
        <div className="form-input">
          <label className="input-title" htmlFor="capital">
            Capital
          </label>
          <input className="input-select-data" type="checkbox" name="isCapital" value={isCapital} id="capital" onChange={isCapitalChange} checked={isCapital} />
        </div>
        <input className="submit-data" type="submit" value="submit" />

        {showSaveButton && (
          <button className="save-data" onClick={() => editCityHandler(currentCityIndex)}>
            Save
          </button>
        )}
      </form>
      <div className="cities-content">{cityItems} </div>
    </Container>
  );
}

export default CitiesPage;
