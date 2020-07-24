import { SCROLL_PAGE, RESIZE_PAGE } from '../constants';

const initialState = {
  scroll: 0,
  device: 'phone',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SCROLL_PAGE:
      return { ...state, scroll: action.payload };

    case RESIZE_PAGE:
      let device = 'phone';
      if (action.payload > 560 && action.payload < 980) device = 'tablet';
      else if (action.payload >= 980) device = 'desctop';

      return { ...state, device };

    default:
      return state;
  }
};
