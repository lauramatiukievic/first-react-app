import "./Footer.css";
import logo from "../../../images/logo-nft.svg";
import facebook from "../../../images/facebook.svg";
import instagram from "../../../images/instagram.svg";
import tiktok from "../../../images/tiktok.svg";
import twiter from "../../../images/twitter.svg";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img className="nft-logo" src={logo} alt="" />
          <p className="about-logo">Exclusive NFT Collection</p>
          <div className="social-media">
            <img src={facebook} alt="" />
            <img src={twiter} alt="" />
            <img src={instagram} alt="" />
            <img src={tiktok} alt="" />
          </div>
        </div>
        <div className="li-section">
          <ul className="footer-section">
            <li className="li-name">About</li>
            <li>About</li>
            <li>Terms</li>
            <li>Legal</li>
          </ul>
          <ul className="footer-section">
            <li className="li-name">NFT</li>
            <li>OpenSea</li>
            <li>Maker</li>
            <li>Learn</li>
          </ul>
          <ul className="footer-section">
            <li className="li-name">Contact</li>
            <li>Press</li>
            <li>Support</li>
          </ul>
          <ul className="footer-section">
            <li className="li-name">Social</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
