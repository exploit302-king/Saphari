import ProductCard from "../components/ProductCard.jsx";

function Home({ wishlist, setWishlist }) {
  return (
    <ProductCard
      wishlist={wishlist}
      setWishlist={setWishlist}
    />
  );
}

export default Home;