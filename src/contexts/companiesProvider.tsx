import React, { createContext, useState, FC } from "react";
import axios from 'axios';
import { Company, CompanyList } from "../types";

const contextDefaultValues: CompanyList = {
  companyList: [],
  addCompany: () => {}
};

export const CompaniesContext = createContext<CompanyList>(
  contextDefaultValues
);

const CompaniesProvider: FC = ({ children }) => {
  const [companyList, setCompanyList] = useState<Company[]>(contextDefaultValues.companyList);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  const addCompany = (newCompany: Company) => setCompanyList((CompanyList) => [...CompanyList, newCompany]);

  
  React.useEffect(() => {
    axios
      .get<Company[]>("https://my-json-server.typicode.com/tractian/fake-api/companies")
      .then(response => {
        setCompanyList(response.data);
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
    <CompaniesContext.Provider
      value={{
        companyList,
        addCompany
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesProvider;
