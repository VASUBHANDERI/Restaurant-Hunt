import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail";
import { useFonts } from "expo-font";
import { horizontalScale, moderateScale, verticalScale } from "./Metrics";

Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
};

const ResultsList = ({ title, result, navigation }) => {
  const [loaded] = useFonts({
    Popins: require("../../assets/fonts/Poppins-Light.ttf"),
    // PopinsB: require("../../assets/fonts/Poppins-Bold.ttf"),
    // PopinsM: require("../../assets/fonts/Poppins-Medium.ttf"),
    // PopinsR: require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  if (!result.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title} ({result.length})
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => Linking.openURL(`${item.url}`)}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(10),
  },
  title: {
    fontSize: moderateScale(20),
    // fontWeight: "bold",
    marginLeft: horizontalScale(17),
    marginBottom: verticalScale(5),
    fontFamily: "Popins",
    color: "#395144",
  },
});

export default withNavigation(ResultsList);
