export const filterMovies = (movies, searchText) => {
  if (!searchText) return movies;
  return movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchText) ||
      movie.genre.toLowerCase().includes(searchText)
    );
  });
};
