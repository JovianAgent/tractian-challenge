import React, { useContext } from "react";
import UnitsProvider, { UnitsContext } from "../contexts/unitsProvider";

function Units() {
  const { unitList, addUnit } = useContext(UnitsContext);
  console.log(unitList)

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Units
          </p>
        </header>
      </div>
    );
  }

function UnitsPage() {
  return (
    <UnitsProvider>
      <Units />
    </UnitsProvider>
  )
};

export default UnitsPage;
