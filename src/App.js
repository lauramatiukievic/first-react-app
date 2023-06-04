import { Routes, Route, Link, NavLink } from "react-router-dom";
import Programs from "./Pages/Programs/programos";
import DemoPage from "./Pages/DemoPage/DemoPage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Container from "./Components/Container/container";

function App() {
  return (
    <div className="App">
      <Container classes="custom-container">
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
          </ul>
        </nav>
      </Container>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/studentams" element={<h1>Students Page</h1>} />
        <Route path="/verslui" element={<h1>Verslui Page</h1>} />
        <Route path="/programs" element={<h1>Programos Page</h1>} />
        <Route path="/apiemus" element={<h1>Apie Mus Page</h1>} />
        <Route path="/naujienos" element={<h1>Naujienos Page</h1>} />
        <Route path="/ittestas" element={<h1>It Testas Page</h1>} />
        <Route path="/kontaktai" element={<h1>Kontaktai Page</h1>} />
        <Route path="/en" element={<h1>Angliskai Page</h1>} />

        <Route
          path="*"
          element={
            <div>
              <h1>404 error. Page not found</h1>
              <Link to="/">Go Back to home page</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
