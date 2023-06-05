import "./NftDollsItem.css";

function NftDollsItem(props) {
  let { showcaseLogo, text, position, dollTitle, moneyLogo, money, number, day } = props.data;
  return (
    <div className="about-doll">
      <div className="doll">
        <img className="rectangle" src={showcaseLogo} alt="" />
      </div>
      <div className="doll-info">
        <div className="doll-info-about">
          <p className="orange-text">{text}</p>
          <p className="position">{position}</p>
        </div>
        <div className="doll-info-about">
          <p className="doll-title">{dollTitle}</p>
          <div className="money-logo">
            <img className="nft-money-logo" src={moneyLogo} alt="" />
            <p className="money">{money}</p>
          </div>
        </div>
        <div className="doll-info-about">
          <p className="doll-number">{number}</p>
          <p className="day">{day}</p>
        </div>
      </div>
    </div>
  );
}
export default NftDollsItem;
