// frontend/src/store/session.js
import { csrfFetch } from "./csrf";

// setup constants for action types
const GET_A_POKERROOM = "pokerRoom/getAPokerRoom";
const GET_ALL_POKERROOMS = "pokerRoom/getAllPokerRooms";
const ADD_POKERROOM = "pokerRoom/addPokerRoom";
const UPDATE_POKERROOM = "pokerRoom/updatePokerRoom";
const REMOVE_POKERROOM = "pokerRoom/removePokerRoom";

// setup action creator functions
const getAPokerRoom = (pokerRoom) => ({
  type: GET_A_POKERROOM,
  payload: pokerRoom,
});

const getAllPokerRooms = (pokerRooms) => ({
  type: GET_ALL_POKERROOMS,
  payload: pokerRooms,
});

const addPokerRoom = (pokerRoom) => ({
  type: ADD_POKERROOM,
  payload: pokerRoom,
});

const updatePokerRoom = (pokerRoom) => ({
  type: UPDATE_POKERROOM,
  payload: pokerRoom,
});

const removePokerRoom = (pokerRoomId) => ({
  type: REMOVE_POKERROOM,
  payload: pokerRoomId,
});

// setup thunks
export const fetchAPokerRoom = (pokerRoomId) => async (dispatch) => {
  const response = await csrfFetch(`/api/pokerrooms/${pokerRoomId}`);
  const data = await response.json();
  dispatch(getAPokerRoom(data.pokerRoom));
  return response;
};

export const fetchAllPokerRooms = () => async (dispatch) => {
  const response = await csrfFetch("/api/pokerrooms");
  const data = await response.json();
  dispatch(getAllPokerRooms(data.pokerRooms));
  return response;
};

export const createPokerRoom = (pokerRoom) => async (dispatch) => {
  const response = await csrfFetch("/api/pokerrooms", {
    method: "POST",
    body: JSON.stringify(pokerRoom),
  });
  const data = await response.json();
  dispatch(addPokerRoom(data.pokerRoom));
  return response;
};

export const editPokerRoom = (pokerRoom) => async (dispatch) => {
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
  switch (action.type) {
    case GET_A_POKERROOM:
      return { ...state, [action.payload.id]: action.payload };
    case GET_ALL_POKERROOMS:
      const allPokerRooms = {};
      action.payload.forEach((pokerRoom) => {
        allPokerRooms[pokerRoom.id] = pokerRoom;
      });
      return { ...state, ...allPokerRooms };
    case ADD_POKERROOM:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_POKERROOM:
      return { ...state, [action.payload.id]: action.payload };
    case REMOVE_POKERROOM:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

// export reducer
export default pokerRoomReducer;
