import { ADD_TO_HISTORY } from '../types';

const initialState = {
  history: []
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [
          ...state.history,
          {
            id: action.payload.id,
            cardName: action.payload.cardName,
            link: action.payload.link,
            playedAt: new Date().toLocaleString()
          }
        ]
      };
    default:
      return state;
  }
};

export default historyReducer;
