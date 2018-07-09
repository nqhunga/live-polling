import {
  HOME_TO_CREATE_NEW,
} from '../../../../src/features/home/redux/constants';

import {
  toCreateNew,
  reducer,
} from '../../../../src/features/home/redux/toCreateNew';

describe('home/redux/toCreateNew', () => {
  it('returns correct action by toCreateNew', () => {
    expect(toCreateNew()).toHaveProperty('type', HOME_TO_CREATE_NEW);
  });

  it('handles action type HOME_TO_CREATE_NEW correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_TO_CREATE_NEW }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
