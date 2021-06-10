import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import Header from "../components/Header";

export default function About(props) {
  return (
    <View style={styles.screen}>
      <Header headerText="  About  " />
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" }}>
        <View style={styles.container}>
          <View>
            <Image style={styles.icon} source={require("../assets/icon.png")} />
          </View>

          <Text style={styles.appName}>Pantryly</Text>
          <Text style={styles.caption}>Your Pantry, One Place!</Text>
          <Text
            style={{
              color: "coral",
              marginTop: height * 0.05,
              fontSize: 17,
            }}
          >
            {"  Designed and developed by"}
            <Text style={{ fontWeight: "bold" }}>{" Anirudh Kiran  "}</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: height * 0.04,
  },
  icon: {
    height: 170,
    width: 170,
    marginTop: height * 0.1,
  },

  appName: {
    color: "coral",
    marginTop: height * 0.01,
    fontSize: 38,
  },
  caption: {
    color: "gray",
    fontSize: 22,
    marginTop: height * 0.009,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    bottom: 15,
  },
});
