import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation} from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // console.log(user, "from require auth");
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
