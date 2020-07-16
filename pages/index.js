import React from "react";
import Layout from "../Components/Layout";
import ProductGrid from "../Components/Dashboard/ProductsGrid";
import LastSales from "../Components/Dashboard/LastSales";

const Index = () => {
  return (
    <Layout titlePage={"Dashboard"}>
      <ProductGrid />
      <LastSales />
    </Layout>
  );
};

export default Index;
