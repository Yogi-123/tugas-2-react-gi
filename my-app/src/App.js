import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./Component/Product.css"
import ListProduct from "../src/Component/ListProduct"

function App() {
  return (
    <div className="App">
      <h1>Daftar Makanan</h1>
      <ListProduct />
    </div>
  );
}

export default App;
