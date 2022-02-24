import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import ProductList from "./containers/ProductList";
import Header from "./containers/Header";
import "./App.css";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
  
        <Header />
        <BrowserRouter>
        <Routes>
          <Route path="/" exact element ={<ProductList/>} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
          <Route>404 Not Found!</Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;