// import { Image, StyleSheet, Platform } from 'react-native';
import React from "react";
import { FlatList, StyleSheet, ScrollView } from "react-native";
import HomeTopBar from "@/components/HomeTopBar";
import PopularScrollSection from "@/components/PopularScrollSection";
import ForYouScrollSection from "@/components/ForYouScrollSection";

export default function HomeScreen() {
  let i = 0;
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar and Profile Icon */}
      <HomeTopBar />

      {/* Popular Section */}
      <PopularScrollSection />
      {/* For You Section */}
      <ForYouScrollSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8,
  },
});
