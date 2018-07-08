import {
  HOME_CHOOSE_VOTE,
} from '../../../../src/features/home/redux/constants';

import {
  chooseVote,
  reducer,
} from '../../../../src/features/home/redux/chooseVote';

describe('home/redux/chooseVote', () => {
  it('returns correct action by chooseVote', () => {
    expect(chooseVote()).toHaveProperty('type', HOME_CHOOSE_VOTE);
  });

  it('handles action type HOME_CHOOSE_VOTE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CHOOSE_VOTE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
