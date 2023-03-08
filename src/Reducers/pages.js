/**
 * pages reducer takes state and action and always returns state;
 * updates total pages in relation to total posts and posts per page
 */
export const pagesR = (state = 0, action) => {
  switch (action.type) {
    case "PAGES":
      return action.pages;
    default:
      return state;
  }
};
