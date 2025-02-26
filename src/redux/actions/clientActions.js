// src/redux/actions/clientActions.js

// Synchronous Action Creators:
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

// Thunk Action Creator to fetch roles from the API (triggered only when needed):
export const fetchRoles = () => async (dispatch) => {
  try {
    // Example API call
    const response = await fetch('/api/roles');
    const roles = await response.json();
    dispatch(setRoles(roles));
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
};
