import ProgramItem from "../ProgramItem/programItem";

function ProgramsList(props) {
  const programItems = props.programs.map((program, index) => <ProgramItem key={index} data={program} />);
  return (
    <div className="col-8 m-0 p-0">
      <div className="row gap-3">{programItems}</div>
    </div>
  );
}

export default ProgramsList;
