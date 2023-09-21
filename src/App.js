import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import PersonalProfile from "./Pages/PersonalProfile";

import ProductsAxios from "./Pages/ProductsAxios";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/profile" element={<PersonalProfile />}></Route>
      <Route path="/products" element={<ProductsAxios />}></Route>
    </Routes>
  );
}

export default App;
