import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UsersProvider, { UsersContext } from "../contexts/usersProvider";
import 'antd/dist/antd.css';
import '../App.css';
import { PageHeader } from 'antd';

function Users() {
  const { userList, addUser } = useContext(UsersContext);

  const navigate = useNavigate()

    return (
      <div>
        <PageHeader
          className="site-page-header"
          onBack={() => navigate('')}
          title={"Usuparios"}
          subTitle={userList.length + " usuários"}
        />
        <Outlet />
      </div>
    );
  }

function UsersPage() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  )
};

export default UsersPage;
