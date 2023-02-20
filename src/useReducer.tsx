import React, { useReducer } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
interface Cart {
  cart: Product[];
  total: number;
  numItems: number;
}

const initialState: Cart = {
  cart: [],
  total: 0,
  numItems: 0,
};

type Action =
  | { type: "addToCart"; product: Product }
  | { type: "removeFromCart"; productId: number }
  | { type: "reset" };

const reducer = (state: Cart, action: Action) => {
  switch (action.type) {
    case "addToCart":
      const newCart = [...state.cart, action.product];
      return {
        cart: newCart,
        total: newCart.reduce((acc, item) => acc + item.price, 0),
        numItems: newCart.length,
      };
    case "removeFromCart":
      const indexToRemove = state.cart.findIndex(
        (item) => item.id === action.productId
      );
      if (indexToRemove === -1) {
        return state;
      }

      const cartWithoutRemoved = [
        ...state.cart.slice(0, indexToRemove),
        ...state.cart.slice(indexToRemove + 1),
      ];
      return {
        cart: cartWithoutRemoved,
        total: cartWithoutRemoved.reduce((acc, item) => acc + item.price, 0),
        numItems: cartWithoutRemoved.length,
      };
    case "reset":
      return {
        cart: [],
        total: 0,
        numItems: 0,
      };
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Products = () => {
    const products: Product[] = [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        description: "Product 1 description",
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        description: "Product 2 description",
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
        description: "Product 3 description",
      },
      {
        id: 4,
        name: "Product 4",
        price: 400,
        description: "Product 4 description",
      },
      {
        id: 5,
        name: "Product 5",
        price: 500,
        description: "Product 5 description",
      },
    ];
    const handleAddToCart = (product: Product) => {
      dispatch({ type: "addToCart", product });
    };

    const handleRemoveFromCart = (productId: number) => {
      dispatch({ type: "removeFromCart", productId });
    };

    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
            <button onClick={() => handleRemoveFromCart(product.id)}>
              Remove from cart
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <Products />
      <hr />
      <p>Total products: {state.numItems}</p>
      <p>Total price: {state.total}</p>
    </div>
  );
};
