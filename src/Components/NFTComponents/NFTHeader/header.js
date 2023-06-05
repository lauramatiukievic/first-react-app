import "./header.css";
import Logo from "../../../images/logo-nft.svg";

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img className="nft-logo" src={Logo} alt="" />
      </div>
      <div className="right-header">
        <ul className="header-category">
          <li className="gray-title">Features</li>
          <li className="gray-title">About</li>
          <li className="gray-title">Launch</li>
          <li className="purple-title">Sign Up</li>
        </ul>
      </div>
      <div className="header-hamburger">
        <img className="hamburger" src="nft-logo/menu.svg" alt="" />
      </div>
    </header>
  );
}

export default Header;
