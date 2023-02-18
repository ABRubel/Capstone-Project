import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./Pages/Cart";
import Photos from "./Pages/Photos";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Photos />}></Route>

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
