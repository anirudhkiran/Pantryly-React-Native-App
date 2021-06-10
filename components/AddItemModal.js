import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import uuidv1 from "uuid/v1";

import ModalHeader from "./ModalHeader";

export default function AddItem(props) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");

  const updateName = (text) => {
    setName(text);
  };
  const updateQuantity = (text) => {
    setQuantity(text);
  };
  const updateUnit = (text) => {
    setUnit(text);
  };

  const addHandler = () => {
    if (name !== "" && quantity !== "") {
      const id = uuidv1();
      const data = {
        [id]: {
          id: id,
          name: name,
          quantity: quantity,
          unit: unit,
        },
      };

      props.addItem(data);
      setName("");
      setQuantity("");
      setUnit("");
      props.closeModal();
    } else {
      alert("Name and Quantity cannot be empty");
    }
  };

  return (
    <Modal visible={props.modalVisibility} animationType="slide">
      <ModalHeader
        modalHeaderText={props.modalHeaderText}
        headerButtonHandler={props.closeModal}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.lable}>Name</Text>
              <TextInput
                value={name}
                style={styles.input}
                placeholder="eg: Nutella, Bread"
                onChangeText={updateName}
              />
            </View>
            <View style={{ paddingVertical: 28 }}>
              <Text style={styles.lable}>Quantity</Text>
              <TextInput
                keyboardType="number-pad"
                value={quantity}
                style={styles.input}
                placeholder="eg: 1, 250"
                onChangeText={updateQuantity}
              />
            </View>
            <View>
              <Text style={styles.lable}>Unit</Text>
              <TextInput
                value={unit}
                style={styles.input}
                placeholder="eg: litre, pound"
                onChangeText={updateUnit}
              />
            </View>
            <TouchableOpacity style={styles.addButton} onPress={addHandler}>
              <Text style={{ fontSize: 22, color: "white" }}>Add Item</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    margin: 24,
    padding: 24,
  },
  lable: {
    color: "coral",
    fontSize: 24,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginTop: 8,
    fontSize: 22,
    paddingBottom: 5,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "coral",
    marginTop: 60,
    padding: 12,
    borderRadius: 10,
  },
});
