import { useContext, useEffect, useReducer, useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router";
import axios from "axios";
import config from "../config";
import ThemeButton from "./ThemeButton";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth";

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

  async function createUserAPI() {
    try {
      const body = {
        name: state.name,
        email: state.email,
        password: state.password,
      };
      const url = `${config.BASE_URL}/users/`;
      const response = await axios.post( url , body);
      const { token, user } = response.data;

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      localStorage.setItem("token", token);
      setToken(token);
      localStorage.setItem("isLoggedIn" , "true")
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  async function submitHandler(event) {
    event.preventDefault();
    if (!error) {
      await createUserAPI();
    }
  }

  useEffect(() => {
    if (state.name && state.email && state.password && state.password.length >= 8) {
      setError(false);
    } else {
      setError(true);
    }
  }, [state.name, state.email, state.password]);

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
            />
            <InputField
              label={"Password"}
              type={"password"}
              name={"password"}
              placeholder={"Enter Password"}
              onChange={(event) =>
                dispatch({ type: "SET_PASSWORD", payload: event.target.value })
              }
              value={state.password}
              required={true}
            />
            <ThemeButton className={"w-full"} disabled={error}>Sign Up</ThemeButton>
            <div className="flex justify-center text-center mt-16">
              <p>Already a user?</p>
              <p className="text-blue-900"><NavLink to={"/login"}>Login</NavLink></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
