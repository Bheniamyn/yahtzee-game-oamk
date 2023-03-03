import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Gameboard from "./screens/Gameboard";
import Home from "./screens/Home";
import Scoreboard from "./screens/Scoreboard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "./screens/Header";
import Footer from "./screens/Footer";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();

const icons = {
  Home: "home",
  Gameboard: "gamepad-variant",
  Scoreboard: "format-list-numbered",
};

export default function App() {
  const [loaded] = useFonts({
    Righteous: require("./fonts/Righteous-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const homeOpt = {
    tabBarStyle: { display: "none" },
  };

  const getOptions = ({ route }) => {
    return {
      tabBarIcon: ({ focused }) => {
        const color = focused ? "#27ae60" : "black";
        return (
          <MaterialCommunityIcons
            name={icons[route.name]}
            size={24}
            color={color}
          />
        );
      },
      tabBarStyle: {
        height: 80,
        backgroundColor: "white",
        paddingBottom: 10,
      },
      tabBarLabelStyle: { fontSize: 16 },
      tabBarActiveTintColor: "#27ae60",
      headerShown: false,
      animationTypeForReplace: "fade",
    };
  };

  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator initialRouteName="Home" screenOptions={getOptions}>
        <Tab.Screen name="Home" component={Home} options={homeOpt} />
        <Tab.Screen name="Gameboard" component={Gameboard} />
        <Tab.Screen name="Scoreboard" component={Scoreboard} />
      </Tab.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
