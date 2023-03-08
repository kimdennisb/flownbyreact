/**
 * limit reducer takes state and action arguments and always returns state
 * updates the fetch limit
 */

export const limitR = (state = 0, action) => {
  switch (action.type) {
    case "LIMIT":
      return action.limit;
    default:
      return state;
  }
};
