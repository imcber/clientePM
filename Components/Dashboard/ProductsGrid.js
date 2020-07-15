import React from "react";
import Paginacion from "./Paginacion";
import { gql, useQuery } from "@apollo/client";

const LESS_PRODUCTS = gql`
  query getLessProducts {
    getLessProducts {
      id
      name
      amount
    }
  }
`;
const ProductGrid = () => {
  const { loading, error, data } = useQuery(LESS_PRODUCTS);
  if (loading) return "LOADING";
  if (!data) return "ERROR";
  const listWithStatus = data.getLessProducts.map((item) => {
    const status = item.amount < 5 ? "error" : "warning";
    return { ...item, status };
  });

  return (
    <div className="bg-white pb-4 px-4 rounded-md w-full">
      <div className="flex justify-between w-full pt-6 ">
        <p className="ml-3">Estatus de productos</p>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
              <th className="px-4 py-2 ">Nombre</th>
              <th className="px-4 py-2 ">Cantidad</th>
              <th className="px-4 py-2 ">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {listWithStatus.map(({ id, name, status, amount }) => (
              <tr
                key={id}
                className="hover:bg-gray-100 border-b border-gray-200 py-10"
              >
                <td className="px-4 py-4">{name}</td>
                <td className="px-4 py-4">{amount}</td>
                <td className="px-4 py-4">{status}</td>
              </tr>
            ))}
            <tr className="hover:bg-gray-100 border-b border-gray-200 py-10"></tr>
          </tbody>
        </table>
      </div>
      <Paginacion />
    </div>
  );
};

export default ProductGrid;
