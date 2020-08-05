import React from "react";

const OpenTable = ({ headers, children, bodyHeigth }) => {
  return (
    <div className="overflow-x-auto mt-6 bg-white rounded-md w-full">
      <div>
        <table className="border-collapse w-full table-fixed">
          <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left relative">
              {headers.map((item, indx) => (
                <th key={indx} className="px-2 py-2 ">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
      <div className="overflow-auto" style={{ height: bodyHeigth }}>
        <table className="border-collapse w-full table-fixed">
          <tbody className="text-sm font-normal text-gray-700 overflow-auto">
            {children}
            <tr className="hover:bg-gray-100 border-b border-gray-200 py-10"></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { OpenTable };
