import { SCROLL_PAGE, RESIZE_PAGE } from '../constants';

export const scrollPage = (scroll) => ({ type: SCROLL_PAGE, payload: scroll });

export const changeSize = (width) => ({ type: RESIZE_PAGE, payload: width });
