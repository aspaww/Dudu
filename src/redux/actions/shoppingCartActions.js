// src/redux/actions/shoppingCartActions.js

export const setCart = (cart) => ({
  type: "SET_CART",
  payload: cart,
});

export const addToCart = (product, count = 1) => ({
  type: "ADD_TO_CART",
  payload: { product, count },
});

export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});

export const updateCartItem = (productId, count) => ({
  type: "UPDATE_CART_ITEM",
  payload: { productId, count },
});

export const setPayment = (payment) => ({
  type: "SET_PAYMENT",
  payload: payment,
});

export const setAddress = (address) => ({
  type: "SET_ADDRESS",
  payload: address,
});

export const setLoading = (loading) => ({
  type: "SET_LOADING",
  payload: loading,
});

export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

// Thunk action creator for processing checkout
export const processCheckout = () => async (dispatch, getState) => {
  dispatch(setLoading(true));
  
  try {
    const { cart, payment, address } = getState().shoppingCart;
    
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cart,
        payment,
        address,
      }),
    });

    if (!response.ok) {
      throw new Error('Checkout failed');
    }

    const data = await response.json();
    dispatch(clearCart());
    return data;
  } catch (error) {
    dispatch(setError(error.message));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
};
