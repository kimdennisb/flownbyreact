/**
 * page reducer takes state and action and always returns state;
 * updates current page
 */

export const pageR = (state = 0, action) => {
  switch (action.type) {
    case "PAGE":
      return action.page;
    default:
      return state;
  }
};
