export const FETCH_DATA = 'Mentor/FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'Mentor/FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'Mentor/FETCH_DATA_FAIL';

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function fetchDataSuccess(response) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      response,
    },
  };
}

export function fetchDataFail() {
  return {
    type: FETCH_DATA_FAIL,
  };
}
