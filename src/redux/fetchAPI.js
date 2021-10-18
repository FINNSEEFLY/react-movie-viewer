const fetchMovies = async (searchKeyWord, page = 1) => {
  const apiKey = '32cdb181';
  const dataLinkAPI = 'https://omdbapi.com/';

  const response = await fetch(`${dataLinkAPI}?apikey=${apiKey}&page=${page}&s=${searchKeyWord}`);
  const json = await response.json();

  if (json.Response === 'False') {
    return { Response: json.Response, Error: json.Error };
  }

  const resultArray = json.Search.map((item) => ({
    Poster: item.Poster,
    Title: item.Title,
    imdbID: item.imdbID,
  }));
  let shortPlotsJson = null;
  let longPlotsJson = null;
  await Promise.all(
    resultArray.map((item) => fetch(`${dataLinkAPI}?apikey=${apiKey}&i=${item.imdbID}&plot=short`))
  ).then((results) =>
    Promise.all(results.map((r) => r.json())).then((jsonRes) => {
      shortPlotsJson = jsonRes;
    })
  );
  await Promise.all(
    resultArray.map((item) => fetch(`${dataLinkAPI}?apikey=${apiKey}&i=${item.imdbID}&plot=full`))
  ).then((results) =>
    Promise.all(results.map((r) => r.json())).then((jsonRes) => {
      longPlotsJson = jsonRes;
    })
  );

  for (let i = 0; i < resultArray.length; i += 1) {
    resultArray[i].Plot = shortPlotsJson[i].Plot;
    resultArray[i].FullPlot = longPlotsJson[i].Plot;
  }

  return { Response: 'True', movies: resultArray };
};

export default fetchMovies;
