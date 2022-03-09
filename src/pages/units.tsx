import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UnitsProvider, { UnitsContext } from "../contexts/unitsProvider";
import 'antd/dist/antd.css';
import '../App.css';
import { PageHeader } from 'antd';

function Units() {
  const { unitList, addUnit } = useContext(UnitsContext);

  const navigate = useNavigate()

    return (
      <div>
        <PageHeader
          className="site-page-header"
          onBack={() => navigate('')}
          title={"Unidades"}
          subTitle={unitList.length + " unidades"}
        />
        <Outlet />
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
