import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import products from "../data/product.js";

function ProductDetail({ cart, setCart }) {

  // URL se id lena
  const { id } = useParams();

  
  // Matching product dhoondna
  const product = products.find((item) => item.id == id);

  // Add To Cart Function
  function addToCart() {

    const exist = cart.find((item) => item.id === product.id);

    if (exist) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }
  }

  // Product na mile
  if (!product) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Product Not Found
      </h1>
    );
  }

  return (
    <div className="product-detail">

      <div className="left">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="right">

        <h1>{product.name}</h1>

        <h2>Rs. {product.price}</h2>

        <p>{product.description}</p>

        <h3>Features</h3>

        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <button onClick={addToCart}>
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetail;