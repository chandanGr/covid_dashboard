import React from "react";
import "./App.css";
import CovidTable from "./Components/CovidTable";

export const pinCodes = [
  560001,
  560002,
  560003,
  560011,
  560037,
  560017,
  560033,
  560026,
  560085,
  560060,
  560028,
  560071,
  560010,
  560018,
  560041,
  560008,
  560078,
  560023,
  560029,
  560036,
  560066,
];

function App() {
  return (
    <div className="App">
      <CovidTable
        pinCodes={pinCodes}
        date={"10-05-2021"}
        title={"18 - 44 age covid slots"}
        vaccineAgeLimit={18}
        timeInterval={60000}
      />
    </div>
  );
}

export default App;
