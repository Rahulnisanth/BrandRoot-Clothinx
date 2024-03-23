import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../context/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categories).map((key) => {
        const products = categories[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default Shop;
