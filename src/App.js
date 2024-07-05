import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import CustomRoutes from "./routes/CustomRoutes";
import AuthContext from "./store/auth";
import { useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { GoogleOAuthProvider } from "@react-oauth/google";


const clientId = "725816900088-fuvsj7skkohs1k6ol9cfd0vvl1i5taio.apps.googleusercontent.com";


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
    <GoogleOAuthProvider clientId={clientId}>
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
    </GoogleOAuthProvider>
  );
}

export default App;
