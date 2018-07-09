import initialState from './initialState';
import { reducer as addNewQuestionReducer } from './addNewQuestion';
import { reducer as addNewAnswerReducer } from './addNewAnswer';
import { reducer as chooseVoteReducer } from './chooseVote';
import { reducer as submitVoteReducer } from './submitVote';
import { reducer as addAlertReducer } from './addAlert';
import { reducer as removeAlertReducer } from './removeAlert';
import { reducer as addMoreAnswersReducer } from './addMoreAnswers';
import { reducer as deleteAnswerReducer } from './deleteAnswer';
import { reducer as getRoomIdReducer } from './getRoomId';
import { reducer as joinVoteReducer } from './joinVote';
import { reducer as toCreateNewReducer } from './toCreateNew';
import { reducer as enterRoomIdReducer } from './enterRoomId';
import { reducer as changeToPollReducer } from './changeToPoll';
import { reducer as updateRoomIdReducer } from './updateRoomId';

const reducers = [
  addNewQuestionReducer,
  addNewAnswerReducer,
  chooseVoteReducer,
  submitVoteReducer,
  addAlertReducer,
  removeAlertReducer,
  addMoreAnswersReducer,
  deleteAnswerReducer,
  getRoomIdReducer,
  joinVoteReducer,
  toCreateNewReducer,
  enterRoomIdReducer,
  changeToPollReducer,
  updateRoomIdReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
