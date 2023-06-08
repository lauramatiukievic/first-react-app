function ChooseItem(props) {
  let { labelTitle, option } = props.data;
  return (
    <div className="choose">
      <label>{labelTitle}</label>
      <div className="all-selector">
        <select defaultValue={"visos"}>
          <option className="selector" value="visos">
            {option}
          </option>
        </select>
      </div>
    </div>
  );
}
export default ChooseItem;
