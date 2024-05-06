/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from "react";
// import { addCollectionsandDocs } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";

// Utils method to get the items form the firestore :
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      console.log(categoryMap);
      setCategories(categoryMap);
    };
    getCategoryMap();
  }, []);

  // shop_data dump in firestore :
  // useEffect(()=>{
  //   addCollectionsandDocs('categories', SHOP_DATA)
  // },[])

  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
