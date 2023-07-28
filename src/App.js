import React, { useState } from "react";
import './App.css';
import AddUser from './components/User/AddUser';
import UsersList from "./components/User/UsersList"

const App = (props) => {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (name, age) => {
    setUserList(prevState => {
      return [...prevState, { name: name, age: age, id: Math.random().toString() }];
    });
  }

  return <div>
    <AddUser onAddUser={addUserHandler} />
    <UsersList users={userList} />
  </div>
}

export default App;
