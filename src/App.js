import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>

    // <div className="App">
    //   <Route exact path="/" component={Home} />
    //   <Route path="/product/:id" component={Product} />
    //   <Route path="/cart" component={Cart} />
    //   <Route path="/signin" component={SignIn} />
    //   <Route path="/signup" component={SignUp} />
    // </div>
  );
}
export default App;
