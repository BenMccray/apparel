// import { Image, StyleSheet, Platform } from 'react-native';
import React from "react";
import PopularCard from "@/components/PopularCard";
import NormalCard from "@/components/NormalCard";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const POPULARDATA = {};
const FORYOUDATA = {};
export default function HomeScreen() {
  const routeToCart = () => {
    router.push("../(auth)/shopping-cart");
  };
  let i = 0;
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar and Profile Icon */}
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

      {/* Popular Section */}
      <Text style={styles.sectionTitle}>Popular</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <PopularCard itemImage=" " itemName="item 1" itemPrice={14.99} />
        <PopularCard itemImage=" " itemName="item 1" itemPrice={14.99} />
        <PopularCard itemImage=" " itemName="item 1" itemPrice={14.99} />
      </ScrollView>

      {/* For You Section */}
      <Text style={styles.sectionTitle}>For You</Text>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <NormalCard
            itemImage=" "
            itemName={"item " + i++}
            itemPrice={14.99}
          />
          <NormalCard
            itemImage=" "
            itemName={"item " + i++}
            itemPrice={14.99}
          />
          <NormalCard
            itemImage=" "
            itemName={"item " + i++}
            itemPrice={14.99}
          />
          <NormalCard
            itemImage=" "
            itemName={"item " + i++}
            itemPrice={14.99}
          />
          <NormalCard
            itemImage=" "
            itemName={"item " + i++}
            itemPrice={14.99}
          />
          <NormalCard
            itemImage=" "
            itemName={"item " + i++}
            itemPrice={14.99}
          />
          <NormalCard
            itemImage=" "
            itemName={"item " + i++}
            itemPrice={14.99}
          />
          <NormalCard
            itemImage=" "
            itemName={"item " + i++}
            itemPrice={14.99}
          />
          <NormalCard
            itemImage=" "
            itemName={"item " + i++}
            itemPrice={14.99}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
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
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8,
  },
  horizontalScroll: {
    marginBottom: 16,
  },
  horizontalItem: {
    width: 150,
    marginRight: 16,
  },
  rowContainer: {
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
