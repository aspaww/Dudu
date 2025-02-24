//src/actions/clientAcitons.js
import axiosInstance from "../api/axiosInstance";

// Synchronous action creators:
export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

// Thunk action creator to fetch roles from the API:
export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Error fetching roles:", error);
      // Opsiyonel: Hata durumunda ek bir action dispatch edebilirsiniz.
    }
  };
};
