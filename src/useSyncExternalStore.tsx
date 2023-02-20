import { useSyncExternalStore } from "react";
import { productStore } from "./externalStore";

export const UseSyncExternalStore = () => {
  const products = useSyncExternalStore(
    productStore.subscribe,
    productStore.getSnapshot
  );

  const removeProd = (id) => () => {
    productStore.removeProduct(id);
  };
  return (
    <>
      <h1>useSyncExternalStore</h1>
      <hr />
      <button onClick={() => productStore.addProduct()}>Add Product</button>
      <ul>
        {products.map((product) => (
          <div>
            <li key={product.id}>{product.name}</li>
            <button onClick={removeProd(product.id)}>Remove Product</button>
          </div>
        ))}
      </ul>
    </>
  );
};
