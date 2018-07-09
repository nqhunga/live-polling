import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  HOME_GET_ROOM_ID_BEGIN,
  HOME_GET_ROOM_ID_SUCCESS,
  HOME_GET_ROOM_ID_FAILURE,
  HOME_GET_ROOM_ID_DISMISS_ERROR,
} from '../../../../src/features/home/redux/constants';

import {
  getRoomId,
  dismissGetRoomIdError,
  reducer,
} from '../../../../src/features/home/redux/getRoomId';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/getRoomId', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getRoomId succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getRoomId())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_ROOM_ID_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_ROOM_ID_SUCCESS);
      });
  });

  it('dispatches failure action when getRoomId fails', () => {
    const store = mockStore({});

    return store.dispatch(getRoomId({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_ROOM_ID_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_ROOM_ID_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissGetRoomIdError', () => {
    const expectedAction = {
      type: HOME_GET_ROOM_ID_DISMISS_ERROR,
    };
    expect(dismissGetRoomIdError()).toEqual(expectedAction);
  });

  it('handles action type HOME_GET_ROOM_ID_BEGIN correctly', () => {
    const prevState = { getRoomIdPending: false };
    const state = reducer(
      prevState,
      { type: HOME_GET_ROOM_ID_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getRoomIdPending).toBe(true);
  });

  it('handles action type HOME_GET_ROOM_ID_SUCCESS correctly', () => {
    const prevState = { getRoomIdPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_ROOM_ID_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getRoomIdPending).toBe(false);
  });

  it('handles action type HOME_GET_ROOM_ID_FAILURE correctly', () => {
    const prevState = { getRoomIdPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_ROOM_ID_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getRoomIdPending).toBe(false);
    expect(state.getRoomIdError).toEqual(expect.anything());
  });

  it('handles action type HOME_GET_ROOM_ID_DISMISS_ERROR correctly', () => {
    const prevState = { getRoomIdError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_GET_ROOM_ID_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getRoomIdError).toBe(null);
  });
});

