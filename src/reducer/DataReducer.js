import { inventoryData } from "../contants";

export const initialState = {
  filters: JSON.parse(localStorage.getItem("inventoryFilters")) || {
    departments: "all",
    lowStock: [],
    sortByCategory: "name",
  },
  inventoryState:
    JSON.parse(localStorage.getItem("InventoryManagementData")) ||
    inventoryData,
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_DEPARTMENT": {
      return {
        ...state,
        filters: { ...state.filters, departments: action.payload },
      };
    }

    case "FILTER_LOWTOCK": {
      return {
        ...state,
        filters: { ...state.filters, lowStock: action.payload },
      };
    }

    case "FILTER_SORTBYCATEGORY": {
      return {
        ...state,
        filters: { ...state.filters, sortByCategory: action.payload },
      };
    }

    case "NEW_INVENTORY_ADDED": {
      return {
        ...state,
        inventoryState: [
          ...state.inventoryState,
          { ...action.payload, id: Math.floor(Math.random() * 10000000) },
        ],
      };
    }

    default:
      return state;
  }
};
