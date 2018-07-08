// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_ADD_MORE_ANSWERS,
} from './constants';

export function addMoreAnswers(id) {
  return {
    type: HOME_ADD_MORE_ANSWERS,
    id: id
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_ADD_MORE_ANSWERS:
      return {
        ...state,
        answers: [
          ...state.answers,
          {
            id: action.id,
            text: '',
            point: 0
          }
        ]
      };

    default:
      return state;
  }
}
