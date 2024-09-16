export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
      case "SET_SEARCH":
        return {
          ...state,
          search: action.payload,
        };
      case "SET_ADDRESS":
        return {
          ...state,
          address: action.payload,
        };
      default:
        return state;
  }
};
