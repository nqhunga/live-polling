import {
  HOME_REMOVE_ALERT,
} from '../../../../src/features/home/redux/constants';

import {
  removeAlert,
  reducer,
} from '../../../../src/features/home/redux/removeAlert';

describe('home/redux/removeAlert', () => {
  it('returns correct action by removeAlert', () => {
    expect(removeAlert()).toHaveProperty('type', HOME_REMOVE_ALERT);
  });

  it('handles action type HOME_REMOVE_ALERT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_REMOVE_ALERT }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
