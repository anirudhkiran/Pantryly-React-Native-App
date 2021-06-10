import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Text,
  KeyboardAvoidingView,
} from "react-native";

import { FAB } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AddItemModal from "../components/AddItemModal";
import Header from "../components/Header";
import PantryLisItem from "../components/PantryListItem";

export default function ViewPantry({ navigation, props }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [pantryItemList, setPantryItemList] = useState({});
  const [isDataReady, setIsDataReady] = useState(false);

  //useEffect is used to perfrom some fetches before user uses the app
  useEffect(() => {
    loadItems();
  });

  const loadItems = async () => {
    if (isDataReady === false) {
      try {
        const getItems = await AsyncStorage.getItem("PantryItems");
        const parsedItems = JSON.parse(getItems);
        setPantryItemList(parsedItems || {});
        setIsDataReady(true);
        if (isDataReady) {
          alert("Data load completed");
        }
      } catch (err) {
        alert("Application Error. Cannot load data.");
      }
    }
  };

  const saveItemsToStorage = (newItemList) => {
    const saveItems = AsyncStorage.setItem(
      "PantryItems",
      JSON.stringify(newItemList)
    );
  };

  const showModal = () => {
    setModalVisibility(true);
  };
  const removeModal = () => {
    setModalVisibility(false);
  };

  const addItem = (data) => {
    setPantryItemList((prevState) => {
      const newItemList = {
        ...prevState,
        ...data,
      };
      saveItemsToStorage(newItemList);
      return { ...newItemList };
    });
  };

  const updateData = (id, name, quantity, unit) => {
    setPantryItemList((prevState) => {
      const newItemList = {
        ...prevState,
        [id]: {
          id: id,
          name: name,
          quantity: quantity,
          unit: unit,
        },
      };
      saveItemsToStorage(newItemList);
      return { ...newItemList };
    });
  };

  const deleteItem = (id) => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      {
        text: "Cancel",
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          setPantryItemList((prevState) => {
            const tempItems = pantryItemList;
            delete tempItems[id];
            const newItemList = {
              ...tempItems,
            };
            saveItemsToStorage(newItemList);
            return { ...newItemList };
          });
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <PantryLisItem
      itemData={pantryItemList[item]}
      updateData={updateData}
      deleteItem={deleteItem}
    />
  );

  if (Object.keys(pantryItemList).length === 0) {
    return (
      <View style={styles.screen}>
        <Header headerText="Pantry " />
        <View style={styles.noItemContainer}>
          <Text style={{ color: "gray" }}> No items in your Pantry</Text>
          <AddItemModal
            modalVisibility={modalVisibility}
            closeModal={removeModal}
            addItem={addItem}
            modalHeaderText={"  Add to Pantry  "}
          />
        </View>
        <FAB
          style={styles.fab}
          big
          icon="plus"
          onPress={() => showModal()}
          color="white"
        />
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <Header headerText="Pantry " />
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <AddItemModal
              modalVisibility={modalVisibility}
              closeModal={removeModal}
              addItem={addItem}
              modalHeaderText={"  Add to Pantry  "}
            />
            <FlatList
              data={Object.keys(pantryItemList)}
              renderItem={renderItem}
              keyExtractor={(item) => pantryItemList[item].id.toString()}
            />
          </KeyboardAvoidingView>

          <FAB
            style={styles.fab}
            big
            icon="plus"
            onPress={() => showModal()}
            color="white"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  noItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    flex: 1,
    position: "absolute",
    margin: 16,
    right: 10,
    bottom: 3,
    backgroundColor: "coral",
  },
});
