import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

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
        I have read and agree to the Terms of Service and Privacy Policy.
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
});
