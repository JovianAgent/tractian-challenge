import React, { useContext } from "react";
import { UnitsContext } from "../contexts/unitsProvider";

function UnitList() {
  const { unitList, addUnit } = useContext(UnitsContext);
  console.log(unitList)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Units List {unitList.length}
        </p>
      </header>
    </div>
  );
}

export default UnitList;
