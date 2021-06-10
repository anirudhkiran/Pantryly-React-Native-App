import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{props.headerText}</Text>
      </View>
    </View>
  );
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.1,
    backgroundColor: "coral",
  },
  headerTextContainer: {
    paddingTop: 34,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
