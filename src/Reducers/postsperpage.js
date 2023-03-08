/**
 * postsperpage reducer takes state and action and always returns state;
 * updates current postsperpage
 */
export const postsperpageR = (state = 0, action) => {
  switch (action.type) {
    case "POSTSPERPAGE":
      return action.postsperpage;
    default:
      return state;
  }
};
