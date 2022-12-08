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

const ResultsList = ({ title, result, navigation }) => {
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
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
    // fontFamily: "Roboto",
  },
});

export default withNavigation(ResultsList);
