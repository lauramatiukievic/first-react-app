import "./nftPress.css";

import logo1 from "../../../images/1.svg";
import logo2 from "../../../images/1 (1).svg";
import logo3 from "../../../images/2.svg";
import logo4 from "../../../images/3.svg";
import logo5 from "../../../images/4.svg";
import logo6 from "../../../images/5.svg";

function NftPress() {
  return (
    <div className="press">
      <img className="press-logo" src={logo1} alt="" />
      <img className="press-logo-hidden" src={logo2} alt="" />
      <img className="press-logo" src={logo3} alt="" />
      <img className="press-logo" src={logo4} alt="" />
      <img className="press-logo" src={logo5} alt="" />
      <img className="press-logo" src={logo6} alt="" />
    </div>
  );
}
export default NftPress;
