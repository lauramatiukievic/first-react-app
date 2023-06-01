import logo from "../../../images/salesforce.svg";
import logo2 from "../../../images/python.svg";
import logo3 from "../../../images/frontend.svg";
import ProgramItem from "../ProgramItem/programItem";

function ProgramsList() {
  return (
    <div className="col-8 m-0 p-0">
      <div className="row gap-3">
        <ProgramItem
          srclogo={logo}
          icontitle="Naujas"
          title="„Salesforce“ CRM – pradedančių"
          p="„Salesforce“ – pasaulyje lyderiaujanti ryšių su klientais palaikymo platforma, kuria pasitiki 150 tūkstančių įmonių: „Coca cola“, „Toyota“, „Amazon“, „Unilever“ ir kiti rinkos lyderiai. Ši įmonės operacinė sistema."
        />
        <ProgramItem
          srclogo={logo2}
          icontitle="UZT Tarnybos"
          title="Python – pradedantiesiems užimtiems asmenims (223002626)"
          p="Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba. Python kalba parašytas kodas yra itin aiškiai."
        />
        <ProgramItem
          srclogo={logo2}
          icontitle="Naujas"
          title="Python – pradedantiesiems užimtiems asmenims (223002626)"
          p="Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba. Python kalba parašytas kodas yra itin aiškiai."
        />
        <ProgramItem srclogo={logo3} icontitle="Naujas" title="Frontend Serverless (223002583)" p="Front-end – apima viską, ką mato vartotojas. Kurso metu studentai mokosi kurti turinį bei dizainą visiems ekrano dydžiams." />
        <ProgramItem
          srclogo={logo}
          icontitle="Naujas"
          title="Salesforce“ CRM – pradedančių"
          p="„Salesforce“ – pasaulyje lyderiaujanti ryšių su klientais palaikymo platforma, kuria pasitiki 150 tūkstančių įmonių: „Coca cola“, „Toyota“, „Amazon“, „Unilever“ ir kiti rinkos lyderiai. Ši įmonės operacinė sistema."
        />
        <ProgramItem
          srclogo={logo}
          icontitle="UZT Tarnybos"
          title="„Salesforce“ CRM – pradedančių"
          p="„Salesforce“ – pasaulyje lyderiaujanti ryšių su klientais palaikymo platforma, kuria pasitiki 150 tūkstančių įmonių: „Coca cola“, „Toyota“, „Amazon“, „Unilever“ ir kiti rinkos lyderiai. Ši įmonės operacinė sistema."
        />
      </div>
    </div>
  );
}

export default ProgramsList;
