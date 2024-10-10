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
      localStorage.setItem("address", JSON.stringify([state.savedAddresses, action.payload]));
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
      if ( typeof action.payload === "number") {
        const newArray = [...state.savedAddresses];
        newArray.splice(action.payload, 1);
        console.log(newArray);
        localStorage.setItem("address", JSON.stringify(newArray));
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
