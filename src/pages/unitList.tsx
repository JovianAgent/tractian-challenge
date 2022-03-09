import React, { useContext } from "react";
import { UnitsContext } from "../contexts/unitsProvider";
import 'antd/dist/antd.css';
import '../App.css';
import { Card } from 'antd';
import { Unit } from "../types";

function UnitList() {
  const { unitList, addUnit } = useContext(UnitsContext);

  return (
    <div className="list-holder">
      {unitList.map((unit: Unit) => (
        <Card
          title={unit.name}
          className='card'
        >
        </Card>
      ))}
    </div>
  );
}

export default UnitList;
