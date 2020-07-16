import React from "react";
import Pagination from "./Pagination";
import { gql, useQuery } from "@apollo/client";
import moment from "moment";

const LESS_PRODUCTS = gql`
  query getLessProducts {
    getLessProducts {
      id
      name
      amount
      restock
    }
  }
`;
const ProductGrid = () => {
  const { loading, error, data } = useQuery(LESS_PRODUCTS);
  if (loading) return "LOADING";
  if (!data) return "ERROR";
  const listWithStatus = data.getLessProducts.map((item) => {
    const { restock } = item;
    const status = item.amount === 0 ? "Agotado" : "Quedan pocos";
    const statusClass = item.amount === 0 ? "text-red-500" : "text-yellow-500";
    return {
      ...item,
      status,
      restock: moment(new Date(parseInt(restock))).format("DD-MM-YYYY"),
      statusClass,
    };
  });

  return (
    <div className="bg-white m-4 rounded-md h-1/2">
      <div className="flex justify-between w-full pt-6 ">
        <h2 className="ml-3">Estatus de productos</h2>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
              <th className="px-4 py-2 ">Nombre</th>
              <th className="px-4 py-2 ">Cantidad</th>
              <th className="px-4 py-2 ">Restock</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {listWithStatus.map(
              ({ id, name, status, amount, restock, statusClass }) => (
                <tr
                  key={id}
                  className="hover:bg-gray-100 border-b border-gray-200 py-10"
                >
                  <td className="px-4 py-4">{name}</td>
                  <td
                    className={`px-4 py-4 ${statusClass}`}
                  >{`${amount} - ${status}`}</td>
                  <td className="px-4 py-4">{restock}</td>
                </tr>
              )
            )}
            <tr className="hover:bg-gray-100 border-b border-gray-200 py-10"></tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default ProductGrid;
