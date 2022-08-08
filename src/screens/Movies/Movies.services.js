// **** External Utilities ****
import axios from "axios";

export const getPopularMoviesList = async (setPopularMoviesData) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e353b14f43997c0c803a36b5de45a72&language=en-US&page=1`
    );
    setPopularMoviesData(response?.data?.results);
  } catch (error) {
    console.log(error);
  }
};

//Movie Data
export const getOmdbDetails = async (setOmdbDetails) => {
  try {
    const response = await axios({
      method: "GET",
      url: `http://www.omdbapi.com/?s=Batman&apikey=1eed5f81`,
    });

    setOmdbDetails(response.data.Search);
  } catch (err) {
    console.log(err);
  }
};
export const getLatestMovies = async (setLatestMovies) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/latest?api_key=4e353b14f43997c0c803a36b5de45a72&language=en-US`,
    });

    setLatestMovies(response?.data);
  } catch (err) {
    console.log(err);
  }
};

export const getTopRatedMovies = async (setTopRatedMovies) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=4e353b14f43997c0c803a36b5de45a72&language=en-US&page=1`,
    });

    setTopRatedMovies(response?.data?.results);
  } catch (err) {
    console.log(err);
  }
};
export const getNowPlayingMovies = async (
  setNowPlayingMoviesData,
  setLoading
) => {
  try {
    setLoading(true);
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=4e353b14f43997c0c803a36b5de45a72&language=en-US&page=1`,
    });
    setNowPlayingMoviesData(response?.data?.results);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
export const getUpcomingMovies = async (setUpcomingMovies) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=4e353b14f43997c0c803a36b5de45a72&language=en-US&page=1`,
    });
    setUpcomingMovies(response?.data);
  } catch (err) {
    console.log(err);
  }
};

export const getTopRatedTVSeries = async (setTopRatedTVSeries, setLoading) => {
  try {
    setLoading(true);
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/top_rated?api_key=4e353b14f43997c0c803a36b5de45a72&language=en-US`,
    });
    setTopRatedTVSeries(response?.data?.results);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
