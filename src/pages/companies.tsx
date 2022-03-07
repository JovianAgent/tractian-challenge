import React, { useContext } from "react";
import CompaniesProvider, { CompaniesContext } from "../contexts/companiesProvider";

function Companies() {
  const { companyList, addCompany } = useContext(CompaniesContext);
  console.log(companyList)

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Companies
          </p>
        </header>
      </div>
    );
  }

function CompaniesPage() {
  return (
    <CompaniesProvider>
      <Companies />
    </CompaniesProvider>
  )
};

export default CompaniesPage;
