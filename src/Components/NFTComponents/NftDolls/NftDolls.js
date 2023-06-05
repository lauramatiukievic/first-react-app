import showcaseDoll1 from "../../../images/Rectangle 5.svg";
import showcaseMoney1 from "../../../images/image 2.svg";
import showcaseDoll2 from "../../../images/Rectangle 5 (1).svg";
import showcaseDoll3 from "../../../images/Rectangle 5 (2).svg";
import showcaseDoll4 from "../../../images/Rectangle 5 (3).svg";
import NftDollsItem from "../NftDollsItem/NftDollsItem";

const dolls = [
  {
    index: "",
    showcaseLogo: showcaseDoll1,
    text: "Gloop series",
    position: "Top Bid",
    dollTitle: "Purple Man",
    moneyLogo: showcaseMoney1,
    money: "2.99 ETH",
    number: "#12983",
    day: "1 Day Left",
  },
  { showcaseLogo: showcaseDoll2, text: "Gloop series", position: "Top Bid", dollTitle: "Beige", moneyLogo: showcaseMoney1, money: "2.99 ETH", number: "#12983", day: "1 Day Left" },
  { showcaseLogo: showcaseDoll3, text: "Gloop series", position: "Top Bid", dollTitle: "Red Man", moneyLogo: showcaseMoney1, money: "2.99 ETH", number: "#12983", day: "1 Day Left" },
  { showcaseLogo: showcaseDoll4, text: "Gloop series", position: "Top Bid", dollTitle: "Green", moneyLogo: showcaseMoney1, money: "2.99 ETH", number: "#12983", day: "1 Day Left" },
];

function NftDolls() {
  const filtredDolls = dolls.map((doll, index) => <NftDollsItem key={index} data={doll} />);
  return <div className="nft-dolls">{filtredDolls}</div>;
}
export default NftDolls;
