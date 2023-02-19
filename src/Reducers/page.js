/**
 * page reducer takes state and action and always returns state;
 * updates current page
 */
export const page = (state = {}, action) => {
  switch (action.type) {
    case "PAGE":
      return { ...state, page: action.page };
    default:
      return state;
  }
};
