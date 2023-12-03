import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import ErrorPage from "./Components/ErrorPage.jsx/ErrorPage";
import { MyCarousel } from "./Components/Carousel/MyCarousel";
import { Text } from "./Components/Text/Text";
import ScrollToTop from "react-scroll-to-top";
import { useEffect } from "react";
import Marcas from "./Components/Marcas/Marcas";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop smooth color="#000" />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <MyCarousel />
                <section>
                  <Text texto="¡Nuestros Productos!" />
                  <ItemListContainer />
                </section>
              </>
            }
            errorElement={<ErrorPage />}
          />
          <Route
            exact
            path="/suplementos"
            element={<ItemListContainer />}
            errorElement={<ErrorPage />}
          />
          <Route
            exact
            path="/suplementos/:categoria"
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
