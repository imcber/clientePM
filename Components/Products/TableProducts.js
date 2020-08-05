import React, { useState, useEffect } from "react";
import { OpenTable } from "../Table/OpenTable";
import { gql, useQuery } from "@apollo/client";
import Pagination from "../Dashboard/Pagination";

const GET_ALL_PRODUCTS = gql`
  query getListProducts($page: Int, $numRegister: Int) {
    getListProducts(page: $page, numRegister: $numRegister) {
      id
      name
      amount
      price
    }
  }
`;

const PRODUCTS_COUNT = gql`
  query getCountProducts($numRegister: Int) {
    getCountProducts(numRegister: $numRegister)
  }
`;

const TableProducts = () => {
  const [page, setPage] = useState(1);
  const [numRegister, setNumRegister] = useState(10);
  const [dataTable, setDataTable] = useState([]);
  //QUERY
  const dataCount = useQuery(PRODUCTS_COUNT, { variables: { numRegister } });
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS, {
    variables: { page, numRegister },
  });

  if (loading || dataCount.loading) return "Loading";
  if (error || dataCount.error) return "Error";
  if (!data || !dataCount.data) return "Sin data";
  const { getListProducts } = data;
  const { getCountProducts } = dataCount.data;

  return (
    <>
      <select
        value={numRegister}
        onChange={(e) => setNumRegister(parseInt(e.currentTarget.value))}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <OpenTable
        bodyHeigth={"30rem"}
        headers={["Nombre", "Precio", "Cantidad", "Acciones"]}
      >
        {getListProducts.map(({ id, name, price, amount }) => (
          <tr key={id} className="hover:bg-gray-100 border-b border-gray-200">
            <td className={`px-2 py-1`}>{name}</td>
            <td className={`px-2 py-1`}>$ {price}</td>
            <td className={`px-2 py-1`}>{amount}</td>
            <td className={`px-2 py-1 flex justify-center items-center`}>
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
      <Pagination
        handlePage={setPage}
        numPage={page}
        pages={getCountProducts}
      />
    </>
  );
};

export default TableProducts;
