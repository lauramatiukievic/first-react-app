import "./ShopItem.css";
import Card from "../Card/card";
function ShopItem(props) {
  return (
    <Card>
      <h2 className="shop">{props.title}</h2>
      <ul className="contact">
        <li className="shop-contact">
          Phone: <a href={`tel:${props.phone}`}>{props.phone}</a>
        </li>
        <li className="shop-contact">
          Email:<a href={`email:${props.email}`}>{props.email}</a>
        </li>
        <li className="shop-contact">
          Adress:
          <a href={`addres:${props.address}`}>{props.address}</a>
        </li>
      </ul>
    </Card>
  );
}

export default ShopItem;
