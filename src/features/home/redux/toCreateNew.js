// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_TO_CREATE_NEW,
} from './constants';

export function toCreateNew() {
  return {
    type: HOME_TO_CREATE_NEW,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_TO_CREATE_NEW:
      return {
        ...state,
        toCreateNew: true
      };

    default:
      return state;
  }
}
