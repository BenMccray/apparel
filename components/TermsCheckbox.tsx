import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";

export default function TermsCheckbox() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.userAgreement}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#007BFF" : undefined}
      />
      <Text>
        I have read and agree to the{" "}
        <Link style={styles.link} href="/">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link style={styles.link} href="/">
          Privacy Policy
        </Link>
        .
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userAgreement: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  checkbox: {
    marginHorizontal: 8,
  },
  link: {
    color: "blue",
  },
});
