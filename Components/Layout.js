import React, { useEffect } from "react";
import Sidebar from "./SideBar";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_USER_QUERY = gql`
  query getUser {
    getUser {
      profile {
        name
      }
    }
  }
`;

const Layout = ({ children, titlePage }) => {
  //Verify token
  const { data, loading, error } = useQuery(GET_USER_QUERY);
  //Router
  const router = useRouter();

  /* useEffect(() => {
    console.log(data);
    console.log(localStorage);
    if (!loading && (!data || !data.getUser)) {
      localStorage.removeItem("token");
      router.push("/login");
    }
  }); */
  if (loading) return "Loading";
  if (error) return "error";
  if (!data) return "Redireccionando";
  if (!data.getUser) {
    localStorage.removeItem("token");
    router.push("/login");
    router.reload();
    return "Redireccionando";
  }
  return (
    <>
      <div className="bg-gray-200 h-auto">
        <div className="sm:flex">
          <Sidebar />
          <main className="sm:min-h-screen h-auto px-5 main-container sm:w-3/4 xl:w-5/6">
            <div className="">
              <h1 className="text-2xl text-gray-800 foto-sans">{titlePage}</h1>
            </div>
            <div className="h-auto flex flex-col content-between">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
