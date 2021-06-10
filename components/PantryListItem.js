import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ListItem(props) {
  const [quantity, setQuantity] = useState(props.itemData.quantity);
  const [unit, setUnit] = useState(props.itemData.unit);
  const [saveButtonStatus, setSaveButtonStatus] = useState(true);
  const [buttonColor, setButtonColor] = useState("gainsboro");

  const captureChangedQuantity = (changedQuantity) => {
    setQuantity(changedQuantity);
    setButtonColor("coral");
    setSaveButtonStatus(false);
  };

  const captureChangedUnit = (changedUnit) => {
    setUnit(changedUnit);
    setButtonColor("coral");
    setSaveButtonStatus(false);
  };

  const updateData = () => {
    if (quantity === "") {
      alert("Quantity cannot be empty!");
    } else {
      setButtonColor("gainsboro");
      setSaveButtonStatus(true);
      props.updateData(props.itemData.id, props.itemData.name, quantity, unit);
    }
  };
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
          <View style={styles.inputContainer}>
            <View>
              <Text style={{ fontSize: 14 }}>Quantity</Text>
              <TextInput
                keyboardType="number-pad"
                value={quantity}
                style={styles.quantityInput}
                onChangeText={captureChangedQuantity}
              />
            </View>
            <View style={{ marginLeft: 24 }}>
              <Text style={{ fontSize: 14 }}>Unit</Text>
              <TextInput
                value={unit}
                style={styles.unitInput}
                onChangeText={captureChangedUnit}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[styles.saveButton, { backgroundColor: buttonColor }]}
            disabled={saveButtonStatus}
            onPress={updateData}
          >
            <Text style={{ color: "white" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "white",

    // shadows for iOS
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    // shadows for Android
    elevation: 4,
  },
  container: {
    margin: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    margin: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
  },

  quantityInput: {
    borderBottomWidth: 2,
    borderBottomColor: "coral",
    width: 70,
    fontSize: 22,
  },

  unitInput: {
    borderBottomWidth: 2,
    borderBottomColor: "coral",
    width: 80,
    fontSize: 22,
  },
  saveButton: {
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    height: 35,
    borderRadius: 10,
  },
});
