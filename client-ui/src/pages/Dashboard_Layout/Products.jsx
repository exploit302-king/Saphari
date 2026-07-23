import { useState } from "react";
import { showSuccess } from "../../utils/toast";
import productsData from "../../data/product";
import { Link } from "react-router-dom";
import "../Dashboard_Layout_css/Products.css";
function Products() {

    const [products, setProducts] = useState(productsData);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [status, setStatus] = useState("All");
    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        setProducts(
            products.filter((product) => product.id !== id)
        );

        showSuccess("Product deleted successfully.");

    };

    const filteredProducts = products.filter((product) => {

        const matchSearch =
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.brand.toLowerCase().includes(search.toLowerCase()) ||
            product.sku.toLowerCase().includes(search.toLowerCase());

        const matchCategory =
            category === "All" || product.category === category;

        const matchStatus =
            status === "All" || product.status === status;

        return matchSearch && matchCategory && matchStatus;

    });


    return (
        <div className="products-page">
            <div className="products-header">
                <h1>Products</h1>
                <Link
                    to="/dashboard/add-product"
                    className="add-product-btn"
                >
                    + Add Product
                </Link>
            </div>
            <div className="products-filters">
                <input
                    type="text"
                    placeholder="Search by Name, Brand or SKU..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="All">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Sports">Sports</option>
                    <option value="Home & Living">Home & Living</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Books">Books</option>
                </select>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >

                    <option value="All">All Status</option>

                    <option value="Active">Active</option>

                    <option value="Inactive">Inactive</option>

                </select>
            </div>
            <div className="products-table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>SKU</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            filteredProducts.length > 0 ? (

                                filteredProducts.map((product) => (

                                    <tr key={product.id}>

                                        <td>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="product-image"
                                            />
                                        </td>

                                        <td>{product.sku}</td>

                                        <td>{product.name}</td>

                                        <td>Rs. {product.price}</td>

                                        <td>
                                            <span
                                                className={
                                                    product.stock > 0
                                                        ? "stock-in"
                                                        : "stock-out"
                                                }
                                            >
                                                {product.stock}
                                            </span>
                                        </td>

                                        <td>
                                            <span
                                                className={
                                                    product.status === "Active"
                                                        ? "status-active"
                                                        : "status-inactive"
                                                }
                                            >
                                                {product.status}
                                            </span>
                                        </td>

                                        <td className="action-buttons">

                                            <Link
                                                to={`/product/${product.id}`}
                                                className="view-btn"
                                            >
                                                View
                                            </Link>

                                            <Link to={`/dashboard/edit-product/${product.id}`} className="edit-btn" >
                                                Edit
                                            </Link>

                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDelete(product.id)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="no-products"
                                    >
                                        No products found.
                                    </td>

                                </tr>

                            )
                        ) : (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="no-products"
                                >
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Products;