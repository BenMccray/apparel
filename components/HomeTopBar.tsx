import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeTopBar() {
  const router = useRouter();
  const routeToCart = () => {
    router.push("../(auth)/shopping-cart");
  };
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.iconContainer} onPress={routeToCart}>
        <Ionicons style={styles.cartIcon} size={32} name="bag-outline" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  cartIcon: {
    width: 32,
    height: 32,
    color: "gray",
  },
});
