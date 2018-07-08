// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_CHANGE_TO_GRAPH,
} from './constants';

export function changeToGraph() {
  return {
    type: HOME_CHANGE_TO_GRAPH,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_CHANGE_TO_GRAPH:
      return {
        ...state,
        toGraph: true
      };

    default:
      return state;
  }
}
