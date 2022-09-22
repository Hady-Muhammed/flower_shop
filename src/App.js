import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Profile from './pages/Profile'
function App() {

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [favProducts, setFavProducts] = useState([]);
    // Auth State
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Router>
      <Header
        selectedProducts={selectedProducts}
        favProducts={favProducts}
        setSelectedProducts={setSelectedProducts}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
        <Routes>
          <Route
            path="/flower_shop"
            element={
              <Home
                setSelectedProducts={setSelectedProducts}
                selectedProducts={selectedProducts}
                favProducts={favProducts}
                setFavProducts={setFavProducts}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/flower_shop/product/:id"
            element={
              <ProductDetail
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route path='/flower_shop/profile' element={<Profile/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
