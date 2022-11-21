import { Routes, Route, BrowserRouter } from "react-router-dom";

import NavLinks from "./pages/NavLinks";
import Products from "./pages/Products";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLinks />}>
          <Route index element={<Products />}></Route>
          <Route path="products/:productId" element={<SingleProduct />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
