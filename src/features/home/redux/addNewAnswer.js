// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_ADD_NEW_ANSWER,
} from './constants';

export function addNewAnswer(data, thisId) {
  return {
    type: HOME_ADD_NEW_ANSWER,
    data: data,
    id: thisId
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_ADD_NEW_ANSWER:
      return {
        ...state,
        answers: state.answers.map(a => {
           return a.id === action.id ? {...a, answer: action.data.text}
          : a
        })
      };

    default:
      return state;
  }
}
