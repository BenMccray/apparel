import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const RightAction = () => {
  return (
    <TouchableOpacity style={styles.deleteButton}>
      <Ionicons
        style={styles.deleteIcon}
        name="trash"
        size={24}
        color={"#fff"}
      />
    </TouchableOpacity>
  );
};
export default function SwipableItem() {
  return (
    // <Swipeable
    //   //   friction={5}
    //   leftThreshold={Infinity}
    //   renderRightActions={RightAction}
    // >
    <View style={styles.cartItem}>
      <View style={styles.itemInfo}>
        <TouchableOpacity>
          <Image style={styles.cartImage}></Image>
        </TouchableOpacity>
        <View style={styles.itemText}>
          <Text style={styles.itemName}>Black Shirt</Text>
          <Text style={styles.itemPrice}>$14.99</Text>
          <Text style={styles.itemPrice}>Shipping: $7.99</Text>
          <Text style={styles.itemPrice}>Sale fee: $2.99</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.tryOnBtn}>
          <Text>VIRTUAL TRY ON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.purchaseBtn}>
          <Text>PURCHASE</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </Swipeable>
  );
}

const styles = StyleSheet.create({
  deleteButton: {
    // flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
  },
  deleteIcon: {
    paddingHorizontal: 20,
  },
  cartItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  itemInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cartImage: {
    height: "100%",
    aspectRatio: 1,
    backgroundColor: "lightgray",
    margin: 5,
  },
  itemText: {
    display: "flex",
    flexDirection: "column",
    padding: 5,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 12,
  },
  tryOnBtn: {},
  purchaseBtn: {},

  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgray",
  },
});
