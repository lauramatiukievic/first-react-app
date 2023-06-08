import FooterGraphic from "../../../images/design-82a0ada5-644e-4b87-ae41-88faf9684ea3 (2) 1.svg";
import "./NftFooterUpsell.css";

function NftFooterUpsell() {
  return (
    <div className="footer-upsell">
      <div className="footer-upsell-text">
        <p className="footer-upsell-info">Launching-soon</p>
        <h1 className="footer-upsell-name">An NFT like no other</h1>
        <p className="footer-upsell-about-hero">
          Don’t miss out on the release of our new NFT. Sign up below to receive updates
          <span className="hidden-footer-upsell"> when we go live.</span>
        </p>
        <button className="footer-upsell-button">Sign Up</button>
      </div>
      <div className="footer-graphic">
        <img className="footer-girl" src={FooterGraphic} alt="" />
      </div>
    </div>
  );
}

export default NftFooterUpsell;
