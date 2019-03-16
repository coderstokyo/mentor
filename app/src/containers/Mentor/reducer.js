import { FETCH_DATA_SUCCESS } from './actions';

const initialState = {
  news: [],
  fetching: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      const { response } = action.payload;
      return {
        ...state,
        news: response,
        fetching: false,
      };
    }
    default: {
      return state;
    }
  }
}
