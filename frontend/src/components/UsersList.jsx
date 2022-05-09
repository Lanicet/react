import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../store/users";
import Loader from "./Loader";
function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.entities.users);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  return (
    <div>
      {users.loading ? (
        <Loader />
      ) : (
        <div className="row">
          <h1 style={{textAlign:"center"}}>Users</h1>
          {users.list.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersList;
