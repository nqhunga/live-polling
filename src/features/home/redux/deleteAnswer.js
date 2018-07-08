// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_DELETE_ANSWER,
} from './constants';

export function deleteAnswer(data) {
  return {
    type: HOME_DELETE_ANSWER,
    data: data
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_DELETE_ANSWER:
      return {
        ...state,
        answers: state.answers.filter(answer => answer !== action.data)
      };

    default:
      return state;
  }
}
