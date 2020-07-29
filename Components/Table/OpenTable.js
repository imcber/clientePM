import React from "react";

const OpenTable = ({ headers, children }) => {
  return (
    <div className="overflow-x-auto mt-6 bg-white rounded-md w-full">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
            {headers.map((item, indx) => (
              <th key={indx} className="px-2 py-2 ">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm font-normal text-gray-700">
          {children}
          <tr className="hover:bg-gray-100 border-b border-gray-200 py-10"></tr>
        </tbody>
      </table>
    </div>
  );
};

export { OpenTable };
