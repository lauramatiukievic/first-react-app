// import "./App.css";

import ShopList from "../../Components/ShopList/ShopList";
import Map from "../../Components/Map/Map";
import "./contact.us.css";

function ContactUs() {
  return (
    <div className="container">
      <div className="content">
        <ShopList />
        <Map />
      </div>
    </div>
  );
}

export default ContactUs;
