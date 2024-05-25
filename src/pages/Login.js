import { useContext } from "react";
import LoginForm from "../components/LoginForm";
import Vector from "../free-task-list-2080780-1753768.png";
import AuthContext from "../store/auth";
import { Navigate } from "react-router";



function Login ({setIsLoggedIn}){
    const contextData = useContext(AuthContext);
  console.log(contextData);

  const isAuthenticated = contextData.isLoggedIn === true;

  if(isAuthenticated){
    return <Navigate to={"/dashboard"}/>
  }
    return (
        <>
        
        <div className=' w-full h-screen bg-teal-700 flex justify-center items-center'>
        <div className='flex w-[60vw] h-[85vh] border-4 border-white mx-auto bg-transparent overflow-hidden rounded-3xl'>
        <div className='w-[40%] h-full flex justify-center items-center'>
            <img src={Vector} className="h-46 mb-16"/>
        </div>
            <LoginForm setIsLoggedIn={setIsLoggedIn}/>
        </div>
        
        </div>
        </>
    )
}

export default Login;