/**
 * pages reducer takes state and action and always returns state;
 * updates total pages in relation to total posts and posts per page
 */
export const page = (state = {}, action) => {
  switch (action.type) {
    case "PAGES":
      return { ...state, pages: action.pages };
    default:
      return state;
  }
};
