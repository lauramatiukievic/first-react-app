function CatItem({ selectedCat, fact }) {
  return (
    <div>
      <h2>Breed: {selectedCat.breed}</h2>
      <p>Country: {selectedCat.country ? selectedCat.country : "This breed doesn't have country"}</p>
      <p>Origin: {selectedCat.origin ? selectedCat.origin : "This breed doesn't have origin"}</p>
      <p>Coat: {selectedCat.coat ? selectedCat.coat : "This breed doesn't have coat"}</p>
      <p>Pattern: {selectedCat.pattern ? selectedCat.pattern : "This breed doesn't have pattern"}</p>

      <h2>Random Cat Fact</h2>
      <p> {fact}</p>
    </div>
  );
}

export default CatItem;
