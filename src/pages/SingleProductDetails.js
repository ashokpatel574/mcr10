import React from "react";
import { useParams, useNavigate } from "react-router";
import { useData } from "../context/DataContext";

const SingleProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const {
    state: { inventoryState },
  } = useData();

  const inventoryItem = inventoryState.find(
    (item) => item.id === Number(productId)
  );

  if (inventoryItem) {
    const {
      name,
      imageUrl,
      department,
      description,
      price,
      stock,
      sku,
      supplier,
      delivered,
    } = inventoryItem;
    return (
      <section className="inventory_container invertory_singleItem_list flex-column">
        <span>
          <button onClick={() => navigate(`/products`)} className="btn backBtn">
            Back
          </button>
        </span>
        <h3> {name}</h3>
        <div>
          <img src={imageUrl} alt={name} className="imgCover" />
        </div>
        <p>Price: $ {price}</p>
        <p>Stock: {stock}</p>
        <p>Supplier: {supplier}</p>
        <p>Department: {department}</p>
        <p>SKU: {sku}</p>
        <p>Delivered: {delivered}</p>
        <p>Description: {description}</p>
      </section>
    );
  } else {
    return <h3>No inventory Item found!</h3>;
  }
};

export default SingleProductDetails;
