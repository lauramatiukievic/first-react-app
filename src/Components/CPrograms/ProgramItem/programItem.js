import svg from "../../../images/download.svg";
import svgMoon from "../../../images/moon.svg";

import "./programItem.css";

function ProgramItem(props) {
  return (
    <div className="programs col">
      <div className="right-pink">
        <div className="right-icon">{props.icontitle}</div>
      </div>
      <div className="program-icon">
        <img alt="logo" className="icon" src={props.srclogo} />
      </div>
      <h2>{props.title}</h2>
      <p className="about">{props.p}</p>
      <div className="icons-container">
        <div className="icons">
          <div className="mini-icon">
            <img alt="" src={svg} />
            <h4>1 LYGIS</h4>
          </div>
        </div>
        <div className="icons">
          <div className="mini-icons">
            <img alt="" src={svgMoon} />
          </div>
          <h4>VAKARAIS</h4>
        </div>
      </div>
    </div>
  );
}

export default ProgramItem;
