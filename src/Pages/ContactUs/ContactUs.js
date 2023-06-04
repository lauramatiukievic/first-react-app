// import "./App.css";
import Container from "../../Components/Container/container";
import ShopList from "../../Components/ComponentContactUs/ShopList/ShopList";
import Map from "../../Components/ComponentContactUs/Map/Map";
import "./contact.us.css";

function ContactUs() {
  return (
    <Container>
      <div className="content">
        <ShopList />
        <Map />
      </div>
    </Container>
  );
}

export default ContactUs;
