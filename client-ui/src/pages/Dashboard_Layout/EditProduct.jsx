import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../data/product";
import { showSuccess } from "../../utils/toast";
import "../Dashboard_Layout_css/AddProduct.css";

function EditProduct() {

    const { id } = useParams();

    const product = products.find(
        (item) => item.id == id
    );

    const [formData, setFormData] = useState({

        name: product?.name || "",

        sku: product?.sku || "",

        brand: product?.brand || "",

        category: product?.category || "",

        price: product?.price || "",

        stock: product?.stock || "",

        status: product?.status || "Active",

        description: product?.description || "",

        image: product?.image || "",

    });

    const handleChange = (e) => {

        const { name, value, files } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: files ? files[0] : value,

        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        showSuccess("Product updated successfully.");

        console.log(formData);

    };

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    return (

        <div className="add-product-page">

            <h1>Edit Product</h1>

            <form
                className="product-form"
                onSubmit={handleSubmit}
            >

                <div className="form-row">

                    <div className="form-group">

                        <label>Product Name</label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>SKU</label>

                        <input
                            type="text"
                            name="sku"
                            value={formData.sku}
                            onChange={handleChange}
                        />

                    </div>

                </div>

                <div className="form-row">

                    <div className="form-group">

                        <label>Brand</label>

                        <input
                            type="text"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>Category</label>

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >

                            <option value="Electronics">Electronics</option>

                            <option value="Fashion">Fashion</option>

                            <option value="Accessories">Accessories</option>

                        </select>

                    </div>

                </div>

                <div className="form-row">

                    <div className="form-group">

                        <label>Price</label>

                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>Stock</label>

                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                        />

                    </div>

                </div>

                <div className="form-group">

                    <label>Status</label>

                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >

                        <option value="Active">Active</option>

                        <option value="Inactive">Inactive</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>Description</label>

                    <textarea
                        rows="5"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>Replace Product Image</label>

                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                    />

                </div>

                <div className="form-actions">

                    <button type="submit">
                        Update Product
                    </button>

                    <Link
                        to="/dashboard/products"
                        className="cancel-btn"
                    >
                        Cancel
                    </Link>

                </div>

            </form>

        </div>

    );

}

export default EditProduct;