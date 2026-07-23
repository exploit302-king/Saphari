import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { showSuccess, showInfo } from "../utils/toast";
import "../css/productCard.css";
import products from "../data/product.js";

function ProductCard({ wishlist, setWishlist }) {
    const toggleWishlist = (product) => {

        const exists = wishlist.some((item) => item.id === product.id);

        if (exists) {

            setWishlist(
                wishlist.filter((item) => item.id !== product.id)
            );

            showInfo("Removed from wishlist.");

        } else {

            setWishlist([
                ...wishlist,
                product,
            ]);

            showSuccess("Added to wishlist.");

        }

    };
    return (
        <div className="container">
            <div className="products">

                {products.map((product) => (
                    <div className="card" key={product.id}>
                        <button
                            className="wishlist-btn"
                            onClick={() => toggleWishlist(product)}
                        >

                            {wishlist.some(item => item.id === product.id)
                                ? <FaHeart />
                                : <FaRegHeart />
                            }

                        </button>
                        <img src={product.image} alt={product.name} />

                        <div className="card-body">
                            <h3>{product.name}</h3>
                            <p>Rs. {product.price}</p>

                            <a>Buy Now</a>
                            <Link className="detail-btn" to={`/product/${product.id}`}>
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ProductCard;