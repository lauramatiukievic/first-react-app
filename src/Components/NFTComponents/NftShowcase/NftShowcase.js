import "./NftShowcase.css";
import NftDolls from "../NftDolls/NftDolls";

function NftShowcase() {
  return (
    <div className="showcase">
      <h2 className="showcase-name">LE Super Rare Auction</h2>
      <p className="about-showcase">
        We have released four limited edition NFTs early which can be bid on via <span className="about-showcase-underline">OpenSea.</span>
      </p>

      <NftDolls />
    </div>
  );
}
export default NftShowcase;
