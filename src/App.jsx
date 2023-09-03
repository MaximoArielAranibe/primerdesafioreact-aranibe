import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import ErrorPage from "./Components/ErrorPage.jsx/ErrorPage";
import { Carousel } from "./Components/Carousel/Carousel";
import { Text } from "./Components/Text/Text";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Carousel />
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
