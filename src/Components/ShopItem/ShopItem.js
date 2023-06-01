import "./ShopItem.css";
function ShopItem(props) {
  return (
    <div className="container-1">
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
    </div>
  );
}

export default ShopItem;
