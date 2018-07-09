// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_UPDATE_ROOM_ID,
} from './constants';

export function updateRoomId(id) {
  return {
    type: HOME_UPDATE_ROOM_ID,
    id: id
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_UPDATE_ROOM_ID:
      return {
        ...state,
        roomId: action.id
      };

    default:
      return state;
  }
}
