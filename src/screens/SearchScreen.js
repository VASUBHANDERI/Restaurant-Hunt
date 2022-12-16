import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, result, errorMessage] = useResult();
  const filterResultByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => setTerm(newTerm)}
        onSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text
          style={{
            alignSelf: "center",
            flex: 1,
            justifyContent: "center",
            color: "gray",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          {errorMessage}
        </Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ResultsList
            result={filterResultByPrice("$")}
            title="Cost Effective"
          />

          <ResultsList result={filterResultByPrice("$$")} title="Bit Pricer" />
          <ResultsList
            result={filterResultByPrice("$$$")}
            title="Big Spender"
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
