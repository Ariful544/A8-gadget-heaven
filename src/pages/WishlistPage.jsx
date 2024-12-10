import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getStoredWishList } from "../utility/addToDatabase";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const WishlistPage = ({ allProducts }) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const storedList = getStoredWishList();
    const storedListInteger = storedList.map((id) => id);

    const productList = allProducts.filter((product) =>
      storedListInteger.includes(product.product_id)
    );

    setCartList(productList);
  }, [allProducts]);

  const handleRemoveFromCart = (product_id) => {
    const updatedCartList = cartList.filter(
      (product) => product.product_id !== product_id,
      toast.error("This product remove the WishList ")
    );

    setCartList(updatedCartList);
    const updatedStoredList = updatedCartList.map(
      (product) => product.product_id
    );
    localStorage.setItem("product-list", JSON.stringify(updatedStoredList));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">WishList</h2>
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

export default WishlistPage;

WishlistPage.propTypes = {
  allProducts: PropTypes.array.isRequired,
};
