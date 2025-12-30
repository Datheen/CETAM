import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import Comprar from "./pages/Comprar";
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const basename = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <div className="grow">
          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <Produtos />
                </>
              }
            />

            {/* COMPRAR COM ID */}
            <Route
              path="/comprar/:id"
              element={
                <>
                  <Header />
                  <Comprar />
                </>
              }
            />

            {/* 404 - NOT FOUND */}
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <NotFound />
                </>
              }
            />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
