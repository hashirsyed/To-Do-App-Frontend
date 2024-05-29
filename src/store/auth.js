import React from "react";

const authInfo = {
  isLoggedIn: false,
  setIsLoggedIn: function () {},
  token: null,
  setToken: function () {},
  user: null,
  setUser: function () {},
};

const AuthContext = React.createContext(authInfo);

export default AuthContext;
