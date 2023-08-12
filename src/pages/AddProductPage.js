import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";

const AddProductPage = () => {
  const [newInventoryData, setNewInventoryData] = useState({
    department: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    sku: "",
    supplier: "",
    delivered: "",
    imageUrl: "",
  });

  const [isProductAdd, setIsProductAdd] = useState(false);

  const { dispatch } = useData();

  const inventoryInputHandler = (e) => {
    const { name, value } = e.target;
    setNewInventoryData({ ...newInventoryData, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    let newImgUrl;

    if (newInventoryData.imageUrl === "") {
      if (newInventoryData.department === "Kitchen") {
        newImgUrl = "https://m.media-amazon.com/images/I/616vJsA33kL.jpg";
      }

      if (newInventoryData.department === "Clothing") {
        newImgUrl =
          "https://4.imimg.com/data4/KS/HD/MY-718120/mens-casual-t-shirts-500x500.jpg";
      }

      if (newInventoryData.department === "Toys") {
        newImgUrl =
          "https://smalltub.com/products/main/15451427001539408762Building-Blocks-Set1A.jpg";
      }
    } else {
      newImgUrl = newInventoryData.imageUrl;
    }

    const data = {
      department: newInventoryData.department,
      name: newInventoryData.name,
      description: newInventoryData.description,
      price: Math.abs(newInventoryData.price),
      stock: Math.abs(newInventoryData.stock),
      sku: newInventoryData.sku,
      supplier: newInventoryData.supplier,
      delivered: Math.abs(newInventoryData.delivered),
      imageUrl: newImgUrl,
    };

    dispatch({
      type: "NEW_INVENTORY_ADDED",
      payload: data,
    });

    setNewInventoryData({
      department: "",
      name: "",
      description: "",
      price: "",
      stock: "",
      sku: "",
      supplier: "",
      delivered: "",
      imageUrl: "",
    });

    setIsProductAdd(true);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsProductAdd(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [isProductAdd]);

  return (
    <article className="inventory_container inventory_container_form flex-column">
      {isProductAdd ? (
        <>
          <h3 className="addedDetails_message">
            Please Wait, Adding new inventory details in inventory Management
            database!
          </h3>
        </>
      ) : (
        <>
          <h3>Add New Product</h3>
          <form
            className="inventory_container_form_wrapper flex-column"
            value={newInventoryData}
            onSubmit={formSubmitHandler}
          >
            <div>
              <label htmlFor="departmentInventory">Department:</label>
              <select
                className="department"
                id="departmentInventory"
                name="department"
                value={newInventoryData.department}
                onChange={inventoryInputHandler}
                required
              >
                <option value="" disabled>
                  Select Department
                </option>
                <option value="Kitchen">Kitchen</option>
                <option value="Clothing">Clothing</option>
                <option value="Toys">Toys</option>
              </select>
            </div>

            <div>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                className="name"
                type="text"
                placeholder="Enter name here"
                name="name"
                value={newInventoryData.name}
                onChange={inventoryInputHandler}
                required
              />
            </div>

            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                className="description"
                value={newInventoryData.description}
                onChange={inventoryInputHandler}
                maxLength={200}
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="price">Price:</label>
              <input
                id="price"
                className="price"
                type="number"
                placeholder="Enter price here"
                name="price"
                value={newInventoryData.price}
                onChange={inventoryInputHandler}
                min={1}
                required
              />
            </div>

            <div>
              <label htmlFor="stock">Stock:</label>
              <input
                id="stock"
                className="stock"
                type="number"
                placeholder="Enter stock here"
                name="stock"
                value={newInventoryData.stock}
                onChange={inventoryInputHandler}
                min={1}
                required
              />
            </div>

            <div>
              <label htmlFor="sku">SKU:</label>
              <input
                id="sku"
                className="sku"
                type="text"
                placeholder="Enter sku here"
                name="sku"
                value={newInventoryData.sku}
                onChange={inventoryInputHandler}
                required
              />
            </div>

            <div>
              <label htmlFor="supplier">Supplier:</label>
              <input
                id="supplier"
                className="supplier"
                type="text"
                placeholder="Enter supplier here"
                name="supplier"
                value={newInventoryData.supplier}
                onChange={inventoryInputHandler}
                required
              />
            </div>

            <div>
              <label htmlFor="delivered">Delivered:</label>
              <input
                id="delivered"
                className="delivered"
                type="number"
                placeholder="Enter delivered here"
                name="delivered"
                value={newInventoryData.delivered}
                onChange={inventoryInputHandler}
                min={0}
                required
              />
            </div>

            <div>
              <label htmlFor="imageUrl">Image Url:</label>
              <input
                id="imageUrl"
                className="imageUrl"
                type="text"
                placeholder="Enter image Url here"
                name="imageUrl"
                value={newInventoryData.imageUrl}
                onChange={inventoryInputHandler}
              />
            </div>

            <button type="submit" className="btn submitBtn">
              Add Product
            </button>
          </form>
        </>
      )}
    </article>
  );
};

export default AddProductPage;
