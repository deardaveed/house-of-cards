// frontend/src/components/Test/index.js
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { fetchAPokerRoom, fetchAllPokerRooms, createPokerRoom, editPokerRoom, deletePokerRoom } from '../../store/pokerroom'
import { fetchAReview, fetchAllReviews, createReview, editReview, deleteReview } from '../../store/review'
import { useDispatch } from 'react-redux';

let testData = {
  id: 5,
  userId: 2,
  name: 'update Bicycle Hotel & Casino',
  address: '888 Bicycle Casino Drive',
  city: 'Bell Gardens',
  state: 'CA',
  zip: '90201',
  phone: '(562) 806-4646',
  website: 'https://www.thebike.com/',
  image: 'https://www.thebike.com/assets/img/homepage/the-bike-casino.png',
  description: 'Bicycle Hotel & Casino is located in Bell Gardens, California. The casino is open 24 hours a day, 7 days a week. The casino\'s 100,000 square foot gaming space features 185 gaming machines and 135 table and poker games. The property has six restaurants, a spa, and a hotel with 99 rooms.',
};

let testReviewData ={
    "userId": 3,
    "content": "Bee boop boo"
}

function ComponentTest() {
  const dispatch = useDispatch();

  const getAllPokerRooms = () => {
    dispatch(fetchAllPokerRooms());
  }

  const getAPokerRoom = () => {
    dispatch(fetchAPokerRoom(3));
  }

  const addPokerRoom = () => {
    dispatch(createPokerRoom(testData));
  }

  const updatePokerRoom = () => {
    dispatch(editPokerRoom(testData));
  }

  const removePokerRoom = () => {
    dispatch(deletePokerRoom());
  }

  const getAllReviews = () => {
    dispatch(fetchAllReviews());
  }

  const getAReview = () => {
    dispatch(fetchAReview(2));
  }

  const addReview = () => {
    dispatch(createReview(testReviewData));
  }

  const updateReview = () => {
    dispatch(editReview(testReviewData));
  }

  const removeReview = () => {
    dispatch(deleteReview());
  }

  return (
    <div>
      <div>
        <p>
          <button onClick={getAllPokerRooms}>Get All Pokerrooms</button>
          <button onClick={getAPokerRoom}>Get A Pokerroom</button>
          <button onClick={addPokerRoom}>Create Pokerroom</button>
          <button onClick={updatePokerRoom}>Update Pokerroom</button>
          <button onClick={removePokerRoom}>Delete Pokerroom</button>
        </p>
        <p>
          <button onClick={getAllReviews}>Get All Reviews</button>
          <button onClick={getAReview}>Get A Review</button>
          <button onClick={addReview}>Create Review</button>
          <button onClick={updateReview}>Update Review</button>
          <button onClick={removeReview}>Delete Review</button>
        </p>
      </div>
    </div>

  );
}

export default ComponentTest;
