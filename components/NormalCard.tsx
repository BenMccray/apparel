import React, { PropsWithChildren } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  itemImage: string;
  itemName: string;
  itemPrice: number;
};
export default function NormalCard({ itemImage, itemName, itemPrice }: Props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemImage}>
        <Image src={itemImage} />
      </View>
      <Text style={styles.itemText}>{itemName}</Text>
      <Text style={styles.itemPrice}>${itemPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
