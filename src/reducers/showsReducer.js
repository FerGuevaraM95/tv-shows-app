import {
  GET_DATA_STARTED,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from "../types/showsTypes";

const defaultState = {
  loading: false,
  error: null,
  data: {},
};

const showsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default showsReducer;
