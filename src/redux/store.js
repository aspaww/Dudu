// src/store.js
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "./utils/reduxThunk";
import { createLogger } from "redux-logger";

// -------------------- Client Reducer --------------------
const initialClientState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "",
  language: "",
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
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_PRODUCT_LIST":
      return { ...state, productList: action.payload };
    case "SET_TOTAL":
      return { ...state, total: action.payload };
    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };
    case "SET_LIMIT":
      return { ...state, limit: action.payload };
    case "SET_OFFSET":
      return { ...state, offset: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

// -------------------- ShoppingCart Reducer --------------------
const initialShoppingCartState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialShoppingCartState, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "SET_PAYMENT":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

// -------------------- Root Reducer --------------------
const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

// Logger middleware oluşturuluyor:
const loggerMiddleware = createLogger({
  collapsed: true,
  duration: true,
  timestamp: false,
});

// Store oluşturuluyor:
const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
