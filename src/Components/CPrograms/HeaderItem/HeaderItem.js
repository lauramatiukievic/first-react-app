import "./HeaderItem.css";
import Hamburger from "../../../images/4572821-200.png";
import { NavLink } from "react-router-dom";

function HeaderItem() {
  return (
    <div className="main-header col-12 text-center">
      <div className="header-container">
        <div className="main-header-wrapper">
          <div className="logo-wrapper">
            <img alt="" src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg" />
          </div>
          <nav className="main-navigation">
            <ul className="main-menu">
              <li className="menu-item">
                <NavLink to="/studentams" className="menu-item">
                  Studentams
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/verslui" className="menu-item">
                  Verslui
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/programs" className="menu-item">
                  Programos
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/apiemus" className="menu-item">
                  Apie Mus
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/naujienos" className="menu-item">
                  Naujienos
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/ittestas" className="menu-item">
                  IT testas
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/kontaktai" className="menu-item">
                  Kontaktai
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/en" className="menu-item">
                  En
                </NavLink>
              </li>
            </ul>
            <a className="button-1" href="tel:+370545431231">
              Skambinti
            </a>
          </nav>
          <button className="menu-button-header">
            <img alt="" className="hamburger" src={Hamburger} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeaderItem;
