// frontend/src/store/session.js
import { csrfFetch } from "./csrf";

// setup redux store and reducer for pokerroom

// setup constants for action types
const GET_POKERROOM = "pokerRoom/getPokerRoom";
const ADD_POKERROOM = "pokerRoom/addPokerRoom";
const UPDATE_POKERROOM = "pokerRoom/updatePokerRoom";
const REMOVE_POKERROOM = "pokerRoom/removePokerRoom";

// setup action functions with payloads
const getPokerRoom = (pokerRoom) => {
  return {
    type: GET_POKERROOM,
    payload: pokerRoom,
  };
};

const addPokerRoom = (pokerRoom) => {
  return {
    type: ADD_POKERROOM,
    payload: pokerRoom,
  };
};

const updatePokerRoom = (pokerRoom) => {
  return {
    type: UPDATE_POKERROOM,
    payload: pokerRoom,
  };
};

const removePokerRoom = (pokerRoomId) => {
  return {
    type: REMOVE_POKERROOM,
    payload: pokerRoomId,
  };
};

// setup thunk action creators
export const fetchPokerRoom = (pokerRoomId) => async (dispatch) => {
  const response = await csrfFetch(`/api/pokerrooms/${pokerRoomId}`);
  const data = await response.json();
  dispatch(getPokerRoom(data.pokerRoom));
  return response;
};

// need a separate action creator for get all pokerrooms??
// export const fetchPokerRooms = () => async (dispatch) => {
//   const response = await csrfFetch("/api/pokerrooms");
//   const data = await response.json();
//   dispatch(getPokerRooms(data.pokerRooms));
//   return response;
// };

export const createPokerRoom = (pokerRoom) => async (dispatch) => {
  const response = await csrfFetch("/api/pokerrooms", {
    method: "POST",
    body: JSON.stringify(pokerRoom),
  });
  const data = await response.json();
  dispatch(addPokerRoom(data.pokerRoom));
  return response;
};

export const updatePokerRoomThunk = (pokerRoom) => async (dispatch) => {
  const response = await csrfFetch(`/api/pokerrooms/${pokerRoom.id}`, {
    method: "PUT",
    body: JSON.stringify(pokerRoom),
  });
  const data = await response.json();
  dispatch(updatePokerRoom(data.pokerRoom));
  return response;
};

export const deletePokerRoom = (pokerRoomId) => async (dispatch) => {
  const response = await csrfFetch(`/api/pokerrooms/${pokerRoomId}`, {
    method: "DELETE",
  });
  dispatch(removePokerRoom(pokerRoomId));
  return response;
};

// setup reducer
const initialState = {};

const pokerRoomReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_POKERROOM:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case ADD_POKERROOM:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case UPDATE_POKERROOM:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case REMOVE_POKERROOM:
      newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

// export reducer
export default pokerRoomReducer;
