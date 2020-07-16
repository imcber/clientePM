import React from "react";
import Sidebar from "./SideBar";

const Layout = ({ children, titlePage }) => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="sm:flex min-h-screen">
          <Sidebar />
          <main className="sm:min-h-screen p-5 main-container h-full sm:w-3/4 xl:w-5/6">
            <div className="">
              <h1 className="text-2xl text-gray-800 foto-sans">{titlePage}</h1>
            </div>
            <div className="">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
