import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function GroceryListItem(props) {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.itemName}>{props.itemData.name}</Text>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => props.deleteItem(props.itemData.id)}
          >
            <MaterialIcons name="delete" size={26} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.qunatityUnitContainer}>
            {/* Adding flex: 1 ensures that the text does not push the content next to it out of the card */}
            <View>
              <Text style={{ fontSize: 14 }}>Quantity</Text>
              <Text style={{ fontSize: 22 }}>{props.itemData.quantity}</Text>
            </View>
            {/* Adding flex: 1 ensures that the text does not push the content next to it out of the card */}
            <View style={styles.unitContainer}>
              <Text style={{ fontSize: 14 }}>Unit</Text>
              <Text style={{ fontSize: 22 }}>{props.itemData.unit}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    width: width * 0.91,
    borderRadius: 16,
    marginVertical: 10,
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  container: {
    margin: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  itemName: {
    // *** adding flex: 1 ensures that the "delete" icon does not get pushed out of the card* *** //
    flex: 1,
    fontSize: 24,
    marginLeft: 10,
    marginTop: 10,
  },
  bodyContainer: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  qunatityUnitContainer: {
    flexDirection: "row",
  },

  unitContainer: {
    marginLeft: width * 0.14,
  },
});
