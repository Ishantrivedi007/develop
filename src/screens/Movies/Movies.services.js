// **** External Utilities ****
import axios from "axios";

// export const getMovieList = async (searchQuery, setDat) => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/search/movie?api_key=4e353b14f43997c0c803a36b5de45a72&query=${searchQuery}&language=en-US&total_results=10`
//     );
//     setDat(response?.data);
//     console.log("data", response?.data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     //setLoading(false);
//   }
// };
export const getPopularMoviesList = async (setPopularMoviesData) => {
  try {
    // setLoading(true);

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e353b14f43997c0c803a36b5de45a72&language=en-US&page=1`
    );
    setPopularMoviesData(response?.data?.results);
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
export const getLatestMovies = async (setLatestMovies) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/latest?api_key=4e353b14f43997c0c803a36b5de45a72&language=en-US`,
    });

    //console.log(response?.data);
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

    //console.log(response?.data);
    setTopRatedMovies(response?.data);
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

    //console.log(response?.data);
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

    //console.log(response?.data);
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

    //console.log("L", response);
    setTopRatedTVSeries(response?.data?.results);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
export const createAdditionalCharge = async (
  projectId,
  createObj,
  setLoading,
  setAlert,
  setReloadList
) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASEURL}/projects/${projectId}/payment-request/additional-charge`,
      {
        pr_type_id: parseInt(createObj.prType),
        pr_date: createObj.dateCreated,
        store_associate: createObj.storeAssociate,
        pr_number: createObj.prNumber,
        pr_ims_note: createObj.notes,
        dollar_amount: createObj.dollarAmount,
      }
    );
    response.data && setReloadList(true);
    setAlert("success", "Additional Charge Created successfully.");
  } catch (error) {
    setLoading(false);
    setAlert("error", error?.response?.data?.error, false, true);
  }
};
export const addClient = async (createObj, setLoading, setAlert, history) => {
  try {
    let customerPhones = createObj.customer_phones.reduce(function (
      modifiedCustomerPhones,
      customerPhone
    ) {
      let obj = {};
      obj.phone_number = customerPhone.phone_number;
      obj.phone_type_id = customerPhone.phone_type.phone_type_id;
      modifiedCustomerPhones.push(obj);
      return modifiedCustomerPhones;
    },
    []);
    let customerEmails =
      createObj.customer_emails.length == 1 &&
      createObj.customer_emails[0].email === ""
        ? []
        : createObj.customer_emails;

    const response = await axios.post(
      `${process.env.REACT_APP_API_BASEURL}/customers`,
      {
        first_name: createObj.first_name.trim() || null,
        last_name: createObj.last_name.trim() || null,
        address: [
          {
            address1: createObj.street || null,
            city: createObj.city || null,
            state: createObj.state || null,
            zipcode: createObj.zip || null,
            latitude: createObj.latitude || null,
            longitude: createObj.longitude || null,
          },
        ],
        primary_mode_of_contact: createObj.primary_mode_of_contact || null,
        receive_text_message: createObj.receive_text_message || false,
        customer_related_notes: createObj.customer_related_notes || null,
        customer_phones: customerPhones || [],
        customer_emails: customerEmails || [],
      }
    );

    if (response.status === 200) {
      setAlert("success", "Client has been added successfully.", true, true);
      history.push(`/clients/view/${response?.data[0].customer_id}`);
    }
  } catch (error) {
    setAlert("error", error?.response?.data?.error);
  } finally {
    setLoading(false);
  }
};
export const getClientsResponse = async (
  searchQuery,
  setLoading,
  setClientsListData,
  setCount
) => {
  try {
    setLoading(true);
    const newQueryString = Object.entries(searchQuery)
      .filter(([prop, value]) => Boolean(value) || value === 0)
      .map(([key, value], index) => `${key}=${value}`)
      .join("&");

    const response = await axios.get(
      `${process.env.REACT_APP_API_BASEURL}/customers/report/list?${newQueryString}`
    );
    setClientsListData(response?.data?.items);
    setCount(response?.data?.count);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
