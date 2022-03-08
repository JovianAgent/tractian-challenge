import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import UsersProvider, { UsersContext } from "../contexts/usersProvider";

function Users() {
  const { userList, addUser } = useContext(UsersContext);
  console.log(userList)

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Users
          </p>
        </header>
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
