export const sortArray = (movies, order) => {
  if (!order) return movies;
  return movies.sort(function (a, b) {
    if (order.includes('.')) {
      if (order === 'customer.name')
        return a['customer'].firstName < b['customer'].firstName
          ? -1
          : a['customer'].firstName > b['customer'].firstName
          ? 1
          : 0;
      if (order === 'customer._id')
        return a['customer']._id < b['customer']._id
          ? -1
          : a['customer']._id > b['customer']._id
          ? 1
          : 0;
      if (order === 'movie.title') {
        return a['movie'].title < b['movie'].title
          ? -1
          : a['movie'].title > b['movie'].title
          ? 1
          : 0;
      }
      if (order === 'movie._id') {
        return a['movie']._id > b['movie']._id
          ? -1
          : a['movie']._id < b['movie']._id
          ? 1
          : 0;
      }
    }
    if (order === 'rate' || order === 'length')
      return a[order] > b[order] ? -1 : a[order] < b[order] ? 1 : 0;
    return a[order] < b[order] ? -1 : a[order] > b[order] ? 1 : 0;
  });
};
