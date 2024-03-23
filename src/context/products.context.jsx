/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { addCollectionsandDocs } from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);
  useEffect(() => {
    addCollectionsandDocs("categories", SHOP_DATA);
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
