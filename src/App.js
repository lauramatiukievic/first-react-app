import { Routes, Route, Link } from "react-router-dom";
import Programs from "./Pages/Programs/programos";
import DemoPage from "./Pages/DemoPage/DemoPage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Container from "./Components/Container/container";
import NftPage from "./Pages/NFTPage/NftPage";
import Navigation from "./Components/Navigation/navigation";
import CaunterPage from "./Pages/CounterPage/Counter";
import ShoppingPage from "./Pages/ShoppingPage/shoppingPage";
import CitiesPage from "./Pages/CitiesPage/cities";

import ToDoPage from "./Pages/TO DO LIST/toDoPage.js";

function App() {
  return (
    <div className="App">
      <Container classes="custom-container">
        <Navigation />
      </Container>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/nft" element={<NftPage />} />
        <Route path="/counter" element={<CaunterPage />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/todo" element={<ToDoPage />} />
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
