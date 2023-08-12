import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import DepartmentPage from "./pages/DepartmentPage";

import SingleProductDetails from "./pages/SingleProductDetails";
import ProductListingPage from "./pages/ProductListingPage";
import AddProductPage from "./pages/AddProductPage";
import SideNavBar from "./components/SideNavBar";

import "./App.css";

const App = () => {
  return (
    <main className="app">
      <section className="main_container">
        <aside className="sideNav_container">
          <SideNavBar />
        </aside>
        <article className="inventory_container">
          <Routes>
            <Route path="/" element=<HomePage /> />
            <Route path="/departments" element=<DepartmentPage /> />
            <Route path="/products" element=<ProductListingPage /> />
            <Route
              path="/product/:productId"
              element=<SingleProductDetails />
            />
            <Route path="/addInventory" element=<AddProductPage /> />
            <Route path="*" element=<PageNotFound /> />
          </Routes>
        </article>
      </section>
    </main>
  );
};

export default App;
