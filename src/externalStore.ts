import React from "react";

let nextId = 0;
let products = [{ id: nextId++, name: "Product #" + nextId }];
let listeners = [];

export const productStore = {
  addProduct() {
    products = [...products, { id: nextId++, name: "Product #" + nextId }];
    emitChange();
  },
  removeProduct(id) {
    products = products.filter((p) => p.id !== id);
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return products;
  },
};
const emitChange = () => {
  for (let listener of listeners) {
    listener();
  }
};
