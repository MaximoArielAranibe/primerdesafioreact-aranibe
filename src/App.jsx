import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListcontainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import ErrorPage from "./Components/ErrorPage.jsx/ErrorPage.jsx";
import { CarouselHeader } from "./Components/Carousel/CarouselHeader.jsx";
import { Text } from "./Components/Text/Text.jsx";
import ScrollToTop from "react-scroll-to-top";
import Marcas from "./Components/Marcas/Marcas.jsx";
import CartProvider from "./context/CartProvider.jsx";
import Carrito from "./Components/Carrito/Carrito.jsx";
import { Toaster } from "react-hot-toast";
import Loader from "./Components/Loader/Loader.jsx";
import { Footer } from "./Components/Footer/Footer.jsx"


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop smooth color="#000" />
          <NavBar />
          <Toaster />
          {loading ? (
            <Loader />
          ) : (
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <CarouselHeader />
                    <main>
                      <Text texto="¡Nuestros Productos!" />
                      <ItemListContainer />
                    </main>
                    <Footer />
                  </>
                }
                errorElement={<ErrorPage />}
              />
              <Route
                exact
                path="/suplementos/:category"
                element={<ItemListContainer />}
                errorElement={<ErrorPage />}
              />
              <Route
                exact
                path="/marcas/:brand"
                element={<Marcas />}
                errorElement={<ErrorPage />}
              />

              <Route
                exact
                path="/item/:id"
                element={<ItemDetailContainer />}
                errorElement={<ErrorPage />}
              />
              <Route
                exact
                path="/carrito"
                element={<Carrito />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/footer"
                element={<Footer />}
                errorElement={<ErrorPage />}
              />
            </Routes>

          )}
        </BrowserRouter>
      </div>
    </CartProvider>
  );
};


export default App;
