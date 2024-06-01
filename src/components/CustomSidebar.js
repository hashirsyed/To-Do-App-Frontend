"use client";

import { Sidebar } from "flowbite-react";
import { HiChartPie, HiViewBoards } from "react-icons/hi";
import Logo from "../logo-04.png";
import { NavLink, useLocation } from "react-router-dom";

export function CustomSidebar() {
  const {pathname} = useLocation();
  console.log(pathname==="/todo");

  return (
    <>
      <Sidebar
        aria-label="Sidebar with logo branding example"
        className="h-screen w-60 fixed top-0"
      >
        <div className="flex items-center">
          <img src={Logo} className="w-20" />
          <h1 className="text-black font-black text-xl">To Do App</h1>
        </div>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <NavLink to={"/dashboard"}>
              <Sidebar.Item icon={() => (
                  <HiChartPie className={`w-6 h-6 ${pathname==="/dashboard" ? "text-white" : "" || pathname==="/" ? "text-white" : ""}`} />
                )} className={`${pathname==="/dashboard" ? "bg-blue-900 text-white duration-300 hover:bg-blue-900 hover:text-white" : ""|| pathname==="/" ? "bg-blue-900 text-white duration-300 hover:bg-blue-900 hover:text-white" : ""} mt-10 p-4 `}>
                Dashboard
              </Sidebar.Item>
            </NavLink>
            <NavLink to={"/todo"}>
              <Sidebar.Item icon={() => (
                  <HiViewBoards className={`w-6 h-6 ${pathname==="/todo" ? "text-white" : ""}`} />
                )} className={`${pathname==="/todo" && "bg-blue-900 text-white duration-300 hover:bg-blue-900 hover:text-white"} mt-4 p-4`}>
                To Do's
              </Sidebar.Item>
            </NavLink>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
