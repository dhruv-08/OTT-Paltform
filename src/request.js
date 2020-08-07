const API_KEY = "7e0f5e57c7fdc5e30af84956f6d5a5c8";
const request = {
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  NetflixOrg: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  Action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Sci_fi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  Comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Mystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  Thriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  Crime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  Horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  Animated: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  Drama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  Family: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  Fantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  History: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  War: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  Adventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
};
export default request;
