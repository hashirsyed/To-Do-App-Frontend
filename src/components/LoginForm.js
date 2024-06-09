import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import config from "../config";
import { NavLink } from "react-router-dom";
import { Toast } from "flowbite-react";
import { HiExclamation } from "react-icons/hi";
import AuthContext from "../store/auth";
import { ThemeButton, InputField } from "./CustomForm";
import { ClipLoader } from "react-spinners";

const initialState = {
  email: "",
  password: "",
};

function reducerFunction(previousState, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...previousState, email: action.payload };
    case "SET_PASSWORD":
      return { ...previousState, password: action.payload };
    default:
      return previousState;
  }
}

function LoginForm() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { setToken } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  async function createUserAPI() {
    try {
      const body = {
        email: state.email,
        password: state.password,
      };
      const url = `${config.BASE_URL}/users/login`;
      setLoading(true);
      const response = await axios.post(url, body);
      console.log(response);
      const { token, user } = response.data;

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      localStorage.setItem("token", token);
      setToken(token);
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      setToastMessage("Login successful!");
      setShowToast(true);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setToastMessage("Error logging in user: " + error.response?.data);
      setShowToast(true);
      console.log("Error logging in user:", error);
    } finally {
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
    if (state.email && state.password && state.password.length >= 8) {
      setError(false);
    } else {
      setError(true);
    }
  }, [state.email, state.password]);

  return (
    <>
      <div className="bg-white h-screen w-full md:w-[60%] px-6 md:px-28 py-12 text-center">
        <h1 className="text-black font-semibold text-2xl md:text-3xl">Login</h1>
        <p className="mt-3 text-gray-600 font-normal text-sm md:text-base">
          Empowering Your Journey from Plans to Achievements
        </p>
        <div className="text-left mt-6">
          <form onSubmit={submitHandler}>
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
            <ThemeButton className={"w-full"} disabled={error}>
             {loading ? <ClipLoader size={20} color="#19A7CE" className="text-center"/> :"Login"}
            </ThemeButton>
            {showToast && (
              <Toast className="bg-red-100 mt-2 text-red-500">
                <div className="inline-flex h-8 shrink-0 items-center justify-center rounded-lg text-orange-500 dark:bg-orange-700 ">
                  <HiExclamation className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">{toastMessage}</div>
                <Toast.Toggle className="bg-transparent hover:bg-transparent duration-300 hover:text-black" />
              </Toast>
            )}
            <div className="flex justify-center text-center mt-12">
              <p className="mr-2">Don't have an account?</p>
              <p className="text-primary-color">
                <NavLink to={"/signUp"}>Sign Up</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
