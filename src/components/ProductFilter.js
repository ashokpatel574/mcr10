import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";

const ProductFilter = () => {
  const [productFilter, setProductFilter] = useState({
    departments: "all",
    lowStock: "",
    sortByCategory: "name",
  });

  const navigate = useNavigate();

  const {
    state: { filters },
    dispatch,
  } = useData();

  const departmentSelectHandler = (e) => {
    setProductFilter({ ...productFilter, departments: e.target.value });
    dispatch({ type: "FILTER_DEPARTMENT", payload: e.target.value });
  };

  const lowStockCheckBoxHandler = (e) => {
    const value = e.target.checked ? ["lowStock"] : [];
    setProductFilter({ ...productFilter, lowStock: value });
    dispatch({ type: "FILTER_LOWTOCK", payload: value });
  };

  const sortByCategoriesHandler = (e) => {
    setProductFilter({ ...productFilter, sortByCategory: e.target.value });
    dispatch({ type: "FILTER_SORTBYCATEGORY", payload: e.target.value });
  };

  return (
    <div className="productFilter_section">
      <div>Product</div>
      <div className="deparments_select_container">
        <label htmlFor="departments"></label>
        <select
          className="departments_select"
          id="departments"
          name="departments"
          value={filters.departments}
          onChange={departmentSelectHandler}
        >
          <option value="all">All Departments</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
      </div>

      <div className="lowStock_container">
        <label htmlFor="lowStockInclude">Low Stock Items</label>
        <input
          id="lowStockInclude"
          type="checkbox"
          className="lowStockInclude"
          name="lowStock"
          checked={filters.lowStock.includes("lowStock")}
          onChange={lowStockCheckBoxHandler}
        />
      </div>

      <div className="category_select_container">
        <label htmlFor="category"></label>
        <select
          className="departments_select"
          id="category"
          name="sortByCategory"
          value={filters.sortByCategory}
          onChange={sortByCategoriesHandler}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
      </div>

      <div className="addInterventory_btnContainer">
        <button
          onClick={() => navigate("/addInventory")}
          className="btn addInventoryBtn"
        >
          New
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
