import {
  HOME_ENTER_ROOM_ID,
} from '../../../../src/features/home/redux/constants';

import {
  enterRoomId,
  reducer,
} from '../../../../src/features/home/redux/enterRoomId';

describe('home/redux/enterRoomId', () => {
  it('returns correct action by enterRoomId', () => {
    expect(enterRoomId()).toHaveProperty('type', HOME_ENTER_ROOM_ID);
  });

  it('handles action type HOME_ENTER_ROOM_ID correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_ENTER_ROOM_ID }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
