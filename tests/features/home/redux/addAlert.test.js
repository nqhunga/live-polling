import {
  HOME_ADD_ALERT,
} from '../../../../src/features/home/redux/constants';

import {
  addAlert,
  reducer,
} from '../../../../src/features/home/redux/addAlert';

describe('home/redux/addAlert', () => {
  it('returns correct action by addAlert', () => {
    expect(addAlert()).toHaveProperty('type', HOME_ADD_ALERT);
  });

  it('handles action type HOME_ADD_ALERT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_ADD_ALERT }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
