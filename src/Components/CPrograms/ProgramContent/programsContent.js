import Finder from "../ProgramFinder/finder";
import ProgramsList from "../ProgramsList/programsList";
import "./programscontent.css";

import logo from "../../../images/salesforce.svg";
import logo2 from "../../../images/python.svg";
import logo3 from "../../../images/frontend.svg";

const programsData = [
  {
    key: "",
    srclogo: logo,
    icontitle: "Naujas",
    title: "„Salesforce“ CRM – pradedančių",
    p: "„Salesforce“ – pasaulyje lyderiaujanti ryšių su klientais palaikymo platforma, kuria pasitiki 150 tūkstančių įmonių: „Coca cola“, „Toyota“, „Amazon“, „Unilever“ ir kiti rinkos lyderiai. Ši įmonės operacinė sistema.",
    level: "1 lygis",
    time: "Vakarais",
  },
  {
    key: "",
    srclogo: logo2,
    icontitle: "Finansuojama Uzt",
    title: "Python – pradedantiesiems užimtiems asmenims (223002626)",
    p: "Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba. Python kalba parašytas kodas yra itin aiškiai.",
    level: "Finansuojama-dirbantiems",
    time: "dienomis",
  },
  {
    key: "",
    srclogo: logo3,
    icontitle: "Naujas",
    title: "Frontend Serverless (223002583)",
    p: "Front-end – apima viską, ką mato vartotojas. Kurso metu studentai mokosi kurti turinį bei dizainą visiems ekrano dydžiams.",
    level: "1 lygis",
    time: "vakarais",
  },
  {
    key: "",
    srclogo: logo2,
    icontitle: "Finansuojama Uzt",
    title: "Python – pradedantiesiems užimtiems asmenims (223002626)",
    p: "Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba. Python kalba parašytas kodas yra itin aiškiai.",
    level: "Finansuojama-dirbantiems",
    time: "dienomis",
  },
  {
    key: "",
    srclogo: logo,
    icontitle: "Naujas",
    title: "„Salesforce“ CRM – pradedančių",
    p: "„Salesforce“ – pasaulyje lyderiaujanti ryšių su klientais palaikymo platforma, kuria pasitiki 150 tūkstančių įmonių: „Coca cola“, „Toyota“, „Amazon“, „Unilever“ ir kiti rinkos lyderiai. Ši įmonės operacinė sistema.",
    level: "1 lygis",
    time: "Vakarais",
  },
  {
    key: "",
    srclogo: logo,

    title: "„Salesforce“ CRM – pradedančių",
    p: "„Salesforce“ – pasaulyje lyderiaujanti ryšių su klientais palaikymo platforma, kuria pasitiki 150 tūkstančių įmonių: „Coca cola“, „Toyota“, „Amazon“, „Unilever“ ir kiti rinkos lyderiai. Ši įmonės operacinė sistema.",
    level: "1 lygis",
    time: "Vakarais",
  },
];

function ProgramsContent() {
  const filteredPrograms = programsData.filter((program) => program.srclogo && program.title && program.p && program.level && program.time);

  return (
    <div className="all-container m-0 p-0 -xxl">
      <div className="programs-content row g-3 m-0 p-0">
        <Finder programCount={filteredPrograms.length} />
        <ProgramsList programs={filteredPrograms} />
      </div>
    </div>
  );
}
export default ProgramsContent;
