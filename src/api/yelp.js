import axios from "axios";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization: `Bearer bkH3Q15110hhDmCEmD9pOraSecUxwiQsT9EUxajRZOCDZkn9tcsUxgKzQTzvJd-5pJ1jxnGp9Tp5NqO_f7zHNRcz_32nk8YgUAu74IF8ehT4qDX4Vw4lpkpCLZORY3Yx`,
  },
});
