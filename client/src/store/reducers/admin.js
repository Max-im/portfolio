import { GET_LEVELS } from '../constants';

const initialState = {
  levels: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LEVELS:
      return { ...state, levels: action.payload };

    default:
      return state;
  }
};
