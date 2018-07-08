import {
  HOME_ADD_NEW_QUESTION,
} from '../../../../src/features/home/redux/constants';

import {
  addNewQuestion,
  reducer,
} from '../../../../src/features/home/redux/addNewQuestion';

describe('home/redux/addNewQuestion', () => {
  it('returns correct action by addNewQuestion', () => {
    expect(addNewQuestion()).toHaveProperty('type', HOME_ADD_NEW_QUESTION);
  });

  it('handles action type HOME_ADD_NEW_QUESTION correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_ADD_NEW_QUESTION }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
