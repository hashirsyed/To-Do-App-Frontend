import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import CustomRoutes from "./routes/CustomRoutes";
import AuthContext from "./store/auth";
import { useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" ? true : false
  );
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  return (
    <SkeletonTheme baseColor="#e5e7eb" highlightColor="#d1d5db">
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        token: token,
        setToken: setToken,
        user: user,
        setUser: setUser,
      }}
    >
      <BrowserRouter>
        <CustomRoutes />
        
      </BrowserRouter>
    </AuthContext.Provider>
    </SkeletonTheme>
  );
}

export default App;
