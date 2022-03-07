import React, { useContext } from "react";
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
