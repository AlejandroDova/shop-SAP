// import { useState } from 'react'

import "./App.css";
import DraweCarrito from "./Main/DraweCarrito";
import Header from "./Main/Header";
import Products from "./Main/Products";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <DraweCarrito />
      <Header />
      <Products />
    </>
  );
}

export default App;
