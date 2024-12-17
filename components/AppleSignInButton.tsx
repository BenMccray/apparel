import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Use an Apple icon from Expo

export default function AppleSignInButton() {
  return (
    <TouchableOpacity style={styles.appleButton}>
      <Ionicons name="logo-apple" size={24} color="white" style={styles.icon} />
      <Text style={styles.text}>Sign in with Apple</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#000",
    borderRadius: 8,
    marginVertical: 5,
  },

  icon: { marginRight: 8 },
  text: { fontSize: 16, color: "#FFFFFF", fontWeight: "600" },
});
