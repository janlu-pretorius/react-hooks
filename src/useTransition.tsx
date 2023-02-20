import React, { useState, useTransition } from "react";

const mockProducts = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 30 },
  { id: 4, name: "Product D", price: 40 },
  { id: 5, name: "Product E", price: 50 },
  { id: 6, name: "Product F", price: 60 },
  { id: 7, name: "Product G", price: 70 },
  { id: 8, name: "Product H", price: 80 },
];

export const UseTransition = () => {
  const [showProducts, setShowProducts] = useState(true);
  const [isPending, startTransition] = useTransition();

  const addProduct = () => {
    mockProducts.push({
      id: mockProducts.length + 1,
      name: `Product ${mockProducts.length + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
    });
  };

  const handleClick = () => {
    startTransition(() => {
      addProduct();
    });
  };

  const Product = (product) => {
    let i = 0;
    while (i < 100000000) {
      i++;
    }
    return (
      <li key={product.id}>
        {product.name} - ${product.price}
      </li>
    );
  };

  return (
    <>
      <h1>UseTransition</h1>
      <hr />
      <div>
        <button onClick={() => setShowProducts(!showProducts)}>
          Show Products: {showProducts}
        </button>
      </div>
      <div>
        <button onClick={handleClick}>Add product</button>
      </div>
      {showProducts ? (
        isPending ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {mockProducts.map((product) => (
              <Product {...product} />
            ))}
          </ul>
        )
      ) : (
        <>No products</>
      )}
    </>
  );
};
