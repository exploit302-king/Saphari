function Cart({ cart }) {
  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="100"
            />

            <div>
              <h3>{item.name}</h3>
              <p>Rs. {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;