import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SwipableItem from "@/components/SwipableItem";
import { useRouter } from "expo-router";

export default function ShoppingCartScreen() {
  const router = useRouter();

  const closeCart = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      <View style={styles.cartHeader}>
        {/* close cart button */}
        <TouchableOpacity style={styles.closeIcon} onPress={closeCart}>
          <Ionicons name="close" size={32} color="gray" />
        </TouchableOpacity>
        <Text style={styles.title}>Cart</Text>
      </View>
      <ScrollView style={styles.cartScroll}>
        <SwipableItem />
        <SwipableItem />
        <SwipableItem />
        <SwipableItem />
        <SwipableItem />
        <SwipableItem />
        <SwipableItem />
        <SwipableItem />
      </ScrollView>

      <View>
        <Text>TOTAL PRICE</Text>
        <TouchableOpacity style={styles.purchaseBtn}>
          <Text>PURCHASE CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 16,
  },
  cartHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  closeIcon: {
    left: "4%",
    position: "absolute",
  },
  title: {
    marginHorizontal: "auto",
    fontSize: 24,
  },
  cartScroll: {},
  purchaseBtn: {},

  bottomView: {},
  totalPrice: {},
});
