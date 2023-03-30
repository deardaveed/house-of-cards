// frontend/src/components/Test/index.js
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { fetchAPokerRoom, fetchAllPokerRooms, createPokerRoom, editPokerRoom, deletePokerRoom } from '../../store/pokerroom'
import { useSelector, useDispatch } from 'react-redux';

function ComponentTest() {
  const dispatch = useDispatch();

  // const sessionUser = useSelector(state => state.session.user);

  const getAllPokerRooms = () => {
    dispatch(fetchAllPokerRooms);
  }
  const getAPokerRoom = () => {
    dispatch(fetchAPokerRoom(1));
  }
  const createPokerRoom = () => {
    dispatch(createPokerRoom);
  }
  const updatePokerRoom = () => {
    dispatch(editPokerRoom);
  }
  const deletePokerRoom = () => {
    dispatch(deletePokerRoom);
  }

  return (
    <div>
      <button onClick={getAllPokerRooms}>Get All Pokerrooms</button>
      <button onClick={getAPokerRoom}>Get A Pokerroom</button>
      <button onClick={createPokerRoom}>Create Pokerroom</button>
      <button onClick={updatePokerRoom}>Update Pokerroom</button>
      <button onClick={deletePokerRoom}>Delete Pokerroom</button>
    </div>
);
}

export default ComponentTest;
