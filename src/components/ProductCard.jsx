import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { product_image, product_title, price } = product;
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate(`/productdetails/${product_title}`);
  };

  return (
    <div>
      <div className="card bg-base-100 h-full border">
        <figure className="px-10 pt-10 h-64">
          <img src={product_image} alt={product_title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: ${price} </p>
          <div className="card-actions">
            <button
              onClick={handleBuyNow}
              className="border-2 px-6 py-2 rounded-full border-purple-700 text-[#9538E2] hover:bg-[#9538E2] hover:text-white "
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    product_image: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
