export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
  }
};
