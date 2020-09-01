const API_KEY = process.env.REACT_APP_API;
const request = {
  Tv1: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=1`,
  Tv2: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=2`,
  Tv3: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=3`,
  Tv4: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=4`,
  Tv5: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=5`,
  Tv6: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=6`,
  Tv7: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=7`,
  Tv8: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=8`,
  Tv9: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=9`,
  Tv10: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=10`,
  Tv11: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=11`,
  Tv12: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=12`,
  Tv13: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=13`,
  Tv14: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=14`,
  Tv15: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=15`,
  Tv16: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=16`,
};
export default request;