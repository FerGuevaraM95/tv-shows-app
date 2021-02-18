import {
  GET_DATA_STARTED,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_SHOW_SUCCESS
} from "../types/showsTypes";

const getDataStarted = () => ({
  type: GET_DATA_STARTED,
});

const getDataSuccess = (todo) => ({
  type: GET_DATA_SUCCESS,
  payload: {
    ...todo,
  },
});

const getDataFailure = (error) => ({
  type: GET_DATA_FAILURE,
  payload: {
    error,
  },
});

const getShowSuccess = (todo) => ({
  type: GET_SHOW_SUCCESS,
  payload: {
    ...todo,
  },
});

export const getData = (url) => {
  return (dispatch) => {
    dispatch(getDataStarted());

    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(getDataSuccess(data));
      })
      .catch((err) => {
        dispatch(getDataFailure(err));
      });
  };
};

export const getDataById = (url) => {
  return (dispatch) => {
    dispatch(getDataStarted());

    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(getShowSuccess(data));
      })
      .catch((err) => {
        dispatch(getDataFailure(err));
      });
  };
};
