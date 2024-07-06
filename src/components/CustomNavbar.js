"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth";
import config from "../config";


export function CustomNavbar() {
  const { setIsLoggedIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  let picture;

if (user && user.profileUrl) {
  let pictureParts = user.profileUrl.split("/");
  if (pictureParts[0] === "https:") {
    picture = user.profileUrl;
  } else {
    picture = `${config.BASE_URL_PUBLIC}${user.profileUrl}`;
  }
} else {
  // Handle the case where user or user.profileUrl is null or undefined
  console.error('User or user.profileUrl is null or undefined');
  picture = 'default_picture_url'; // You can set a default picture URL here
}

  function logOut() {
    localStorage.setItem("isLoggedIn","false");
    setIsLoggedIn(false);
    navigate("/login")
    
  }
  const userName = user.name.split(' ') 
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
              img= {user.profileUrl ? picture: `https://ui-avatars.com/api/?name=${userName[0]}+${userName[1]}$background=random` }
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
