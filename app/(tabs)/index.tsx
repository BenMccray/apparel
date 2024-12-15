// import { Image, StyleSheet, Platform } from 'react-native';
import React from "react";
import PopularCard from "../../components/PopularCard";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar and Profile Icon */}
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
        <View style={styles.profileIcon}></View>
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
      <View style={styles.row}>
        <View style={styles.item}>
          <View style={styles.itemImage}></View>
          <Text style={styles.itemText}>Item 1</Text>
          <Text style={styles.itemPrice}>$14.99</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.itemImage}></View>
          <Text style={styles.itemText}>Item 1</Text>
          <Text style={styles.itemPrice}>$14.99</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <View style={styles.itemImage}></View>
          <Text style={styles.itemText}>Item 1</Text>
          <Text style={styles.itemPrice}>$14.99</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.itemImage}></View>
          <Text style={styles.itemText}>Item 1</Text>
          <Text style={styles.itemPrice}>$14.99</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <View style={styles.itemImage}></View>
          <Text style={styles.itemText}>Item 1</Text>
          <Text style={styles.itemPrice}>$14.99</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.itemImage}></View>
          <Text style={styles.itemText}>Item 1</Text>
          <Text style={styles.itemPrice}>$14.99</Text>
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
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 24,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    width: "48%",
    marginBottom: 16,
  },
  itemImage: {
    width: "100%",
    height: 170,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
  },
});
