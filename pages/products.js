import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { OpenTable } from "../Components/Table/OpenTable";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_PRODUCTS = gql`
  query getListProducts {
    getListProducts {
      id
      name
      amount
      price
    }
  }
`;

const Products = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return "Loading";
  if (error) return "Error";
  if (!data) return "Sin data";
  const { getListProducts } = data;

  return (
    <Layout titlePage={"Productos"}>
      <div className="mt-6 w-full flex flex-col justify-center items-center">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
      <div className="w-full">
        <OpenTable headers={["Nombre", "Precio", "Cantidad", "Acciones"]}>
          {getListProducts.map(({ id, name, price, amount }) => (
            <tr key={id} className="hover:bg-gray-100 border-b border-gray-200">
              <td className={`px-2 py-4`}>{name}</td>
              <td className={`px-2 py-4`}>{price}</td>
              <td className={`px-2 py-4`}>{amount}</td>
              <td className={`px-2 py-4 flex justify-center items-center`}>
                <button className="w-2/5 mx-2 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 focus:outline-none focus:shadow-outline">
                  Editar
                </button>
                <button className="w-2/5 mx-2 py-2 text-white bg-red-600 rounded-full hover:bg-red-800 focus:outline-none focus:shadow-outline">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </OpenTable>
      </div>
    </Layout>
  );
};

export default Products;
