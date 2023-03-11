import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { horizontalScale, moderateScale, verticalScale } from "./Metrics";

Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
};

const ResultDetail = ({ result }) => {
  const [loaded] = useFonts({
    Popins: require("../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ padding: moderateScale(5) }}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url }} />
        <Text style={styles.name}>{result.name}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratinginfo}>{result.rating}</Text>
            <Feather name="star" style={styles.star} />
          </View>
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewinfo}>{result.review_count}</Text>
            <Feather name="eye" style={styles.eye} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    // fontWeight: "600",
    fontSize: moderateScale(16),
    width: Dimensions.get("screen").width * 0.7,
    fontFamily: "Popins",
    color: "#395144",
  },
  image: {
    width: Dimensions.get("screen").width * 0.7,
    height: verticalScale(150),
    borderRadius: moderateScale(5),
    marginBottom: verticalScale(5),
  },
  container: {
    marginLeft: horizontalScale(10),
  },
  infoContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    paddingTop: verticalScale(3),
  },
  ratinginfo: {
    color: "white",
    alignSelf: "flex-start",
    fontSize: moderateScale(15),
    fontFamily: "Popins",
  },
  reviewinfo: {
    color: "#395144",
    alignSelf: "flex-start",
    fontSize: moderateScale(15),
    fontFamily: "Popins",
  },
  ratingContainer: {
    marginRight: horizontalScale(10),
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#759E37",
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
  },
  reviewContainer: {
    marginRight: horizontalScale(10),
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#FFC107",
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
  },
  star: {
    color: "white",
    fontSize: moderateScale(15),
    fontWeight: "500",
    marginLeft: horizontalScale(3),
    marginTop: verticalScale(3),
    fontStyle: "italic",
    fontFamily: "Popins",
  },
  eye: {
    color: "#395144",
    fontSize: moderateScale(15),
    fontWeight: "bold",
    marginLeft: horizontalScale(3),
    marginTop: verticalScale(3),
  },
});

export default ResultDetail;
