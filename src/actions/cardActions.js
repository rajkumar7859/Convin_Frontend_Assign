import axios from 'axios';
import {
  GET_CARDS,
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD,
  CARDS_LOADING,
  SET_CURRENT_CARD,
  CLEAR_CURRENT_CARD,
} from './types';

// Get cards
export const getCards = () => (dispatch) => {
  dispatch(setCardsLoading());
  axios.get('http://localhost:3001/cards').then((res) =>
    dispatch({
      type: GET_CARDS,
      payload: res.data,
    })
  );
};

// Add card
export const addCard = (card) => (dispatch) => {
  axios.post('http://localhost:3001/cards', card).then((res) =>
    dispatch({
      type: ADD_CARD,
      payload: res.data,
    })
  );
};

// Update card
export const updateCard = (card) => (dispatch) => {
  axios.put(`http://localhost:3001/cards/${card.id}`, card).then((res) =>
    dispatch({
      type: UPDATE_CARD,
      payload: res.data,
    })
  );
};

// Delete card
export const deleteCard = (id) => (dispatch) => {
  axios.delete(`http://localhost:3001/cards/${id}`).then((res) =>
    dispatch({
      type: DELETE_CARD,
      payload: id,
    })
  );
};

// Move card
export const moveCard = (card, bucketId) => (dispatch) => {
  const updatedCard = { ...card, bucketId };
  axios.put(`http://localhost:3001/cards/${card.id}`, updatedCard).then((res) =>
    dispatch({
      type: MOVE_CARD,
      payload: res.data,
    })
  );
};

// Set loading state
export const setCardsLoading = () => {
  return {
    type: CARDS_LOADING,
  };
};

// Set current card
export const setCurrentCard = (card) => {
  return {
    type: SET_CURRENT_CARD,
    payload: card,
  };
};

// Clear current card
export const clearCurrentCard = () => {
  return {
    type: CLEAR_CURRENT_CARD,
  };
};
