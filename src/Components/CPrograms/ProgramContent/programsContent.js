import Finder from "../ProgramFinder/finder";
import ProgramsList from "../ProgramsList/programsList";
import "./programscontent.css";
function ProgramsContent() {
  return (
    <div className="all-container m-0 p-0 -xxl">
      <div className="programs-content row g-3 m-0 p-0">
        <Finder />
        <ProgramsList />
      </div>
    </div>
  );
}
export default ProgramsContent;
