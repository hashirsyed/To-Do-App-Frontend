import { useContext } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import AuthContext from "../store/auth";
import { Navigate } from "react-router";

function Dashboard() {
  
  const {user} = useContext(AuthContext);
  const contextData = useContext(AuthContext);
  
  const isAuthenticated = contextData.isLoggedIn === true;
  if(!isAuthenticated){
    return <Navigate to={"/login"}/>
  }


  return (
      <DashboardLayout>
        <h1 className= "font-black text-xl">Welcome {user.name}</h1>
      </DashboardLayout>
  );
}

export default Dashboard;
