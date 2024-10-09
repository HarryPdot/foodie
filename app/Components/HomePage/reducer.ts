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
    case "SET_RANK_BY":
      return {
        ...state,
        rankBy: action.payload,
      };
    case "ADD_ADDRESS":
      return {
        ...state,
        addressArr: [...state.addressArr, action.payload],
      };
    default:
      return state;
  }
};
