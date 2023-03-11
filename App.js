import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "./src/components/Metrics";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Hunt",
      headerStyle: {
        shadowColor: "black",
        shadowOpacity: 1,
        shadowRadius: moderateScale(8),
        shadowOffset: { width: horizontalScale(5), height: verticalScale(4) },
        elevation: horizontalScale(30),
        backgroundColor: "#759E37",
      },
      headerTitleStyle: {
        // fontWeight: "bold",
        color: "white",
        fontSize: moderateScale(30),
        marginHorizontal: horizontalScale(10),
        fontFamily: "Popins",
      },
      headerTintColor: "#FFF",
    },
  }
);

const AppContainer = createAppContainer(navigator);

export default function App() {
  const [fontsLoaded] = useFonts({
    Popins: require("./assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <AppContainer />
    </>
  );
}
