"use client";

import { Sidebar } from "flowbite-react";
import { HiChartPie, HiViewBoards } from "react-icons/hi";
import Logo from "../Logo.png";
import { NavLink, useLocation } from "react-router-dom";

export function CustomSidebar() {
  const {pathname} = useLocation();

  return (
    <>
      <Sidebar
        aria-label="Sidebar with logo branding example"
        className="h-screen w-64 fixed top-0"
      >
        <div className="flex items-center flex-col">
          <img src={Logo} className="w-28" />
          <h1 className="text-black font-extrabold text-2xl">Todo Nexus</h1>
        </div>
        <hr className="my-5 border-black"/>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <NavLink to={"/dashboard"}>
              <Sidebar.Item icon={() => (
                  <HiChartPie className={`w-6 h-6 ${pathname==="/dashboard" ? "text-white" : "" || pathname==="/" ? "text-white" : ""}`} />
                )} className={`${pathname==="/dashboard" ? "bg-primary-color text-white duration-300 hover:bg-primary-color hover:text-white" : ""|| pathname==="/" ? "bg-primary-color text-white duration-300 hover:bg-primary-color hover:text-white" : ""} mt-10 px-4 py-3 rounded-md`}>
                Dashboard
              </Sidebar.Item>
            </NavLink>
            <NavLink to={"/todo"}>
              <Sidebar.Item icon={() => (
                  <HiViewBoards className={`w-6 h-6 ${pathname==="/todo" ? "text-white" : ""}`} />
                )} className={`${pathname==="/todo" && "bg-primary-color text-white duration-300 hover:bg-primary-color hover:text-white"} mt-4 px-4 py-3 rounded-md`}>
                To Do's
              </Sidebar.Item>
            </NavLink>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
