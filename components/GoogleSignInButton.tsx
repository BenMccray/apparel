import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useGoogleSignIn } from "../hooks/useGoogleSignIn";

export default function GoogleSignInButton() {
  const [loading, setLoading] = useState(false);
  const { promptAsync, handleResponse } = useGoogleSignIn();

  const googleSignIn = async () => {
    setLoading(true);
    console.log("google");
    try {
      await promptAsync();
      const signedInUser = await handleResponse();
    } catch (e: any) {
      alert("Sign in with Google failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableOpacity style={styles.googleButton} onPress={googleSignIn}>
      <Image
        source={{ uri: "https://img.icons8.com/color/48/google-logo.png" }}
        style={styles.icon}
      />
      <Text style={styles.text}>Sign in with Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 5,
  },
  icon: { width: 24, height: 24, marginRight: 8 },
  text: { fontSize: 16, color: "#000", fontWeight: "600" },
});
