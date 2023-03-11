import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";
import { useFonts } from "expo-font";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../components/Metrics";
import { sub } from "react-native-reanimated";

Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
};

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [searchApi, result, errorMessage, firstTime] = useResult();
  const filterResultByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    });
  };
  const [loaded] = useFonts({
    Popins: require("../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => {
          setTerm(newTerm);
          setSubmitted(false);
        }}
        onSubmit={() => {
          if (!submitted) {
            searchApi(term);
            setTerm("");
            setSubmitted(true);
          }
        }}
      />
      {errorMessage ? (
        <Text
          style={{
            alignSelf: "center",
            flex: 1,
            justifyContent: "center",
            color: "gray",
            fontSize: moderateScale(14),
            marginTop: verticalScale(20),
            fontFamily: "Popins",
          }}
        >
          {errorMessage}
        </Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {result.length === 0 && !firstTime ? (
            <Text
              style={{
                alignSelf: "center",
                flex: 1,
                justifyContent: "center",
                color: "gray",
                fontSize: moderateScale(14),
                marginTop: verticalScale(20),
                fontFamily: "Popins",
              }}
            >
              No Match Found!
            </Text>
          ) : (
            <>
              <ResultsList
                result={filterResultByPrice("$")}
                title="Cost Effective"
              />

              <ResultsList
                result={filterResultByPrice("$$")}
                title="Bit Pricer"
              />
              <ResultsList
                result={filterResultByPrice("$$$")}
                title="Big Spender"
              />
            </>
          )}
        </ScrollView>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
