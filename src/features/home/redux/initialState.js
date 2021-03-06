const initialState = {
  question: {
    text: '',
  },
  answers: [],
  questionVote: '',
  answersVote: [],
  voteTo: null,
  showAlert: false,
  roomId: null,
  joinRoom: null,
  isEnableVote: false,
  toVoteRoom: false,
  toCreateNew: false,
  joinVotePending: false,
  joinVoteError: null,
  getRoomIdPending: false,
  getRoomIdError: null,
};

export default initialState;
