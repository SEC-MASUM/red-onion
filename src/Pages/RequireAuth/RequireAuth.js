import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation} from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  console.log(user, "from require auth");
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
