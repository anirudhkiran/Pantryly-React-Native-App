import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function ModalHeader(props) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{props.modalHeaderText}</Text>
      </View>
      <View style={styles.shareIcon}>
        <TouchableOpacity onPress={props.headerButtonHandler}>
          <Entypo name="cross" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    height: height * 0.1,
    backgroundColor: "coral",
    marginBottom: 10,
  },
  headerTextContainer: {
    marginTop: "8%",
    alignItems: "center",
  },
  shareIcon: {
    position: "absolute",
    right: 0,
    top: 0,
    marginRight: 24,
    marginTop: height * 0.04,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
