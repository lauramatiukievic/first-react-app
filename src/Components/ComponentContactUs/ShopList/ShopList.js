import ShopItem from "../ShopItem/ShopItem";
import "./ShopList.css";
function ShopList() {
  return (
    <div className="title-contact">
      <div className="title">
        <h1 className="title-name">Find Us</h1>
      </div>
      <div className="contact-container">
        <ShopItem title="Parduotuve 1" phone="+370938589085" email="info1@parduotuve.lt" address="Rotušės aikštė 1, Kaunas" />
        <ShopItem title="Parduotuve 2" phone="+370555555555" email="info2@parduotuve.lt" address="Rotušės aikštė 1, Vilnius" />
        <ShopItem title="Parduotuve 3" phone="+370938500005" email="info3@parduotuve.lt" address="Rotušės aikštė 1, Klaipeda" />
        <ShopItem title="Parduotuve 4" phone="+370938589005" email="info4@parduotuve.lt" address="Rotušės aikštė 1, Druskininkai" />
      </div>
    </div>
  );
}

export default ShopList;
