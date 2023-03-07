import {
    FETCH_CARDS,
    ADD_CARD,
    DELETE_CARD,
    UPDATE_CARD,
    MOVE_CARD,
    DELETE_CARDS_BY_BUCKET,
  } from "../actions/types";
  
  const initialState = {
    cards: [],
  };
  
  const cardReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CARDS:
        return {
          ...state,
          cards: action.payload,
        };
      case ADD_CARD:
        return {
          ...state,
          cards: [...state.cards, action.payload],
        };
      case DELETE_CARD:
        return {
          ...state,
          cards: state.cards.filter((card) => card.id !== action.payload),
        };
      case UPDATE_CARD:
        const updatedCards = state.cards.map((card) =>
          card.id === action.payload.id ? action.payload : card
        );
        return {
          ...state,
          cards: updatedCards,
        };
      case MOVE_CARD:
        const { fromBucketId, toBucketId, cardId } = action.payload;
        const updatedCardsList = state.cards.map((card) => {
          if (card.id === cardId) {
            return {
              ...card,
              bucketId: toBucketId,
            };
          }
          return card;
        });
        return {
          ...state,
          cards: updatedCardsList,
        };
      case DELETE_CARDS_BY_BUCKET:
        const bucketId = action.payload;
        return {
          ...state,
          cards: state.cards.filter((card) => card.bucketId !== bucketId),
        };
      default:
        return state;
    }
  };
  
  export default cardReducer;
  