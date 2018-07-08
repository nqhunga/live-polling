import {
  HOME_DELETE_ANSWER,
} from '../../../../src/features/home/redux/constants';

import {
  deleteAnswer,
  reducer,
} from '../../../../src/features/home/redux/deleteAnswer';

describe('home/redux/deleteAnswer', () => {
  it('returns correct action by deleteAnswer', () => {
    expect(deleteAnswer()).toHaveProperty('type', HOME_DELETE_ANSWER);
  });

  it('handles action type HOME_DELETE_ANSWER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_DELETE_ANSWER }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
