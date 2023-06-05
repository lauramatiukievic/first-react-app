import "./HeroSection.css";
import Graphic from "../../../images/graphic.svg";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <p className="info">Launching-soon</p>
        <h1 className="hero-name">An NFT like no other</h1>
        <p className="about-hero">Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live.</p>
        <button className="header-button">Sign Up</button>
      </div>
      <div className="her-graphic">
        <img className="nft-monster" src={Graphic} alt="" />
      </div>
    </div>
  );
}
export default HeroSection;
