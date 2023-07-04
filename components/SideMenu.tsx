import React from "react";
import IconButton from "@mui/material/IconButton";
import { X } from "react-feather";
import Link from "next/link";

function SideMenu(props: { handleDrawerToggle: () => void }) {
  const sideLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projectspage",
    },
    {
      name: "Documentation",
      path: "/docs",
    },
  ];

  return (
    <div
      className=" h-screen flex flex-col bg-secondary text-white "
      id="elements-of-sidebar"
    >
      {/*  Logo & Close icon section */}
      <div className="flex mt-4 mb-8 border-b ">
        <span className="ml-[5%] my-1 text-white">
          <IconButton
            aria-label="close drawer"
            edge="start"
            onClick={() => props.handleDrawerToggle()}
            className="text-white"
          >
            <X />
          </IconButton>
        </span>
        <div className="flex items-center ml-[25%]">
          <Link
            href="/"
            className="h-10 mb-5 items-center rounded-lg  font-extrabold text-[2rem] "
            onClick={() => props.handleDrawerToggle()}
          >
            Ph <span className="text-red-500">.</span>
          </Link>
        </div>
      </div>

      {/*  SideBar navlinks section */}
      <ul className="block">
        <li>
          <Link
            href="/projects"
            rel="noreferrer"
            className={`block py-2 px-3 w-fit m-2 text-left  rounded-md`}
            aria-label="Github"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/docs"
            rel="noreferrer"
            className={`block py-2 px-3 w-fit m-2 text-left  rounded-md`}
            aria-label="Github"
          >
            Docs
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/priyankarpal/ProjectsHut"
            target="_blank"
            rel="noreferrer"
            className={`block py-2 px-3 w-fit m-2 text-left  rounded-md`}
            aria-label="Github"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;