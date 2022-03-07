import React, { createContext, useState, FC } from "react";
import axios from 'axios';
import { Asset, AssetList } from "../types";

const contextDefaultValues: AssetList = {
  assetList: [],
  addAsset: () => {}
};

export const AssetsContext = createContext<AssetList>(
  contextDefaultValues
);

const AssetsProvider: FC = ({ children }) => {
  const [assetList, setAssetList] = useState<Asset[]>(contextDefaultValues.assetList);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  const addAsset = (newAsset: Asset) => setAssetList((AssetList) => [...AssetList, newAsset]);

  
  React.useEffect(() => {
    axios
      .get<Asset[]>("https://my-json-server.typicode.com/tractian/fake-api/assets")
      .then(response => {
        setAssetList(response.data);
        setLoading(false);
      })
      .catch(ex => {
        const error =
        ex.response.status === 404
          ? "Resource Not found"
          : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
    });

  }, []);

  return (
    <AssetsContext.Provider
      value={{
        assetList,
        addAsset
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

export default AssetsProvider;
