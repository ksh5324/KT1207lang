const codeState = {
  code: [],
};

export const SET_OUTPUT = "SET_OUTPUT";

const codeReducer = (state = codeState, action: any) => {
  switch (action.type) {
    case SET_OUTPUT:
      return {
        ...state,
        code: [...action.data],
      };
    default:
      return state;
  }
};

export default codeReducer;
