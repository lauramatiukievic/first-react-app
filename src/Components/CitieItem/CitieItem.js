import "./CitieItem.css";
function CitiesItem(props) {
  let { name, population, location, attractions, isCapital } = props.data;

  let classes = isCapital ? "capital" : "";
  const getName = () => {
    if (isCapital) {
      return `Capital(${name}) `;
    } else {
      return name;
    }
  };

  const getAboutCapital = () => {
    if (isCapital) {
      return `${name} is the capital of ${location.country}`;
    } else {
      return "";
    }
  };

  let touristPlace = () =>
    attractions.map((attraction, index) => {
      return (
        <li className="attraction" key={index}>
          {attraction}
        </li>
      );
    });

  const getPlaces = () => {
    if (touristPlace().length === 1) {
      return `Main Tourist attraction of ${name} is:`;
    } else if (touristPlace().length > 1) {
      return `Main Tourist attractions of ${name} are:`;
    } else {
      return `No attraction in ${name} :(`;
    }
  };

  return (
    <div className={`cities ${props.className}`}>
      <h2 className={classes}>{getName()}</h2>
      <p className="townName">
        {name} city is located in {location.continent}, {location.country} and has population of ${population} people.
      </p>
      <p>{getAboutCapital()}</p>
      <h3 className="attractionsTitle"> {getPlaces()}</h3>
      <ul className="popularPlace">{touristPlace()}</ul>
      <button className="delete-city" onClick={() => props.onDeleteCity(props.index)}>
        Delete City
      </button>
      <button className="edit-city" onClick={() => props.onEditCity(props.index)}>
        Edit City
      </button>
    </div>
  );
}
export default CitiesItem;
