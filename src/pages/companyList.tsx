import React, { useContext } from "react";
import { CompaniesContext } from "../contexts/companiesProvider";

function CompanyList() {
  const { companyList, addCompany } = useContext(CompaniesContext);
  console.log(companyList)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Companies List {companyList.length}
        </p>
      </header>
    </div>
  );
}

export default CompanyList;
