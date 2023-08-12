const sortByFilter = (data, sortBy) => {
  if (sortBy === "price") {
    return data.slice().sort((a, b) => a.price - b.price);
  } else if (sortBy === "stock") {
    return data.slice().sort((a, b) => a.stock - b.stock);
  } else {
    return data.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
};

const categoryFilter = (data, departments) => {
  if (departments === "all") {
    return data;
  }

  return data.filter((listItem) => {
    return listItem.department === departments;
  });
};

const lowStockFilter = (data, lowStock) => {
  if (lowStock.length >= 1) {
    return data.filter((item) => item.stock <= 10);
  } else {
    return data;
  }
};

const applyFilters = (products, filters) => {
  let filteredData = [...products];
  const { departments, lowStock, sortByCategory } = filters;

  filteredData = categoryFilter(filteredData, departments);
  filteredData = sortByFilter(filteredData, sortByCategory);
  filteredData = lowStockFilter(filteredData, lowStock);

  return filteredData;
};

export const useFilterData = (products, filters) => {
  const newStateData = applyFilters(products, filters);
  return { filteredData: newStateData };
};
