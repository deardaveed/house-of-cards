// frontend/src/store/pokerroom.js
import { csrfFetch } from "./csrf";

// setup constants for action types
const GET_ALL_POKERROOMS = "pokerRoom/getAllPokerRooms";
const GET_A_POKERROOM = "pokerRoom/getAPokerRoom";
const ADD_POKERROOM = "pokerRoom/addPokerRoom";
const UPDATE_POKERROOM = "pokerRoom/updatePokerRoom";
const REMOVE_POKERROOM = "pokerRoom/removePokerRoom";

// setup action creator functions
const getAllPokerRooms = (pokerRooms) => ({
  type: GET_ALL_POKERROOMS,
  payload: pokerRooms,
});

const getAPokerRoom = (pokerRoom) => ({
  type: GET_A_POKERROOM,
  payload: pokerRoom,
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
export const fetchAllPokerRooms = () => async (dispatch) => {
  const response = await csrfFetch("/api/pokerrooms");
  const data = await response.json();
  dispatch(getAllPokerRooms(data));
  return response;
};

export const fetchAPokerRoom = (pokerRoomId) => async (dispatch) => {
  const response = await csrfFetch(`/api/pokerrooms/${pokerRoomId}`);
  const data = await response.json();
  dispatch(getAPokerRoom(data));
  return response;
};

export const createPokerRoom = (pokerRoom) => async (dispatch) => {
  const response = await csrfFetch("/api/pokerrooms", {
    method: "POST",
    body: JSON.stringify(pokerRoom),
  });
  const data = await response.json();
  console.log("********DATA CONSOLE FROM THUNK********", data, "********")
  dispatch(addPokerRoom(data));
  return response;
};

export const editPokerRoom = (pokerRoom) => async (dispatch) => {
  const response = await csrfFetch(`/api/pokerrooms/${pokerRoom.id}`, {
    method: "PUT",
    body: JSON.stringify(pokerRoom),
  });
  const data = await response.json();
  dispatch(updatePokerRoom(data));
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
// gets copy of old state
const initialState = {};

const pokerRoomReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_POKERROOMS:
      newState = { ...state };

      // console.log("***newState before ****", state);
      action.payload.forEach((pokerRoom) => {

        newState[pokerRoom.id] = pokerRoom;
      });
      // console.log("****newState after forEach******", newState)
      return newState;
    case GET_A_POKERROOM:
      console.log("*****ACTION*****", action)
      return { ...state, [action.payload.id]: action.payload };
    case ADD_POKERROOM:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_POKERROOM:
      return { ...state, [action.payload.id]: action.payload };
    case REMOVE_POKERROOM:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

// export reducer
export default pokerRoomReducer;
