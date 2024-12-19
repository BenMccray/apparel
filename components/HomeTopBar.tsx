import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import CartPopUp from "../app/(auth)/shopping-cart";

export default function HomeTopBar() {
  const router = useRouter();
  const routeToCart = () => {
    router.push("../(auth)/shopping-cart");
  };
  const translateY = useRef(new Animated.Value(-100)).current;
  const dropCartDown = () => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="#888"
      />
      <Link style={styles.iconContainer} href="/(auth)/shopping-cart">
        <Ionicons style={styles.cartIcon} size={32} name="bag-outline" />
      </Link>
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
