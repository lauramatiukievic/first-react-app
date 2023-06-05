import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="main-navigaition">
      <ul>
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
      </ul>
    </nav>
  );
}
export default Navigation;
