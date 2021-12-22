import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, ...props }) {
  if (!props.loggedIn) {
    return <Navigate to='/' />
  }

  return children;
}

export default ProtectedRoute;

