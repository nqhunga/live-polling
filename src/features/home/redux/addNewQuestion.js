// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_ADD_NEW_QUESTION,
} from './constants';

export function addNewQuestion(data) {
  return {
    type: HOME_ADD_NEW_QUESTION,
    data
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_ADD_NEW_QUESTION:
      return {
        ...state,
        question: action.data
      };

    default:
      return state;
  }
}
