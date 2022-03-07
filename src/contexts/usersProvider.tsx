import React, { createContext, useState, FC } from "react";
import axios from 'axios';
import { User, UserList } from "../types";

const contextDefaultValues: UserList = {
  userList: [],
  addUser: () => {}
};

export const UsersContext = createContext<UserList>(
  contextDefaultValues
);

const UsersProvider: FC = ({ children }) => {
  const [userList, setUserList] = useState<User[]>(contextDefaultValues.userList);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  const addUser = (newUser: User) => setUserList((UserList) => [...UserList, newUser]);

  
  React.useEffect(() => {
    axios
      .get<User[]>("https://my-json-server.typicode.com/tractian/fake-api/users")
      .then(response => {
        setUserList(response.data);
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
    <UsersContext.Provider
      value={{
        userList,
        addUser
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
