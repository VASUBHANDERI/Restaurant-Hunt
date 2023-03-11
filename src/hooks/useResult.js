import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [firstTime, setFirstTime] = useState(true);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "newyork",
        },
      });
      setResult(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong!");
      console.log(err);
    }
  };

  useEffect(async () => {
    await searchApi("Gujarati");
    setFirstTime(false);
  }, []);

  return [searchApi, result, errorMessage, firstTime];
};
