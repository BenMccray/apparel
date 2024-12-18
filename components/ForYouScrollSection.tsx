import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import NormalCard from "./NormalCard";

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
export default function ForYouScrollSection() {
  return (
    <View>
      <Text style={styles.sectionTitle}>For You</Text>
      <View style={{ justifyContent: "center" }}>
        <View style={styles.row}>
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
                <NormalCard
                  key={key}
                  itemImage={itemImage}
                  itemName={itemName}
                  itemPrice={itemPrice}
                />
              );
            }
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8,
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
