import {
  HOME_ADD_MORE_ANSWERS,
} from '../../../../src/features/home/redux/constants';

import {
  addMoreAnswers,
  reducer,
} from '../../../../src/features/home/redux/addMoreAnswers';

describe('home/redux/addMoreAnswers', () => {
  it('returns correct action by addMoreAnswers', () => {
    expect(addMoreAnswers()).toHaveProperty('type', HOME_ADD_MORE_ANSWERS);
  });

  it('handles action type HOME_ADD_MORE_ANSWERS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_ADD_MORE_ANSWERS }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
