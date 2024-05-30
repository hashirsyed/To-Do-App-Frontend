"use client";

import { Sidebar } from "flowbite-react";
import {HiChartPie , HiViewBoards  } from "react-icons/hi";
import Logo from "../logo-04.png";
import { NavLink } from "react-router-dom";


export function CustomSidebar() {

  return (
    <>
  
    <Sidebar aria-label="Sidebar with logo branding example" className="h-screen w-60 fixed top-0">
      <div className="flex items-center">
      <img src={Logo} className="w-20"/>
      <h1 className="text-black font-black text-xl">To Do App</h1>
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
        <NavLink to={"/dashboard"}>
          <Sidebar.Item icon={HiChartPie} className="mt-10">
            Dashboard
          </Sidebar.Item>
          </NavLink>
          <NavLink to={"/todo"}><Sidebar.Item icon={HiViewBoards} className="mt-4">
            To Do's
          </Sidebar.Item></NavLink>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  


  


    </>
  );
}
