const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_ID":
      return {...state, selectedId: action.payload,};
    case "ADD_TO_CART":
       return {...state, selectedId: action.payload.id, };
    default:
      return state;
  }
};

export default addToCartReducer;
