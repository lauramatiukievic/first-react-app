import ProgramsContent from "../../Components/CPrograms/ProgramContent/programsContent";
import Banner from "../../Components/CPrograms/Banner/Banner";
import HeaderItem from "../../Components/CPrograms/HeaderItem/HeaderItem";

import "../Programs/programos.css";
function Programs() {
  return (
    <div className="programs-content">
      <HeaderItem />
      <main className="main-container col-12">
        <Banner />
        <ProgramsContent />
      </main>
    </div>
  );
}

export default Programs;
