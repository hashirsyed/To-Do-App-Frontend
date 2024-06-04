"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth";
import config from "../config";


export function CustomNavbar() {
  const { setIsLoggedIn, user } = useContext(AuthContext);
  const navigate = useNavigate();

  function logOut() {
    localStorage.setItem("isLoggedIn","false");
    setIsLoggedIn(false);
    navigate("/login")
    
  }

  return (
    <Navbar fluid rounded>
      <div></div>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img={`${config.BASE_URL_PUBLIC}${user.profileUrl}`}
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.name}</span>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>
          <NavLink to={"/editProfile"}>
            <Dropdown.Item>Edit Profile</Dropdown.Item>
          </NavLink>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
