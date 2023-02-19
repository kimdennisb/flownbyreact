/**
 * page reducer takes state and action and always returns state;
 * updates current postsperpage
 */
export const postsperpage = (state = {}, action) => {
  switch (action.type) {
    case "POSTSPERPAGE":
      return { ...state, postsperpage: action.postsperpage };
    default:
      return state;
  }
};
