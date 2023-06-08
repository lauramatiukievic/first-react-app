import Container from "../../Components/Container/container";
import React, { useState } from "react";
import ShoppingItem from "../../Components/CPrograms/ShoppingItem/ShoppingItem";
import "./shoppingPage.css";

function ShoppingPage() {
  const listItem = [
    { title: "Morka", done: false },
    { title: "Bananas", done: true },
    { title: "Obuolys", done: true },
    { title: "Vynuoge", done: true },
    { title: "Sultys", done: false },
  ];
  const [items, setItems] = useState(listItem);
  const [title, setTitle] = useState("");

  let shopItemChange = (event) => {
    setTitle(event.target.value);
  };

  let shopItemAdd = (event) => {
    event.preventDefault();
    const newItems = [...items, { title: title, done: false }];
    setItems(newItems);
    setTitle("");
  };

  const taskDone = (index) => {
    setItems((previousItems) => {
      const shopitem = previousItems[index];

      const newShopItem = { ...shopitem };

      newShopItem.done = !newShopItem.done;
      return previousItems.toSpliced(index, 1, newShopItem);
    });
  };

  return (
    <Container>
      <div>
        <form onSubmit={shopItemAdd}>
          <input type="text" value={title} onChange={shopItemChange} />
          <button type="submit">Prideti</button>
        </form>
      </div>
      <h2>{items && items.length > 0 ? "Pirkiniu sarasas" : "Pirkiniu sarasas tuscias"}</h2>
      <ul>
        {items.map((item, index) => {
          return <ShoppingItem onActive={taskDone} item={item} index={index} key={index} />;
        })}
      </ul>
    </Container>
  );
}

export default ShoppingPage;

// 2. ShoppingList komponente sukurti masyvą state (naudojant useState) su penkių pirkinių sąrašu. Kiekvienas pirkinys turi būti objektas ir turėti properties:
// 2.1 title (string tipo)
// 2.2. done (boolean tipo)

// 3.1. Jeigu pirkinių masyvas neturi nei vieno nario, tai į ekrane parašyti: „Your shopping list is empty."
// 3.2. Jeigu pirkinių masyve yra bent vienas narys, tai kiekvieną nario title property išvesti į ekraną panaudojant
// ShoppingItem komponentą jam paduodant informaciją per props.
