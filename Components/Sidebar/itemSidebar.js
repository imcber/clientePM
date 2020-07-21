import React from "react";
import { useRouter } from "next/router";

const ItemSidebar = ({
  target,
  text,
  pathD,
  notif,
  type,
  extraClass,
  handlerClick,
}) => {
  //routing de next
  const router = useRouter();
  const { pathname } = router;
  let iconColor = getTypeText(type);
  const actualPath = target === pathname ? "bg-gray-100" : "";
  return (
    <li
      className={`my-px ${extraClass ? extraClass : ""}`}
      onClick={handlerClick ? handlerClick : () => {}}
    >
      <a
        href={target ? target : "#"}
        className={`flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100 ${iconColor} ${actualPath}`}
      >
        <span className="flex items-center justify-center ">
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path d={pathD}></path>
          </svg>
        </span>
        <span className={"ml-3 text-gray-400"}>{text}</span>
        {notif && (
          <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
            {notif}
          </span>
        )}
      </a>
    </li>
  );
};

const TextSideBar = ({ text }) => {
  return (
    <li className="my-px">
      <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
        {text}
      </span>
    </li>
  );
};

const getTypeText = (type) => {
  switch (type) {
    case "success":
      return "text-green-300";
    case "error":
      return "text-red-500";
    case "warning":
      return "text-yellow-300";
    default:
      return "text-gray-100";
  }
};

export { ItemSidebar, TextSideBar };
