import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchRentals } from '../../helpers/fetchData';
import Card from '../UI/Card/Card';

const MyRentals = () => {
  const id = useSelector((state) => state.auth.id);
  const [rentalsState, setRentalsState] = useState('');
  const getRentals = async () => {
    const rentals = await fetchRentals(`/api/rentals/customer/${id}`);
    setRentalsState(rentals);
  };
  useEffect(() => {
    getRentals();
  }, []);
  console.log(rentalsState);
  return <Card> RENTALS </Card>;
};

export default MyRentals;
