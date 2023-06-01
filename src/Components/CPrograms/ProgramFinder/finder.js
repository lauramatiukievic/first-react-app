function Finder() {
  return (
    <div className="col-4 row">
      <div className="row">
        <div className="finder col-12">
          <h2>Rastos 48 programos</h2>
          <div className="choose">
            <h3>Tema</h3>
            <div className="all-selector">
              <select defaultValue={"visos"}>
                <option className="selector" value="visos">
                  VISOS
                </option>
              </select>
            </div>
          </div>

          <div className="choose">
            <h3>Vieta</h3>
            <div className="all-selector">
              <select defaultValue={"visos"}>
                <option className="selector" value="visos">
                  VISOS
                </option>
              </select>
            </div>
          </div>
          <div className="choose">
            <h3>Tipas</h3>
            <div className="all-selector">
              <select defaultValue={"visos"}>
                <option className="selector" value="visos">
                  VISI
                </option>
              </select>
            </div>
          </div>
          <div>
            <h3>Laikas</h3>
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
