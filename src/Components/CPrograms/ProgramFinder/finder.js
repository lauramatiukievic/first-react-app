import "./finder.css";
import Choose from "../Choose/choose";

function Finder(props) {
  return (
    <div className="col-4 row">
      <div className="row">
        <div className="finder col-12">
          <h2>Rastos {props.programCount} programos</h2>
          <Choose />
          <div>
            <label>Laikas</label>
            <div className="time">
              <input className="checkbox" type="checkbox" />
              <label>Dienomis</label>
            </div>
            <div className="time">
              <input className="checkbox" type="checkbox" />
              <label>Vakarais</label>
            </div>
          </div>

          <div className="button">Išvalyti</div>
        </div>
      </div>
    </div>
  );
}
export default Finder;
