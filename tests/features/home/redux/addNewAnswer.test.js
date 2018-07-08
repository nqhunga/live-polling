import {
  HOME_ADD_NEW_ANSWER,
} from '../../../../src/features/home/redux/constants';

import {
  addNewAnswer,
  reducer,
} from '../../../../src/features/home/redux/addNewAnswer';

describe('home/redux/addNewAnswer', () => {
  it('returns correct action by addNewAnswer', () => {
    expect(addNewAnswer()).toHaveProperty('type', HOME_ADD_NEW_ANSWER);
  });

  it('handles action type HOME_ADD_NEW_ANSWER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_ADD_NEW_ANSWER }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
