import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { OpenTable } from "../Table/OpenTable";
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
  if (loading || dataCount.loading) return "LOADING";
  if (error || dataCount.error) return "ERROR";
  if (!data || !dataCount.data) return "SIN DATA";
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
    <div className="w-full h-auto">
      <div className="flex justify-between w-full">
        <h2 className="ml-3">Estatus de productos</h2>
      </div>
      <OpenTable
        bodyHeigth={"20rem"}
        headers={["Nombre", "Cantidad", "Restock"]}
      >
        {listWithStatus.map(
          ({ id, name, status, amount, restock, statusClass }) => (
            <tr key={id} className="hover:bg-gray-100 border-b border-gray-200">
              <td className="px-4 py-4">{name}</td>
              <td
                className={`px-4 py-4 ${statusClass}`}
              >{`${amount} - ${status}`}</td>
              <td className="px-4 py-4">{restock}</td>
            </tr>
          )
        )}
        <tr className="hover:bg-gray-100 border-b border-gray-200 py-10"></tr>
      </OpenTable>
      <Pagination
        handlePage={setPage}
        numPage={page}
        pages={getNumLessProducts}
      />
    </div>
  );
};

export default ProductGrid;
