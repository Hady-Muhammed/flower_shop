import React from "react";
import MainHeading from "./MainHeading";
import { ProductsData } from "../data";
import FlowerPot from "./FlowerPot";

const Products = ({
  favProducts,
  setFavProducts,
  selectedProducts,
  setSelectedProducts,
  isLoggedIn
}) => {
  return (
    <section className="mt-16 max-w-[1150px] mx-auto p-5 mb-10" id="products">
      <MainHeading firstWord="Latest" p="Products" />
      <div className="gap-10 xs:grid md:grid-cols-2 lg:grid-cols-3 mt-20">
        {ProductsData.map((product, index) => (
          <FlowerPot
            setSelectedProducts={setSelectedProducts}
            selectedProducts={selectedProducts}
            favProducts={favProducts}
            setFavProducts={setFavProducts}
            product={product}
            key={index}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
