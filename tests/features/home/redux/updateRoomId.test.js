import {
  HOME_UPDATE_ROOM_ID,
} from '../../../../src/features/home/redux/constants';

import {
  updateRoomId,
  reducer,
} from '../../../../src/features/home/redux/updateRoomId';

describe('home/redux/updateRoomId', () => {
  it('returns correct action by updateRoomId', () => {
    expect(updateRoomId()).toHaveProperty('type', HOME_UPDATE_ROOM_ID);
  });

  it('handles action type HOME_UPDATE_ROOM_ID correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_UPDATE_ROOM_ID }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
