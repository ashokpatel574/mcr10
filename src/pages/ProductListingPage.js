import { useNavigate } from "react-router";
import ProductFilter from "../components/ProductFilter";
import { useData } from "../context/DataContext";
import { useFilterData } from "../helper";

const ProductListingPage = () => {
  const {
    state: { inventoryState, filters },
  } = useData();

  const navigate = useNavigate();

  const { filteredData } = useFilterData(inventoryState, filters);

  return (
    <article className="product_container flex-column">
      <ProductFilter />
      <div className="productsList_section flex-column">
        <div className="productsList_header">
          <span>Image</span>
          <span>Name</span>
          <span>Description</span>
          <span>Price</span>
          <span>Stock</span>
          <span>Supplier</span>
        </div>

        <div className="productsList_body">
          <ul className="invertory_productsList flex-column">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <li
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                  }}
                  key={item.id}
                  className="invertory_productsList_item"
                >
                  <div className="invertory_productsList_item-image flex-center">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="imgCover"
                    />
                  </div>
                  <span className="invertory_productsList_item-name">
                    {item.name}
                  </span>
                  <span className="invertory_productsList_item-description">
                    {item.description}
                  </span>
                  <span>$ {item.price}</span>
                  <span>{item.stock}</span>
                  <span>{item.supplier}</span>
                </li>
              ))
            ) : (
              <h3 className="notItem_avaiable">No Items available!</h3>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProductListingPage;
