import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import AssetsProvider, { AssetsContext } from "../contexts/assetsProvider";

function Assets() {
  const { assetList, addAsset } = useContext(AssetsContext);
  console.log(assetList)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Assets
        </p>
      </header>
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
