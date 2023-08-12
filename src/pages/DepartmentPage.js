import React from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";

const DepartmentPage = () => {
  const { dispatch } = useData();
  const navigate = useNavigate();

  const departmentClickHandler = (type) => {
    dispatch({
      type: "FILTER_DEPARTMENT",
      payload: type,
    });

    navigate("/products");
  };

  return (
    <article className="inventory_container department_container_wrapper">
      <ul className="inventoryLevel_list ">
        <li className="inventoryLevl_listItem flex-center flex-column">
          <p onClick={() => departmentClickHandler("Kitchen")}>Kitchen</p>
        </li>

        <li className="inventoryLevl_listItem flex-center flex-column">
          <p onClick={() => departmentClickHandler("Clothing")}>Clothing</p>
        </li>

        <li className="inventoryLevl_listItem flex-center flex-column">
          <p onClick={() => departmentClickHandler("Toys")}>Toys</p>
        </li>
      </ul>
    </article>
  );
};

export default DepartmentPage;
