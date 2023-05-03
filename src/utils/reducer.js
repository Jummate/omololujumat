export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return { ...state, showMenu: action.payload.showMenu };
  }
};
