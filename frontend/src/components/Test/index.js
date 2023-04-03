// frontend/src/components/Test/index.js
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { fetchAPokerRoom, fetchAllPokerRooms, createPokerRoom, editPokerRoom, deletePokerRoom } from '../../store/pokerroom'
import { useSelector, useDispatch } from 'react-redux';

let testData = {
  id: 6,
  userId: 2,
  name: 'CREATE Bicycle Hotel & Casino',
  address: '888 Bicycle Casino Drive',
  city: 'Bell Gardens',
  state: 'CA',
  zip: '90201',
  phone: '(562) 806-4646',
  website: 'https://www.thebike.com/',
  image: 'https://www.thebike.com/assets/img/homepage/the-bike-casino.png',
  description: 'Bicycle Hotel & Casino is located in Bell Gardens, California. The casino is open 24 hours a day, 7 days a week. The casino\'s 100,000 square foot gaming space features 185 gaming machines and 135 table and poker games. The property has six restaurants, a spa, and a hotel with 99 rooms.',
};

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

  return (
    <div>
      <div>
        <button onClick={getAllPokerRooms}>Get All Pokerrooms</button>
        <button onClick={getAPokerRoom}>Get A Pokerroom</button>
        <button onClick={addPokerRoom}>Create Pokerroom</button>
        <button onClick={updatePokerRoom}>Update Pokerroom</button>
        <button onClick={removePokerRoom}>Delete Pokerroom</button>
      </div>
    </div>

);
}

export default ComponentTest;
