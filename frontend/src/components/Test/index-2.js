// frontend/src/components/Test/index-2.js
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { fetchAReview, fetchAllReviews, createReview, editReview, deleteReview } from '../../store/review'
import { useSelector, useDispatch } from 'react-redux';

function ComponentTestReviews() {
  const dispatch = useDispatch();

  // const sessionUser = useSelector(state => state.session.user);

  const getAllReviews = () => {
    dispatch(fetchAllReviews);
  }
  const getAReview = () => {
    dispatch(fetchAReview(1));
  }
  const createReview= () => {
    dispatch(createReview);
  }
  const updateReview = () => {
    dispatch(editReview);
  }
  const deleteReview = () => {
    dispatch(deleteReview);
  }

  return (
    <div>
      <button onClick={getAllReviews}>Get All Reviews</button>
      <button onClick={getAReview}>Get A Review</button>
      <button onClick={createReview}>Create Review</button>
      <button onClick={updateReview}>Update Review</button>
      <button onClick={deleteReview}>Delete Review</button>
    </div>
);
}

export default ComponentTestReviews;
