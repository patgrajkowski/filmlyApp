import axios from 'axios';
export const fetchMovies = async (url) => {
  const response = await axios.get(`https://filmlybackend.herokuapp.com${url}`);
  const { data: moviesInfoObj } = response;
  const moviesInfo = [];
  for (const key in moviesInfoObj) {
    moviesInfo.push(moviesInfoObj[key]);
  }
  return moviesInfo;
};
export const fetchMovie = async (url) => {
  try {
    const response = await axios.get(
      `https://filmlybackend.herokuapp.com${url}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
    return error.response.status;
  }
};
export const fetchRentals = async (url) => {
  const response = await axios.get(`https://filmlybackend.herokuapp.com${url}`);
  const { data } = response;
  const rentals = [];
  for (const key in data) {
    rentals.push(data[key]);
  }
  return rentals;
};
export const fetchRental = async (url) => {
  const response = await axios.get(`https://filmlybackend.herokuapp.com${url}`);
  const { data } = response;
  return data;
};
export const fetchCustomers = async (url) => {
  const response = await axios.get(`https://filmlybackend.herokuapp.com${url}`);
  const { data } = response;
  const customers = [];
  for (const key in data) {
    customers.push(data[key]);
  }
  console.log(customers);
  return customers;
};
export const fetchCustomer = async (url) => {
  const response = await axios.get(`https://filmlybackend.herokuapp.com${url}`);
  const data = response.data;
  return data[0];
};
