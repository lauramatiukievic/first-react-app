function ShoppingItem(props) {
  let { title, done } = props.item;

  let classes = done ? "taken-shop-item" : "";
  return (
    <li onActive={() => props.onClick(props.index)} className={classes}>
      {title}
    </li>
  );
}

export default ShoppingItem;
