import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductCards = () => {
  const { category } = useParams();
  const allProducts = useLoaderData();
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = allProducts.filter(
        (product) => product.category === category
      );
      setNewProducts(filteredByCategory);
    } else {
      setNewProducts(allProducts);
    }
  }, [allProducts, category]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-center mb-2 text-xl font-semibold">
        Selected Category:{" "}
        <span className="text-blue-700">{category || "All Products"}</span>
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {newProducts.length === 0 ? (
          <p className="text-center text-4xl pt-24 font-bold text-gray-900 col-span-full">No products found.</p>
        ) : (
          newProducts.map((product) => (
            <ProductCard key={product.product_id} product={product}></ProductCard>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCards;
