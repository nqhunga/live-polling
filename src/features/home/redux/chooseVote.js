// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_CHOOSE_VOTE,
} from './constants';

export function chooseVote(data) {
  return {
    type: HOME_CHOOSE_VOTE,
    data: data
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_CHOOSE_VOTE:
      return {
        ...state,
        voteTo: action.data
      };

    default:
      return state;
  }
}
