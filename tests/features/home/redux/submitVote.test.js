import {
  HOME_SUBMIT_VOTE,
} from '../../../../src/features/home/redux/constants';

import {
  submitVote,
  reducer,
} from '../../../../src/features/home/redux/submitVote';

describe('home/redux/submitVote', () => {
  it('returns correct action by submitVote', () => {
    expect(submitVote()).toHaveProperty('type', HOME_SUBMIT_VOTE);
  });

  it('handles action type HOME_SUBMIT_VOTE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_SUBMIT_VOTE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
