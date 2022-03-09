import React, { useContext } from "react";
import { UsersContext } from "../contexts/usersProvider";
import 'antd/dist/antd.css';
import '../App.css';
import { Card } from 'antd';
import { User } from "../types";

function UserList() {
  const { userList, addUser } = useContext(UsersContext);

  return (
    <div className="list-holder">
      {userList.map((user: User) => (
        <Card
          title={user.name}
          className='card'
        >
          <p>email: {user.email}</p>
        </Card>
      ))}
    </div>
  );
}

export default UserList;
