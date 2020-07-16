import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { gql, useQuery } from "@apollo/client";
import moment from "moment";

//Query to get less products
const LESS_PRODUCTS = gql`
  query getLessProducts($page: Int) {
    getLessProducts(page: $page) {
      id
      name
      amount
      restock
    }
  }
`;
const LESS_PRODUCTS_COUNT = gql`
  query getNumLessProducts {
    getNumLessProducts
  }
`;

const ProductGrid = () => {
  //state of pagination
  const [page, setPage] = useState(1);
  //get count of all less producs for pagination
  const dataCount = useQuery(LESS_PRODUCTS_COUNT);
  //data of query
  const { loading, error, data } = useQuery(LESS_PRODUCTS, {
    variables: { page },
  });
  if (loading) return "LOADING";
  if (error) return "ERROR";
  if (!data) return "SIN DATA";
  const {
    data: { getNumLessProducts },
  } = dataCount;
  //Here we add status and color
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
    <div className="bg-white my-4 rounded-md h-1/2 w-full">
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
      <Pagination
        handlePage={setPage}
        numPage={page}
        pages={getNumLessProducts}
      />
    </div>
  );
};

export default ProductGrid;
