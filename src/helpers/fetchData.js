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
