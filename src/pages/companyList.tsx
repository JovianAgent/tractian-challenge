import React, { useContext } from "react";
import { CompaniesContext } from "../contexts/companiesProvider";
import 'antd/dist/antd.css';
import '../App.css';
import { Card } from 'antd';
import { Company } from "../types";

function CompanyList() {
  const { companyList, addCompany } = useContext(CompaniesContext);

  return (
    <div className="list-holder">
      {companyList.map((company: Company) => (
        <Card
          title={company.name}
          className='card'
        >
        </Card>
      ))}
    </div>
  );
}

export default CompanyList;
