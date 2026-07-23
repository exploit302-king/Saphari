import { useState } from "react";

import "../Dashboard_Layout_css/AddProduct.css";

function AddProduct() {

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
        image: null,
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

        console.log(formData);
    };

    const handleReset = () => {

        setFormData({
            name: "",
            category: "",
            price: "",
            stock: "",
            description: "",
            image: null,
        });

    };

    return (

        <div className="add-product-page">

            <h1>Add New Product</h1>

            <form
                className="product-form"
                onSubmit={handleSubmit}
            >

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

                    <label>Category</label>

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >

                        <option value="">
                            Select Category
                        </option>

                    </select>

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

                    <label>Description</label>

                    <textarea
                        rows="5"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>Product Image</label>

                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                    />

                </div>

                <div className="form-actions">

                    <button type="submit">
                        Save Product
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                    >
                        Reset
                    </button>

                </div>

            </form>

        </div>

    );
}
export default AddProduct;