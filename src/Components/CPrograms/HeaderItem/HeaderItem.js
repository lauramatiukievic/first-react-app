import "./HeaderItem.css";

function HeaderItem() {
  return (
    <div className="container">
      <div className="main-header-wrapper">
        <div className="logo-wrapper">
          <img alt="" src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg" />
        </div>
        <nav className="main-navigation">
          <ul className="main-menu">
            <li className="menu-item">
              <a href="#">Studentams</a>
            </li>
            <li className="menu-item">
              <a href="#">Verslui</a>
            </li>
            <li className="menu-item">
              <a href="#">Programos</a>
            </li>
            <li className="menu-item">
              <a href="#">Apie mus</a>
            </li>
            <li className="menu-item">
              <a href="#">Naujienos</a>
            </li>
            <li className="menu-item">
              <a href="#">IT testas</a>
            </li>
            <li className="menu-item">
              <a href="#">Kontaktai</a>
            </li>
            <li className="menu-item">
              <a href="#">EN</a>
            </li>
          </ul>
          <a className="button-1" href="tel:+370545431231">
            Skambinti
          </a>
        </nav>
        <button className="menu-button-header">
          <img alt="" className="hamburger" src="img/4572821-200.png" />
        </button>
      </div>
    </div>
  );
}
export default HeaderItem;
