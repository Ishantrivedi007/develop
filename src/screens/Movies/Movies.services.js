// **** External Utilities ****
import axios from "axios";

// Get Stores List
export const getMovieList = async (setMovieData) =>
  //searchQuery,
  //selectedFilters,
  //setLoading,
  //setMovieListData

  {
    try {
      // setLoading(true);
      // let newQueryString;
      // newQueryString = Object.entries(searchQuery)
      //   .filter(([prop, value]) => Boolean(value) || value === 0)
      //   .map(([key, value], index) => `${key}=${value}`)
      //   .join("&");

      // // Logic to add selected filters in query string
      // if (selectedFilters && Object.values(selectedFilters).length) {
      //   let searchQueryWithFilters = Object.entries(selectedFilters)
      //     .filter(([prop, value]) => value?.length)
      //     .map(
      //       ([key, value], index) =>
      //         `${key}=${value.map((val) => val.toString())}`
      //     )
      //     .join("&");

      //   newQueryString = newQueryString + "&" + searchQueryWithFilters;
      // }

      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4e353b14f43997c0c803a36b5de45a72&language=en-US&query=Thor&total_results=10`
      );
      setMovieData(response?.data?.results);
      //console.log("data", response?.data?.results);
    } catch (error) {
      console.log(error);
    }
    //    finally {
    //     //setLoading(false);
    //   }
  };
export const getPopularMovieList = async (setPopularData) =>
  //searchQuery,
  //selectedFilters,
  //setLoading,
  //setMovieListData

  {
    try {
      // setLoading(true);
      // let newQueryString;
      // newQueryString = Object.entries(searchQuery)
      //   .filter(([prop, value]) => Boolean(value) || value === 0)
      //   .map(([key, value], index) => `${key}=${value}`)
      //   .join("&");

      // // Logic to add selected filters in query string
      // if (selectedFilters && Object.values(selectedFilters).length) {
      //   let searchQueryWithFilters = Object.entries(selectedFilters)
      //     .filter(([prop, value]) => value?.length)
      //     .map(
      //       ([key, value], index) =>
      //         `${key}=${value.map((val) => val.toString())}`
      //     )
      //     .join("&");

      //   newQueryString = newQueryString + "&" + searchQueryWithFilters;
      // }

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=4e353b14f43997c0c803a36b5de45a72&language=en-US&page=1`
      );
      setPopularData(response?.data?.results);
      //console.log("data", response?.data?.results);
    } catch (error) {
      console.log(error);
    }
    //    finally {
    //     //setLoading(false);
    //   }
  };

//Movie Data
export const getOmdbDetails = async (setOmdbDetails) => {
  try {
    const response = await axios({
      method: "GET",
      url: `http://www.omdbapi.com/?s=Batman&apikey=1eed5f81`,
    });

    //console.log(response.data.Search);
    setOmdbDetails(response.data.Search);
  } catch (err) {
    console.log(err);
  }
};
