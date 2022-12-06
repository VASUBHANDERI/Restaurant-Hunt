import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StretchInX } from "react-native-reanimated";

const SearchBar = ({ term, onChangeTerm, onSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        onChangeText={onChangeTerm}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 15,
    height: 50,
    flexDirection: "row",
    marginVertical: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
