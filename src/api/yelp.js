import axios from "axios";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization:
      `Bearer qS6ruAn-PZ1XKQz3saH3M7s21yGQMc6jBsUNb7gWJ69JiRb6MnAJQDA3xCFmItgK4z0bGQ3KIVyHdk2Qe6ZooEpss26VdxjZ3nNA53-DnQTlbB4KSdB8dAUG8thrY3Yx`,
  },
});