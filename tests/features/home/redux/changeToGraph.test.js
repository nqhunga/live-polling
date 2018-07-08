import {
  HOME_CHANGE_TO_GRAPH,
} from '../../../../src/features/home/redux/constants';

import {
  changeToGraph,
  reducer,
} from '../../../../src/features/home/redux/changeToGraph';

describe('home/redux/changeToGraph', () => {
  it('returns correct action by changeToGraph', () => {
    expect(changeToGraph()).toHaveProperty('type', HOME_CHANGE_TO_GRAPH);
  });

  it('handles action type HOME_CHANGE_TO_GRAPH correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CHANGE_TO_GRAPH }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
