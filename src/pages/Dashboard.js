import { useContext } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import AuthContext from "../store/auth";
import { Navigate } from "react-router";
import Chart from 'react-apexcharts';
import DashboardDesign from "../components/DashboardDesign";
import Skeleton from "react-loading-skeleton";

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
        <p>
        <Skeleton count={3}/>
        </p>
      </DashboardLayout>
  );
}

export default Dashboard;
