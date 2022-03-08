import React, { useContext } from "react";
import { UsersContext } from "../contexts/usersProvider";

function UserList() {
  const { userList, addUser } = useContext(UsersContext);
  console.log(userList)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Users List {userList.length}
        </p>
      </header>
    </div>
  );
}

export default UserList;
