//src/redux/actions/authActions.js
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/authActions";

const initialState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "",
  language: ""
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, user: null };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default clientReducer;
