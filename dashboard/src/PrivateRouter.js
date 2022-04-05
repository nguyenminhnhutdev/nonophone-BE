import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRouter({ component: Component, ...rest }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Route
      {...rest}
      component={(props) => {
        if (userInfo && userInfo.role == 'admin') {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/Login"} />;
        }
      }}
    />
  );
}
export default PrivateRouter;