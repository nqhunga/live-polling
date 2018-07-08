// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_SUBMIT_VOTE,
} from './constants';

export function submitVote(data) {
  return {
    type: HOME_SUBMIT_VOTE,
    data: data
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_SUBMIT_VOTE:
      return {
        ...state,
        answers: state.answers.map(answer => {
          return answer.id === action.data ? 
            {...answer, point: answer.point + 1 } : answer
        })
      };

    default:
      return state;
  }
}
