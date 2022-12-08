import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResult(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong!");
      console.log(err)
    }
  };

  useEffect(() => {
    searchApi("indian");
  }, []);

  return [searchApi, result, errorMessage];
};
