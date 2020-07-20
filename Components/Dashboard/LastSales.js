import React from "react";
import CardSale from "./CardSale";
import { gql, useQuery } from "@apollo/client";
import moment from "moment";

const GET_LAST_SALES = gql`
  query getLastSales {
    getLastSales {
      id
      total
      date
      products {
        id
        amount
        name
      }
    }
  }
`;

const LastSales = () => {
  const { data, loading } = useQuery(GET_LAST_SALES);
  if (loading) return "Cargando";
  if (!data) return "SIN DATA";

  const dataFixed = data.getLastSales.map((item) => {
    const { date, products } = item;
    const myDate = moment(new Date(parseInt(date))).format("DD-MM-YYYY HH:mm");
    return { ...item, date: myDate, products: products.slice(0, 3) };
  });

  return (
    <div className="w-full h-auto pt-3">
      <div className="flex justify-between w-full">
        <h2 className="ml-3">Ultimas ventas</h2>
      </div>
      <div className="overflow-x-auto xl:flex-row lg:flex-row md:flex-row flex-col mt-3 flex justify-between ">
        {dataFixed.map((item) => (
          <CardSale key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default LastSales;
