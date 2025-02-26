// src/redux/createStore.js
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "../utils/reduxThunk";

// -------------------- Client Reducer --------------------
const initialClientState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "",
  language: ""
};

const clientReducer = (state = initialClientState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload };
    case "LOGIN_FAIL":
      return { ...state, user: null };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// -------------------- Product Reducer --------------------
const initialProductState = {
  categories: [],
  productList: [],
  selectedCategory: null,
  selectedProduct: null,
  loading: false,
  error: null
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_PRODUCT_LIST":
      return { ...state, productList: action.payload };
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_SELECTED_PRODUCT":
      return { ...state, selectedProduct: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

// -------------------- ShoppingCart Reducer --------------------
const initialShoppingCartState = {
  cart: [],
  payment: {},
  address: {},
  loading: false,
  error: null
};

const shoppingCartReducer = (state = initialShoppingCartState, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "SET_PAYMENT":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

// -------------------- Root Reducer --------------------
const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer
});

export async function initializeStore() {
  // Import redux-logger dynamically with ?commonjs query parameter
  const reduxLogger = await import('redux-logger?commonjs');
  const logger = reduxLogger.default;
  
  // Create store with middleware
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );
  
  return store;
}
