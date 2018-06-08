// https://www.interviewcake.com/question/javascript/inflight-entertainment?course=fc1&section=hashing-and-hash-tables

function canTwoMoviesFillFlight(movieLengths, flightLength) {
  if (movieLengths.length < 2) {
    return false;
  }
  // Create frequency map of movie lengths
  const movieLengthFreqMap = movieLengths.reduce((map, len) => {
    map[len] = (map[len] || 0) + 1;
    return map;
  }, {});

  for (const movieLength of movieLengths) {
    const diff = flightLength - movieLength;

    if (!movieLengthFreqMap.hasOwnProperty(diff)) {
      continue;
    }
    if (diff === movieLength && movieLengthFreqMap[diff] < 2) {
      continue;
    }
    if (diff + movieLength === flightLength) {
      return true;
    }
  }

  return false;
}
