import React, { useState, useMemo, useCallback } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const mockProducts: Product[] = [
  { id: 1, name: "fig", price: 10 },
  { id: 4, name: "pencil", price: 40 },
  { id: 2, name: "mango", price: 20 },
  { id: 5, name: "orange", price: 50 },
  { id: 3, name: "apple", price: 30 },
];

export const UseMemo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price");

  // when you define a function inside a component, it gets re-created every time the component re-renders
  // child components may re-render even if their own props didn't change
  const handleSearchTermChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
  );

  const sortedProducts = useMemo(() => {
    const sorted = [...mockProducts];
    sorted.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return a.price - b.price;
      }
    });
    return sorted;
  }, [sortBy]);

  const filteredProducts = useMemo(() => {
    return sortedProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, sortedProducts]);

  return (
    <div>
      <h1>useMemo & useCallBack</h1>
      <hr />
      <div>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text" onChange={handleSearchTermChange} />
      </div>
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
