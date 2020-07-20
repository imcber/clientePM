import React from "react";
import Sidebar from "./SideBar";

const Layout = ({ children, titlePage }) => {
  return (
    <>
      <div className="bg-gray-200 h-screen">
        <div className="sm:flex max-h-screen">
          <Sidebar />
          <main className="sm:min-h-screen h-screen px-5 main-container sm:w-3/4 xl:w-5/6">
            <div className="">
              <h1 className="text-2xl text-gray-800 foto-sans">{titlePage}</h1>
            </div>
            <div className="h-auto flex flex-col content-between">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
