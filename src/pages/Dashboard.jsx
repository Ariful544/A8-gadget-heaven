import { useState } from "react";
import CartPage from "./CartPage";
import WishlistPage from "./WishlistPage";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const [isCartView, setIsCartView] = useState(true);
  const allProducts = useLoaderData();

  // Fallback if allProducts is undefined or null
  if (!allProducts || allProducts.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <div className="hero bg-[#9538E2] py-8 mb-8">
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>

            <div>
              <button
                onClick={() => setIsCartView(true)}
                className={`btn rounded-full w-32 mb-10 ${
                  isCartView
                    ? "bg-white text-black border-2 border-black shadow-md"
                    : ""
                }`}
              >
                Cart
              </button>
              <button
                onClick={() => setIsCartView(false)}
                className={`btn rounded-full mb-10 w-32 ml-3 ${
                  !isCartView
                    ? "bg-white text-black border-2 border-black shadow-md"
                    : ""
                }`}
              >
                WishList
              </button>
            </div>
          </div>
        </div>
      </div>
    <div className="max-w-screen-xl mx-auto ">
       {/* Render CartPage or WishlistPage based on the state */}
       {isCartView ? (
        <CartPage allProducts={allProducts} />
      ) : (
        <WishlistPage allProducts={allProducts} />
      )}
    </div>
    </>
  );
};

export default Dashboard;
