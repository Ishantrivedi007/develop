import axios from "axios";
// import React from "react";
// One way of using the Genius api

// try {
//   const response = await fetch(
//     `https://api.genius.com/search?q=Kendrick%20Lamar`,
//     {
//       method: "GET",
//       headers: {
//         "User-Agent": "CompuServe Classic/1.22",
//         Accept: "application/json",
//         Host: "api.genius.com",
//         Authorization: "Bearer " + "replace_with_your_token",
//       },
//       mode:{'no-cors':true}
//     }
//   );
//   const data = await response.json();
//   if (data.meta.status == 200) {
//     return data;
//   } else {
//     return `Something went wrong: ${data}`;
//   }
// } catch (error) {
//   console.log(error);
// }
// export const getMusicList = async (setMusicData) =>
//   // searchQuery,
//   // selectedFilters,
//   // setLoading,
//   // setMovieListData

//   {
//     try {
//       // setLoading(true);
//       // let newQueryString;
//       // newQueryString = Object.entries(searchQuery)
//       //   .filter(([prop, value]) => Boolean(value) || value === 0)
//       //   .map(([key, value], index) => `${key}=${value}`)
//       //   .join("&");

//       // Logic to add selected filters in query string
//       // if (selectedFilters && Object.values(selectedFilters).length) {
//       //   let searchQueryWithFilters = Object.entries(selectedFilters)
//       //     .filter(([prop, value]) => value?.length)
//       //     .map(
//       //       ([key, value], index) =>
//       //         `${key}=${value.map((val) => val.toString())}`
//       //     )
//       //     .join("&");

//       //   newQueryString = newQueryString + "&" + searchQueryWithFilters;
//       }
//       const access_token =
//         "Bearer Q4zP-L6VbpAOnIKULBoWIOkL1j556fdRN64TXHAz_YZ01fwpyB0NGfl466FaxRvn";
//       const response = await axios.get(
//         `https://api.genius.com/search?q=blinding%20lights%20the%20weeknd&access_token=Bearer%20fIyEjIm5uFmISW2A2dzynMEb88tGSm45qdIYHNYxZexjyzPYu1-besFF3up4eOIP`,
//        {
//       method: "GET",
//       headers: {
//         "User-Agent": "CompuServe Classic/1.22",
//         Accept: "application/json",
//         Host: "api.genius.com",
//         Authorization: "Bearer " + "replace_with_your_token",
//       },
//       mode:{'no-cors':true}
//     }
//       );
//       setMusicData(response?.data);
//       console.log("data", response?.data);
//     } catch (error) {
//       console.log(error);
//     }
//        finally {
//         setLoading(false);
//       }
//   };

// const access_token =
//   "TIZfkdUak1JPI2K0Mt5AL2PJ_QBfwomiT0SqtDbQ6DR9SaP3MDWtYVFhdCWIqCPz";
// const AuthStr = "Bearer ".concat(access_token);
// axios
//   .get("http://api.genius.com/search?q=Kendrick%20Lamar", {
//     headers: { Authorization: AuthStr },
//   })
//   .then((response) => {
//     If request is good...

//     console.log("!!!!", response.data);
//   })
//   .catch((error) => {
//     console.log("error " + error);
//   });
export const getMusicList = async (setMusicData) => {
  try {
    const access_token =
      "Bearer Q4zP-L6VbpAOnIKULBoWIOkL1j556fdRN64TXHAz_YZ01fwpyB0NGfl466FaxRvn";
    const response = await axios.get(
      `https://api.genius.com/search?q=grenade%20bruno&access_token=Q4zP-L6VbpAOnIKULBoWIOkL1j556fdRN64TXHAz_YZ01fwpyB0NGfl466FaxRvn`,
      {
        // headers: {
        //   Authorization: access_token,
        // },
        // mode: { "no-cors": true },
      }
    );
    if (response?.status === 200) {
      const musicResponse = await axios.get(
        `https://genius.com/Bruno-mars-grenade-lyrics`
      );
      console.log("lyrics", musicResponse?.data);
    }
    // const musicResponse = await axios.get(
    //   `https://genius.com/Bruno-mars-grenade-lyrics`
    // );
    console.log("data", response?.data);
    //console.log("lyrics", musicResponse?.data);
  } catch (error) {
    console.log(error);
  }
  //  finally {
  //   setLoading(false);
  // }
};
