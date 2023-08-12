import React from "react";
import { useData } from "../context/DataContext";

const HomePage = () => {
  const {
    state: { inventoryState },
  } = useData();

  const totalStock = inventoryState.reduce((acc, curr) => acc + curr.stock, 0);

  const totalDelivered = inventoryState.reduce(
    (acc, curr) => acc + curr.delivered,
    0
  );

  const lowStockItems = inventoryState.filter(
    (item) => item.stock <= 10
  ).length;

  return (
    <article className="inventory_container">
      <ul className="inventoryLevel_list ">
        <li className="inventoryLevl_listItem flex-center flex-column">
          <p className="totalStock_value">{totalStock}</p>
          <p>Total Stock</p>
        </li>

        <li className="inventoryLevl_listItem flex-center flex-column">
          <p className="totalDelivered_value">{totalDelivered}</p>
          <p>Total Delivered</p>
        </li>

        <li className="inventoryLevl_listItem flex-center flex-column">
          <p className="lowStock_value">{lowStockItems}</p>
          <p>Low Stock Items</p>
        </li>
      </ul>
    </article>
  );
};

export default HomePage;
