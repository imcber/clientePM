import React from "react";
import { ItemSidebar, TextSideBar } from "./Sidebar/itemSidebar";
import { useRouter } from "next/router";

const Sidebar = () => {
  //routing de next
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="sm:min-h-screen sidebar sm:w-1/4 xl:w-1/6">
      <div className="flex xl:w-64 p-4 h-full">
        <ul className="flex flex-col w-full">
          <span className="flex justify-center items-center py-8">
            <img src="/logo_large.png" alt="Logo" className="w-32" />
          </span>
          <ItemSidebar
            target="/"
            text="Dashboard"
            pathD="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
          <TextSideBar text={"Ventas"} />
          <ItemSidebar
            target="#"
            text="Mis ventas"
            pathD="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
          <ItemSidebar
            target="#"
            text="Nueva venta"
            pathD="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            type="success"
          />
          <TextSideBar text={"Negocio"} />
          <ItemSidebar
            target="#"
            text="Productos"
            pathD="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
          <ItemSidebar
            target="#"
            text="Pedidos"
            pathD="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
          />
          <TextSideBar text={"Cuenta"} />
          <ItemSidebar
            target="#"
            text="Usuario"
            pathD="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
          <ItemSidebar
            target="#"
            text="Cerrar sesion"
            pathD="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            type="error"
            extraClass="mt-auto"
          />
        </ul>
      </div>
    </div>
  );
};

//M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z
export default Sidebar;
