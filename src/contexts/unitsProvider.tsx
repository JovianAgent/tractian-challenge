import React, { createContext, useState, FC } from "react";
import axios from 'axios';
import { Unit, UnitList } from "../types";

const contextDefaultValues: UnitList = {
  unitList: [],
  addUnit: () => {}
};

export const UnitsContext = createContext<UnitList>(
  contextDefaultValues
);

const UnitsProvider: FC = ({ children }) => {
  const [unitList, setUserList] = useState<Unit[]>(contextDefaultValues.unitList);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  const addUnit = (newUser: Unit) => setUserList((UnitList) => [...UnitList, newUser]);

  
  React.useEffect(() => {
    axios
      .get<Unit[]>("https://my-json-server.typicode.com/tractian/fake-api/units")
      .then(response => {
        setUserList(response.data);
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
    <UnitsContext.Provider
      value={{
        unitList,
        addUnit
      }}
    >
      {children}
    </UnitsContext.Provider>
  );
};

export default UnitsProvider;
