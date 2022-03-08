import React, { useContext } from "react";
import { AssetsContext } from "../contexts/assetsProvider";

function AssetList() {
  const { assetList, addAsset } = useContext(AssetsContext);
  console.log(assetList)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Assets List {assetList.length}
        </p>
      </header>
    </div>
  );
}

export default AssetList;
