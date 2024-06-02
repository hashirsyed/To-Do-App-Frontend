import { useContext } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import AuthContext from "../store/auth";
import { Navigate } from "react-router";
import Chart from 'react-apexcharts';
import DashboardDesign from "../components/DashboardDesign";

function Dashboard() {
  
  const {user} = useContext(AuthContext);
  const contextData = useContext(AuthContext);
  
  const isAuthenticated = contextData.isLoggedIn === true;
  if(!isAuthenticated){
    return <Navigate to={"/login"}/>
  }


  return (
      <DashboardLayout heading={`Welcome ${user.name}`}>
        <DashboardDesign/>
      </DashboardLayout>
  );
}

export default Dashboard;
