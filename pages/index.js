import React from "react";
import Layout from "../Components/Layout";
import ProductGrid from "../Components/Dashboard/ProductsGrid";

const Index = () => {
  return (
    <Layout titlePage={"Dashboard"}>
      <ProductGrid />
      <div className=""></div>
    </Layout>
  );
};

export default Index;
