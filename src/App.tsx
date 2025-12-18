
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Comprar from "./pages/Comprar";
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Header/>
                <Home/>
                <Produtos/>
              </>
            } />
            <Route path="/comprar" element={<><Header/><Comprar /></>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
