import ChooseItem from "../ChooseItem/ChooseItem";

const chooseData = [
  {
    index: "",
    labelTitle: "Tema",
    option: "Visos",
  },
  { index: "", labelTitle: "Vieta", option: "Visos" },
  { index: "", labelTitle: "Tipas", option: "Visi" },
];

function Choose() {
  const filtredChoose = chooseData.map((choose, index) => <ChooseItem key={index} data={choose} />);
  return <div>{filtredChoose}</div>;
}
export default Choose;
