const themeState = {
  theme: "light",
};

export const THEME_CHANGE = "THEME_CHANGE";

const themeReducer = (
  state = themeState,
  action: { type: string; data: {} | string }
) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        theme: action.data,
      };
    default:
      return state;
  }
};

export default themeReducer;
