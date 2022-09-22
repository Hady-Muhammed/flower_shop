import AboutUs from "../components/AboutUs";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Reviews from "../components/Reviews";

const Home = ({
  setFavProducts,
  favProducts,
  selectedProducts,
  setSelectedProducts,
  isLoggedIn
}) => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Benefits />
      <Products
        setSelectedProducts={setSelectedProducts}
        selectedProducts={selectedProducts}
        favProducts={favProducts}
        setFavProducts={setFavProducts}
        isLoggedIn={isLoggedIn}
      />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
