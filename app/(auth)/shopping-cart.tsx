import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SwipableItem from "@/components/SwipableItem";

export default function ShoppingCartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartHeader}>
        {/* close cart button */}
        <TouchableOpacity style={styles.closeIcon}>
          <Ionicons></Ionicons>
        </TouchableOpacity>
        <Text>Cart</Text>
      </View>
      <ScrollView style={styles.cartScroll}>
        <SwipableItem />
      </ScrollView>

      <View>
        <Text>TOTAL PRICE</Text>
        <TouchableOpacity style={styles.purchaseBtn}>
          <Text>PURCHASE CART</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  cartHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 32,
  },
  closeIcon: {},
  cartScroll: {},
  purchaseBtn: {},

  bottomView: {},
  totalPrice: {},
});
