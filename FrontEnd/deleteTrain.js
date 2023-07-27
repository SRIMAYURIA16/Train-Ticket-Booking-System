import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import AdminHome from './adminHome';
import ManageTrain from './ManageTrain';

function DeleteTrain() {
  const navigate = useNavigate();
  const location = useLocation();
  const key = location.state.id;

  useEffect(() => {
    axios
      .delete(`http://localhost:8181/train/${key}`)
      .then(() => {
        console.log('Train deleted successfully');
        navigate('/adminhome');
      })
      .catch((error) => {
        console.error('Error deleting train:', error);
        // Handle the error gracefully here, e.g., show an error message to the user
      });
  }, []);

  console.log(key);

  return <></>;
}

export default DeleteTrain;