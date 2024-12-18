import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import PopularCard from "./PopularCard";

let i = 0;
const DATA = [
  { itemImage: " ", itemName: `item ${i++}`, itemPrice: 14.99 },
  { itemImage: " ", itemName: `item ${i++}`, itemPrice: 14.99 },
  { itemImage: " ", itemName: `item ${i++}`, itemPrice: 14.99 },
  { itemImage: " ", itemName: `item ${i++}`, itemPrice: 14.99 },
  { itemImage: " ", itemName: `item ${i++}`, itemPrice: 14.99 },
  { itemImage: " ", itemName: `item ${i++}`, itemPrice: 14.99 },
  { itemImage: " ", itemName: `item ${i++}`, itemPrice: 14.99 },
];
export default function PopularScrollSection() {
  return (
    <View>
      <Text style={styles.sectionTitle}>Popular</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {DATA.map(
          (
            {
              itemImage,
              itemName,
              itemPrice,
            }: {
              itemImage: string;
              itemName: string;
              itemPrice: number;
            },
            key
          ) => {
            return (
              <PopularCard
                key={key}
                itemImage={itemImage}
                itemName={itemName}
                itemPrice={itemPrice}
              />
            );
          }
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
