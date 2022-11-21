const reducer = (state, action) => {
  if (action.type === "SEARCH_DATA") {
    return (state = {
      ...state,
      isLoading: false,
      list: action.payload,
      noMatch: false,
    });
  }
  if (action.type === "INPUT_SEARCH") {
    return (state = { ...state, isLoading: false, word: action.payload });
  }
  if (action.type === "LOADING") {
    return (state = { ...state, isLoading: true });
  }

  if (action.type === "NO_MATCH") {
    return (state = { ...state, noMatch: true, list: [] });
  }
  if (action.type === "GRAB_ID") {
    return (state = { ...state, productId: action.payload, isLoading: false });
  }
  if (action.type === "GET_PRODUCT") {
    return (state = { ...state, product: action.payload, isLoading: false });
  }
};

export default reducer;
