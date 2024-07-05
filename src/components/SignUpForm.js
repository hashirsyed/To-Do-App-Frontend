import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import config from "../config";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth";
import { ThemeButton, InputField } from "./CustomForm";
import { Toast } from "flowbite-react";
import { HiExclamation } from "react-icons/hi";
import { ClipLoader } from "react-spinners";
import CustomGoogleButton from "./CustomGoogleButton";
import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";

const initialState = {
  name: "",
  email: "",
  password: "",
};

function reducerFunction(previousState, action) {
  if (action.type === "SET_NAME") {
    return { ...previousState, name: action.payload };
  } else if (action.type === "SET_EMAIL") {
    return { ...previousState, email: action.payload };
  } else if (action.type === "SET_PASSWORD") {
    return { ...previousState, password: action.payload };
  }
}

function SignUpForm() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { setToken } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [error, setError] = useState(true);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading , setLoading] = useState(false);

  useGoogleOneTapLogin({
    onSuccess: async credentialResponse => {
      console.log(credentialResponse);
      const body = {
        googleAuthorizationToken : credentialResponse.credential
      };
      const url = `${config.BASE_URL}/users/google`;
      
      try {
        const response = await axios.post(url, body);
      const { token, user } = response.data;
        localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      localStorage.setItem("token", token);
      setToken(token);
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/dashboard");
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
    },
    onError: () => {
      console.log('Sign Up Failed');
    },
  });
  const signup = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const body = {
        googleAuthorizationToken : tokenResponse.access_token
      };
      const url = `${config.BASE_URL}/users/google`;
      
      try {
        const response = await axios.post(url, body);
      const { token, user } = response.data;
        localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      localStorage.setItem("token", token);
      setToken(token);
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/dashboard");
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
    },
    onError: () => {
      console.log("Sign Up Failed");
    },
    flow: "auth-code"
  });

  async function createUserAPI() {
    try {
      const body = {
        name: state.name,
        email: state.email,
        password: state.password,
      };
      const url = `${config.BASE_URL}/users/`;
      setShowToast(false)
      setLoading(true);
      const response = await axios.post(url, body);
      const { token, user } = response.data;

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      localStorage.setItem("token", token);
      setToken(token);
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (error) {
      setToastMessage("Error creating user: " + error.response?.data);
      setShowToast(true);
      console.error("Error creating user:", error);
    }finally {
      setLoading(false);
    }
  }

  async function submitHandler(event) {
    event.preventDefault();
    if (!error) {
      await createUserAPI();
    }
  }

  useEffect(() => {
    if (
      state.name &&
      state.email &&
      state.password &&
      state.password.length >= 8
    ) {
      setError(false);
    } else {
      setError(true);
    }
  }, [state.name, state.email, state.password]);

  return (
    <>
      <div className="bg-white md:text-sm lg:text-base md:w-[60%] px-5 md:px-14 py-10 text-center overflow-y-auto">
        <h1 className="text-black font-semibold text-2xl md:text-3xl">
          Sign Up
        </h1>
        <p className="mt-3 text-gray-600 font-normal md:text-base">
          Empowering Your Journey from Plans to Achievements
        </p>
        <div className="text-left">
          <form onSubmit={submitHandler}>
            <InputField
              label={"Name"}
              type={"text"}
              name={"name"}
              placeholder={"Enter Name"}
              onChange={(event) =>
                dispatch({ type: "SET_NAME", payload: event.target.value })
              }
              value={state.name}
              required={true}
            />
            <InputField
              label={"Email"}
              type={"email"}
              name={"email"}
              placeholder={"Enter Email"}
              onChange={(event) =>
                dispatch({ type: "SET_EMAIL", payload: event.target.value })
              }
              value={state.email}
              required={true}
              formClassName={"mt-2 md:mt-2 lg:mt-2"}
            />
            <InputField
              label={"Password"}
              type={"password"}
              name={"password"}
              placeholder={"Set Password"}
              onChange={(event) =>
                dispatch({ type: "SET_PASSWORD", payload: event.target.value })
              }
              value={state.password}
              required={true}
              formClassName={"mt-2 md:mt-2 lg:mt-2"}
            />
            {showToast && (
              <Toast className="bg-red-100 mt-2 text-red-500 ml-auto mr-auto">
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-orange-500 dark:bg-orange-700 ">
                  <HiExclamation className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">{toastMessage}</div>
                <Toast.Toggle className="bg-transparent hover:bg-transparent duration-300 hover:text-black" />
              </Toast>
            )}
            <ThemeButton className={"w-full md:mt-3 lg:mt-4"} disabled={error}>
            {loading ? <ClipLoader size={20} color="#19A7CE" className="text-center"/> :"Sign Up"}
            </ThemeButton>
            <div className="text-center mt-2">
              <p>OR</p>
            </div>
            <CustomGoogleButton text={"Sign Up with Google"} onClick={signup}/>
            <div className="flex justify-center text-center mt-6 md:mt-2 lg:mt-2">
              <p>Already a user?</p>
              <p className="text-primary-color">
                <NavLink to={"/login"}>Login</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
