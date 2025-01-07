const movieSlice = (movies, number = 10) => {
  if (!number || isNaN(number)) return 0;
  return movies.slice(0, number);
};

export default movieSlice;
