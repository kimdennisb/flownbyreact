/**
 * data reducer takes state and action arguments and always returns state
 * updates the fetch data
 */

export const dataR = (state = [], action) => {
  switch (action.type) {
    case "DATA":
      return [...state, ...action.data];
    default:
      return state;
  }
};
