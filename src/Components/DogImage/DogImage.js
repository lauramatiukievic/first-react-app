import React, { useEffect, useState } from "react";

function DogImage({ breed }) {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    if (!breed) {
      return;
    }
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => res.json())
      .then((data) => {
        setImgUrl(data.message);
        console.log(data.message);
      });
  }, [breed]);
  return <div>{imgUrl && <img src={imgUrl} alt="dog" />}</div>;
}

export default DogImage;
