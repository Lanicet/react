import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostsList from "./PostsList";
function User(props) {
  const { user } = props;
  return (
    <Link to={`/user/${user.id}/posts`}>
      <div className="column">
        <div className="card">
          <div className="container">
            <h2>{user.name}</h2>
            <p className="title">{user.username}</p>
            <p>
              <i className="fa-solid fa-building"></i>
              {user.company.name}{" "}
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> {user.email}
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> {user.phone}
            </p>
            <p>
              <i className="fa-solid fa-globe"></i> {user.website}
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> {user.address.street}
              , {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default User;
