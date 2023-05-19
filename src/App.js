import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Login from "./components/login/login";
import Register from "./components/Register/register";
import AddProducts from "./components/Products/AddProducts";
import UpdateProducts from "./components/Products/UpdateProducts";
import Protected from "./components/Protected/protected";
import ProductList from "./components/Products/ProductList";
import SearchProducts from "./components/Products/SearchProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<Protected Cmp={AddProducts} />} />
          <Route path="/update/:id/*" element={<Protected Cmp={UpdateProducts} />} />
          <Route path="/search/" element={<Protected Cmp={SearchProducts} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
