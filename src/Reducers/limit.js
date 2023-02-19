/**
 * limit reducer takes state and action arguments and always returns state
 * updates the fetch limit
 */

export const limit = (state = {}, action) => {
  switch (action.type) {
    case "LIMIT":
      return { ...state, limit: action.limit };
    default:
      return state;
  }
};
