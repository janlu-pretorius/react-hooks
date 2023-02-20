import React, { useState, useDebugValue } from "react";

const useProductDisplayName = (productName: string, productPrice: string) => {
  const [productDisplayName, setProductDisplayName] = useState(
    `${productName} - $${productPrice}`
  );

  useDebugValue(productDisplayName, () => {
    return `product name: ${productName}, product price : ${productPrice}`;
  });

  return [productDisplayName, setProductDisplayName];
};

export const UseDebugValue = () => {
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");

  const [productDisplayName] = useProductDisplayName(productName, productPrice);

  return (
    <div>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setproductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setproductPrice(e.target.value)}
      />
      <br />
      <br />
      <p>{`ProductDisplayName: ${productDisplayName}`}</p>
    </div>
  );
};
