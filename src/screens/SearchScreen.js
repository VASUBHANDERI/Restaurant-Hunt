import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi,result,errorMessage] = useResult();
  console.log(result);

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => setTerm(newTerm)}
        onSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {result.length} results.</Text>
      <ResultsList title="Cost Effective"/>
      <ResultsList title="Bit Pricer"/>
      <ResultsList title="Big Spender"/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
