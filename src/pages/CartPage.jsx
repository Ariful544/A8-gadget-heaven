import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getStoredList } from "../utility/addToDatabase";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const CartPage = ({ allProducts }) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const storedList = getStoredList();
    const storedListInteger = storedList.map((id) => id);

    const productList = allProducts.filter((product) =>
      storedListInteger.includes(product.product_id)
    );

    setCartList(productList);
  }, [allProducts]);

  const handleRemoveFromCart = (product_id) => {
    const updatedCartList = cartList.filter(
      (product) => product.product_id !== product_id,
      toast.error("Remove Product")
    );

    setCartList(updatedCartList);

    const updatedStoredList = updatedCartList.map(
      (product) => product.product_id
    );
    localStorage.setItem("product-list", JSON.stringify(updatedStoredList));
  };

  const handleSortByPrice = () => {
    const sortedCartList = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedCartList);
    toast.success("Product Sort Listed");
  };

  const handlePurchasesbtn = () => {
    setCartList([]);
    localStorage.removeItem("product-list");
  };

  const totalCost = cartList.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  return (
    <div className="">
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Cart</h2>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl">Total Cost: ${totalCost.toFixed(2)}</h1>
            <button
              onClick={handleSortByPrice}
              className="border-2 px-6 py-2 rounded-full border-purple-700 text-[#9538E2] hover:bg-[#9538E2] hover:text-white "
            >
              Sort By Price
            </button>
            <button
              onClick={handlePurchasesbtn}
              className="px-6 py-2 bg-[#9538E2] text-white rounded-3xl"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      <p>Number of items: {cartList.length}</p>

      {cartList.length > 0 ? (
        <div className="space-y-3">
          {cartList.map((product) => (
            <div
              key={product.product_id}
              className="card card-side bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  className="w-32 px-4"
                  src={product.product_image}
                  alt={product.product_title || "Product"}
                />
              </figure>
              <div className="card-body relative">
                <h2 className="card-title">{product.product_title}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <div className="card-actions absolute right-5 top-3">
                  <button
                    className="text-2xl text-red-600 border-red-400 border-2 rounded-full p-2"
                    onClick={() => handleRemoveFromCart(product.product_id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;

CartPage.propTypes = {
  allProducts: PropTypes.array.isRequired,
};
