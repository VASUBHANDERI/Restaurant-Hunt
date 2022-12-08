import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={{padding: 5 }}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url }} />
        <Text style={styles.name}>{result.name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.ratinginfo}>{result.rating} Stars </Text>
          <Text style={styles.reviewinfo}>{result.review_count} Reviews</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    fontSize: 16,
    width: Dimensions.get("screen").width * 0.6,
  },
  image: {
    width: Dimensions.get("screen").width * 0.7,
    height: 150,
    borderRadius: 5,
    marginBottom:5,
  },
  container: {
    marginLeft: 10,
  },
  infoContainer: {
    flexDirection: "row",
  },
  ratinginfo: {
    color: "gray",
    alignSelf: "flex-start",
    flex:1,
  },
  reviewinfo: {
    color: "gray",
    alignSelf: "flex-end",
    flex:1,
  },
});

export default ResultDetail;
