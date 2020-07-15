import React from "react";
import Sidebar from "./SideBar";

const Layout = ({ children, titlePage }) => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="sm:flex min-h-screen">
          <Sidebar />
          <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
            <h1 className="text-2xl text-gray-800 font-light">{titlePage}</h1>
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
