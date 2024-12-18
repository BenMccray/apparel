import React, { PropsWithChildren } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

type Props = {
  itemImage: string;
  itemName: string;
  itemPrice: number;
  key: number;
};
export default function PopularCard({ itemImage, itemName, itemPrice }: Props) {
  return (
    <View style={styles.horizontalItem}>
      <View style={styles.itemImage}>
        <Image src={itemImage}></Image>
      </View>
      <Text style={styles.itemText}>{itemName}</Text>
      <Text style={styles.itemPrice}>${itemPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalItem: {
    width: 250,
    marginRight: 20,
  },
  itemImage: {
    width: "100%",
    height: 250,
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
