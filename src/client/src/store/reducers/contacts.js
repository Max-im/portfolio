import { SET_CONTACTS, LOAD_CONTACTS } from "../actions/constants";

const initialState = {
  loading: false,
  contacts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.payload };

    case LOAD_CONTACTS:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
