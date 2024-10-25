import { Outlet, Navigate } from "react-router-dom"


function PrivateRoute() {

  // const user = null;
  const user = { name: 'Jonathan' };

  if (user) return <Outlet />;

  return <Navigate to="/login"/>
}

export default PrivateRoute;