import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { horizontalScale, moderateScale, verticalScale } from "./Metrics";

Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
};

TextInput.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
};

const SearchBar = ({ term, onChangeTerm, onSubmit }) => {
  const [loaded] = useFonts({
    Popins: require("../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.backgroundStyle}>
      <TouchableOpacity style={styles.iconStyle} onPress={onSubmit}>
        <EvilIcons name="search" style={styles.iconStyle} />
      </TouchableOpacity>

      <TextInput
        underlineColorAndroid="transparent"
        autoFocus={false}
        mode="outlined"
        selectionColor="#37923750"
        placeholder="Search Food"
        style={styles.inputStyle}
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    borderRadius: moderateScale(50),
    backgroundColor: "white",
    marginHorizontal: horizontalScale(15),
    height: verticalScale(45),
    flexDirection: "row-reverse",
    marginTop: verticalScale(10),
    marginBottom: verticalScale(15),
    borderColor: "#759E37",
    borderWidth: moderateScale(2),
    alignContent: "center",
  },
  inputStyle: {
    flex: 1,
    fontSize: moderateScale(14),
    marginLeft: horizontalScale(15),
    fontFamily: "Popins",
    color: "#395144",
  },
  iconStyle: {
    fontSize: moderateScale(35),
    alignSelf: "center",
    marginHorizontal: horizontalScale(10),
    marginRight: horizontalScale(5),
    color: "#759E37",
    fontWeight: "bold",
  },
});

export default SearchBar;
