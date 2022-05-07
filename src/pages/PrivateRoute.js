import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  return <Route {...rest} render={() => children} />;
};

export default withAuthenticationRequired(PrivateRoute, {
  onRedirecting: () => (
    <div className="page-100 section-center">
      <h3>Redirecting you to the login page...</h3>
    </div>
  ),

});
