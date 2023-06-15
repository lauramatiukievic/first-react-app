import { NavLink } from "react-router-dom";
import "./navigation.css";

function Navigation() {
  return (
    <nav className="main-navigation">
      <ul className="link-list">
        <li className="nav-list">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/demo" className="nav-link">
            DemoPage
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/contact-us" className="nav-link">
            ContactUs
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/programs" className="nav-link">
            Programs
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/nft" className="nav-link">
            Nft
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/counter" className="nav-link">
            Caunter Page
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/shop" className="nav-link">
            Shop Page
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/cities" className="nav-link">
            Cities Page
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/todo" className="nav-link">
            To Do
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/app/chucknorrisjoke" className="nav-link">
            Chuck Norris Joke
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/app/dogbreed" className="nav-link">
            Dog Breed
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/app/aipage" className="nav-link">
            Ai Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
