import {
  GET_DATA_STARTED,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_SHOW_SUCCESS,
  ORDER_LIST,
} from "../types/showsTypes";

const defaultState = {
  loading: false,
  error: null,
  data: {},
  show: {},
  order: "recent",
};

const showsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case GET_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        show: action.payload,
      };
    case ORDER_LIST:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
};

export default showsReducer;
