import svg from "../../../images/download.svg";
import svgMoon from "../../../images/moon.svg";
import ProgramCard from "../ProgramCard/programCard";

import "./programItem.css";

function ProgramItem(props) {
  let { icontitle, srclogo, title, p, level, time } = props.data;

  return (
    <ProgramCard className="col">
      {icontitle && <div className="right-icon">{icontitle}</div>}

      <div className="program-icon">
        <img alt="logo" className="icon" src={srclogo} />
      </div>
      <h2>{title}</h2>
      <p className="about">{p}</p>
      <div className="icons-container">
        <div className="icons">
          <div className="mini-icon">
            <img className="mini-icon-logo" alt="" src={svg} />
          </div>
          <span>{level}</span>
        </div>
        <div className="icons">
          <div className="mini-icons">
            <img className="mini-icons-logo" alt="" src={svgMoon} />
          </div>
          <span>{time}</span>
        </div>
      </div>
    </ProgramCard>
  );
}

export default ProgramItem;
