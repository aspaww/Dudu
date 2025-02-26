// src/redux/actions/productActions.js

export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

export const setProductList = (productList) => ({
  type: "SET_PRODUCT_LIST",
  payload: productList,
});

export const setTotal = (total) => ({
  type: "SET_TOTAL",
  payload: total,
});

export const setLimit = (limit) => ({
  type: "SET_LIMIT",
  payload: limit,
});

export const setOffset = (offset) => ({
  type: "SET_OFFSET",
  payload: offset,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

export const setSelectedCategory = (category) => ({
  type: "SET_SELECTED_CATEGORY",
  payload: category,
});

export const setSelectedProduct = (product) => ({
  type: "SET_SELECTED_PRODUCT",
  payload: product,
});

export const setFetchState = (state) => ({
  type: "SET_FETCH_STATE",
  payload: state,
});

export const setLoading = (loading) => ({
  type: "SET_LOADING",
  payload: loading,
});

export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});

// Thunk action creator for fetching products
export const fetchProducts = (params) => async (dispatch, getState) => {
  dispatch(setFetchState("FETCHING"));
  dispatch(setLoading(true));
  
  try {
    const { limit, offset, filter, selectedCategory } = getState().product;
    const queryParams = new URLSearchParams({
      limit,
      offset,
      filter,
      ...(selectedCategory && { category: selectedCategory }),
      ...params,
    });

    const response = await fetch(`/api/products?${queryParams}`);
    const data = await response.json();

    dispatch(setProductList(data.products));
    dispatch(setTotal(data.total));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setFetchState("FAILED"));
  } finally {
    dispatch(setLoading(false));
  }
};
