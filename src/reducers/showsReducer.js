import { PRUEBA } from "../types/showsTypes";

const defaultState = {
  prueba: "pueba...",
};

const showsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PRUEBA:
      return {
        ...state,
        prueba: "funciono...",
      };

    default:
      return state;
  }
};

export default showsReducer;
