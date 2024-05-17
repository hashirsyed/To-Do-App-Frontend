import { useEffect, useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router";
import axios from "axios";

function SignUpForm() {
  const navigate = useNavigate();

  const [name,setName] = useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword] = useState("");
  const [error,setError] = useState(true);


 async function createUserAPI (){
    try {
      const body = {
        name : name,
        email : email,
        password : password,
      }
      const headers = {
        "Content-Type": "application/json"
      }
      const response = await axios.post("http://localhost:4000/api/users/", body, { headers: headers });
    console.log(response.data);
    navigate("/dashboard");
  } catch (error) {
    console.error("Error creating user:", error);
    }
  }

  async function submitHandler(event){
    event.preventDefault();
    await createUserAPI();
  }

  useEffect(()=>{
    if(name && email && password && password.length >=8){
      setError(false);
    }else{
      setError(true)
    }
  },[password])

  return (
    <>
      <div className="bg-white h-screen w-[60%] px-28 py-12 text-center">
        <h1 className="text-black font-bold text-3xl">Sign Up</h1>
        <p className="mt-3 text-gray-600 font-normal">
          Empowering Your Journey from Plans to Achievements
        </p>
        <div className="text-left mt-6">
          <form onSubmit={submitHandler}>
            <InputField
              label={"Name"}
              type={"text"}
              name={"name"}
              placeholder={"Enter Name"}
              onChange={(event)=>{setName(event.target.value)}}
              value={name}
            />
            <InputField
              label={"Email"}
              type={"email"}
              name={"email"}
              placeholder={"Enter Email"}
              onChange={(event)=>{setEmail(event.target.value)}}
              value={email}
            />
            <InputField
              label={"Password"}
              type={"password"}
              name={"password"}
              placeholder={"Enter Password"}
              onChange={(event)=>{setPassword(event.target.value)}}
              value={password}
            />
            <button
              className="w-full bg-blue-900 p-3 mt-10 text-white rounded-md duration-500 hover:border-blue-900 hover:border hover:border-solid hover:bg-transparent hover:text-blue-900 disabled:bg-gray-600 disabled:hover:text-white disabled:hover:border-none"
              disabled={error}
              type="submit"
            >
              Sign Up
            </button>
            <div className="flex justify-center text-center mt-16">
              <p>Already a user?</p>
              <p className="text-blue-900">Login</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
