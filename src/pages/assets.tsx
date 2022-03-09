import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AssetsProvider, { AssetsContext } from "../contexts/assetsProvider";
import 'antd/dist/antd.css';
import '../App.css';
import { PageHeader } from 'antd';

function Assets() {
  const { assetList, addAsset } = useContext(AssetsContext);

  const navigate = useNavigate()

  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate('')}
        title={"Ativos"}
        subTitle={assetList.length + " ativos"}
      />
      <Outlet />
    </div>
  );
}

function AssetsPage() {
  return (
    <AssetsProvider>
      <Assets />
    </AssetsProvider>
  )
};

export default AssetsPage;
