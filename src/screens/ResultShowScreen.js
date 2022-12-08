import { View, Text, StyleSheet, Image, Dimensions, Linking } from "react-native";
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const myItem = navigation.getParam("myItem");

  console.log(myItem);
  const [result, setResult] = useState(myItem);

  // const getResult = async id => {
  //     const response = await yelp.get(`/${id}`);
  //     setResult(response.data);
  //     console.log(result);

  // };
  // useEffect(() => {
  //   getResult({ id });
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text>Phone no. - {result.display_phone}</Text>
      <Text>Category - {result.categories[0].title}</Text>
      {result.is_closed ? (
        <Text style={{ color: "red" }}>Closed</Text>
      ) : (
        <Text style={{ color: "green" }}>Open</Text>
      )}
      <Text>
        Address - {result.location.display_address[0]}{" "}
        {result.location.display_address[1]}{" "}
        {result.location.display_address[2]}{" "}
      </Text>
      <Text style = {{color:'blue'}} onPress = {()=>Linking.openURL(`${result.url}`)}>Click here to visit our website</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingLeft:10,
    backgroundColor:'white',
    flex:1,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
  },
  image: {
    width: Dimensions.get("screen").width * 0.98,
    height: Dimensions.get("screen").height * 0.4,
    borderRadius: 5,
    alignSelf:'center',
    marginBottom: 5,
  },

});
export default ResultShowScreen;
