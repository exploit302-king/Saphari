import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { showInfo } from "../utils/toast";
import "../css/Wishlist.css";
function Wishlist({ wishlist, setWishlist }) {

    const removeWishlist = (id) => {

        setWishlist(
            wishlist.filter((item) => item.id !== id)
        );

        showInfo("Removed from wishlist.");

    };

    return (
        <div className="wishlist-page">
            <div className="wishlist-header">
                <h1>Wishlist</h1>
            </div>
            <div className="wishlist-table-wrapper">
                <table>

                    <thead>

                        <tr>

                            <th>Image</th>

                            <th>Product</th>

                            <th>Price</th>

                            <th>Stock</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {wishlist.length > 0 ? (

                            wishlist.map((item) => (

                                <tr key={item.id}>

                                    <td>

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="wishlist-image"
                                        />

                                    </td>

                                    <td>{item.name}</td>

                                    <td>{item.price}</td>

                                    <td>

                                        <span className="in-stock">

                                            In Stock

                                        </span>

                                    </td>

                                    <td className="wishlist-actions">

                                        <Link
                                            to={`/product/${item.id}`}
                                            className="view-btn"
                                        >
                                            View
                                        </Link>

                                        <button
                                            className="remove-btn"
                                            onClick={() => removeWishlist(item.id)}
                                        >

                                            <FaTrash />

                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="5"
                                    className="no-wishlist"
                                >

                                    No wishlist items found.

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default Wishlist;