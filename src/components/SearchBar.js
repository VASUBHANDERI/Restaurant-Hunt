import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = ({ term, onChangeTerm, onSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <EvilIcons name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search Food"
        style={styles.inputStyle}
        onChangeText={onChangeTerm}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    borderRadius: 50,
    backgroundColor: "#ffffff",
    marginHorizontal: 15,
    height: 50,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
    borderColor: "#006600",
    borderWidth: 2,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
    color: "#006600",
    fontWeight:'bold',
  },
});

export default SearchBar;
