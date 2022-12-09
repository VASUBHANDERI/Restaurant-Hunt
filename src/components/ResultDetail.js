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

const ResultDetail = ({ result }) => {
  return (
    <View style={{ padding: 5 }}>
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
    fontWeight: "bold",
    fontSize: 16,
    width: Dimensions.get("screen").width * 0.7,
  },
  image: {
    width: Dimensions.get("screen").width * 0.7,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  container: {
    marginLeft: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    paddingTop:3,
  },
  ratinginfo: {
    color: "white",
    alignSelf: "flex-start",
    fontSize: 15,
  },
  reviewinfo: {
    color: "black",
    alignSelf: "flex-start",
    fontSize: 15,
  },
  ratingContainer: {
    marginRight: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#006600",
    padding: 5,
    borderRadius: 5,
  },
  reviewContainer: {
    marginRight: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#FFC107",
    padding: 5,
    borderRadius: 5,
  },
  star: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 3,
    marginTop: 1,
    fontStyle: "italic",
  },
  eye: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 3,
    marginTop: 1,
  },
});

export default ResultDetail;
