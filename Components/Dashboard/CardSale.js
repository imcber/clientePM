import React from "react";

const CardSale = ({ data }) => {
  const { id, total, date, products } = data;
  return (
    <div className="md:w-1/4 sm:w-full rounded-lg shadow-lg bg-white flex flex-col justify-between m-2">
      <div className="flex justify-between border-b border-gray-300 px-5 py-4">
        <span className="font-bold text-gray-700 text-lg">{`Venta realizada por $${total}`}</span>
      </div>
      <div className="px-5 py-3 text-gray-600">
        <p className="float-right">{`${date}`}</p>
      </div>

      <div className="px-5 text-gray-600">
        {products.map(({ id, name, amount }) => (
          <p key={id} className="">{`${name} - ${amount}`}</p>
        ))}
      </div>

      <div className="px-5 py-4 flex justify-end">
        <button className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150">
          Ver mas...
        </button>
      </div>
    </div>
  );
};

export default CardSale;
