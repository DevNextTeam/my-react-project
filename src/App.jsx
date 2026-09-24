import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLayout from "./layouts/CustomerLayout";
import Home from "./pages/customer/Home";
import Menu from "./pages/customer/Menu";
import ProductDetail from "./pages/customer/ProductDetail";
import Cart from "./pages/customer/Cart";
import Checkout from "./pages/customer/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CustomerLayout>
              <Home />
            </CustomerLayout>
          }
        />
        <Route
        path="/cart"
        element={
          <CustomerLayout>
            <Cart />
          </CustomerLayout>
        }
      />
        <Route
          path="/menu"
          element={
            <CustomerLayout>
              <Menu />
            </CustomerLayout>
          }
        />

        <Route
          path="/menu/:id"
          element={
            <CustomerLayout>
              <ProductDetail />
            </CustomerLayout>
          }
        />
        <Route
        path="/checkout"
        element={
          <CustomerLayout>
            <Checkout />
          </CustomerLayout>
        }
      />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;