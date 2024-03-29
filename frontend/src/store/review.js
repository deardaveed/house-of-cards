// frontend/src/store/review.js
import { csrfFetch } from './csrf';

// setup constants for action types
const GET_ALL_REVIEWS = "review/getAllReviews";
const GET_A_REVIEW = "review/getAReview";
const ADD_REVIEW = "review/addReview";
const UPDATE_REVIEW = "review/updateReview";
const REMOVE_REVIEW = "review/removeReview";

// setup action creator functions
const getAllReviews = (reviews) => ({
  type: GET_ALL_REVIEWS,
  payload: reviews,
});

const getAReview = (review) => ({
  type: GET_A_REVIEW,
  payload: review,
});

const addReview = (review) => ({
  type: ADD_REVIEW,
  payload: review,
});

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  payload: review,
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  payload: reviewId,
});

// setup thunks
export const fetchAllReviews = () => async (dispatch) => {
  const response = await csrfFetch("/api/reviews");
  const data = await response.json();
  dispatch(getAllReviews(data));
  return response;
}

export const fetchAReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`);
  const data = await response.json();
  dispatch(getAReview(data));
  return response;
}

export const createReview = (review) => async (dispatch) => {
  const response = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify(review),
  });
  const data = await response.json();
  dispatch(addReview(data));
  return response;
}

export const editReview = (review) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "PUT",
    body: JSON.stringify(review),
  });
  const data = await response.json();
  dispatch(updateReview(data));
  return response;
}

export const deleteReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });
  dispatch(removeReview(reviewId));
  return response;
}

// setup reducer
const initialState = {};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      const allReviews = {};
      action.payload.forEach((review) => {
        allReviews[review.id] = review;
      });
      return { ...state, ...allReviews };
    case GET_A_REVIEW:
      return { ...state, [action.payload.id]: action.payload };
    console.log("***newState before ****", state);
    case ADD_REVIEW:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_REVIEW:
      return { ...state, [action.payload.id]: action.payload };
    case REMOVE_REVIEW:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

// export reducer
export default reviewReducer;
