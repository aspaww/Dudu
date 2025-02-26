//src/redux/actions/authActions.js
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const loginUser = (email, password, rememberMe, navigate) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/login", { email, password });
    const userData = response.data;
    dispatch({ type: LOGIN_SUCCESS, payload: userData });
    if (rememberMe) {
      localStorage.setItem("token", userData.token);
    }
    toast.success("Login successful!");
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
    toast.error(error.response?.data?.error || "Login failed");
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};
