import { Outlet, Navigate } from "react-router-dom"


function PublicRoute() {

  const user = null;
  // const user = { name: 'Jonathan' };

  if (!user) return <Outlet />;

  return <Navigate to="/"/>
}

export default PublicRoute;