import React from "react";
import Layout from "../Components/Layout";
import ProductGrid from "../Components/Dashboard/ProductsGrid";

const Index = () => {
  return (
    <Layout titlePage={"Dashboard"}>
      <h2>Estatus del producto</h2>
      <ProductGrid />
      <div className=""></div>
    </Layout>
  );
};

export default Index;
