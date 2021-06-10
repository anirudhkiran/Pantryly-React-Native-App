import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import Pantry from "./screens/Pantry";
import GroceryList from "./screens/GroceryList";
import About from "./screens/About";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Pantry") {
              return <FontAwesome5 name="store" size={20} color={color} />;
            } else if (route.name === "Grocery List") {
              return (
                <FontAwesome5 name="clipboard-list" size={20} color={color} />
              );
            } else if (route.name === "About") {
              return (
                <FontAwesome5 name="info-circle" size={20} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "coral",
          inactiveTintColor: "gray",
          style: { backgroundColor: "white" },
        }}
      >
        <Tab.Screen name="Pantry" component={Pantry} />
        <Tab.Screen name="Grocery List" component={GroceryList} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
