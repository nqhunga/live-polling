import {
  HOME_CHANGE_TO_POLL,
} from '../../../../src/features/home/redux/constants';

import {
  changeToPoll,
  reducer,
} from '../../../../src/features/home/redux/changeToPoll';

describe('home/redux/changeToPoll', () => {
  it('returns correct action by changeToPoll', () => {
    expect(changeToPoll()).toHaveProperty('type', HOME_CHANGE_TO_POLL);
  });

  it('handles action type HOME_CHANGE_TO_POLL correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CHANGE_TO_POLL }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
