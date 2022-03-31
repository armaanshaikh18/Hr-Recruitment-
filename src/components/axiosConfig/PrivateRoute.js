import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Login/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  const check = currentUser();
  console.log("log", check);
  return (
    <Route
      {...rest}
      render={(props) => {
        return check !== null ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
