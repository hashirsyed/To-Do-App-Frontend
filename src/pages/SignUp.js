import { useContext } from "react";
import SignUpForm from "../components/SignUpForm";
import Vector from "../free-task-list-2080780-1753768.png";
import AuthContext from "../store/auth";
import { Navigate } from "react-router";




function SignUp (){
    const contextData = useContext(AuthContext);
 
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
            <SignUpForm />
        </div>
        
        </div>
        </>
    )
}

export default SignUp;