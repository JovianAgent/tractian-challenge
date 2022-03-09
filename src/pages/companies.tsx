import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CompaniesProvider, { CompaniesContext } from "../contexts/companiesProvider";
import 'antd/dist/antd.css';
import '../App.css';
import { PageHeader } from 'antd';

function Companies() {
  const { companyList, addCompany } = useContext(CompaniesContext);

  const navigate = useNavigate()

    return (
      <div>
        <PageHeader
          className="site-page-header"
          onBack={() => navigate('')}
          title={"Companias"}
          subTitle={companyList.length + " companias"}
        />
        <Outlet />
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
