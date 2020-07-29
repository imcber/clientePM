import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";

const NewSale = () => {
  return (
    <Layout titlePage={"Nueva Venta"}>
      <div className="mt-6 w-full flex justify-center items-center">
        <div className="relative w-3/5 mx-auto">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <input
            className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </Layout>
  );
};

export default NewSale;
