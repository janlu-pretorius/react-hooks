import React, { Children, createContext, ReactNode, useContext } from "react";

interface Product {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
}
const ProductContext = createContext<Product>({});

const ProductProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProductContext.Provider
      value={{
        id: 1,
        name: "Product 1",
        price: 100,
        description: "Product 1 description",
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const ProducCard = () => {
  const product = useContext(ProductContext);
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

const ProductTotalCard = () => {
  const product = useContext(ProductContext);
  return (
    <div>
      <strong>R{product.price?.toFixed(2)}</strong>
    </div>
  );
};

export const UseContext = () => {
  return (
    <ProductProvider>
      <h1>UseContext</h1>
      <hr />
      <div style={{ display: "flex" }}>
        <ProducCard />
        <hr />
        <ProductTotalCard />
      </div>
    </ProductProvider>
  );
};
