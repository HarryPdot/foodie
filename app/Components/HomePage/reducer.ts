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
        savedAddresses: [...state.savedAddresses, action.payload],
      };
    case "LOAD_ADDRESS":
      return {
        ...state,
        savedAddresses: action.payload,
      };
    case "DELETE_ADDRESS":
      if (action.payload) {
        const newArray = [...state.savedAddresses];
        newArray.splice(action.payload, 1);
        return {
          ...state,
          savedAddresses: newArray,
        };
      }
      return {
        ...state,
        savedAddresses: state.savedAddresses,
      };
    default:
      return state;
  }
};
