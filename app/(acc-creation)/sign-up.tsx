import React, { useState } from "react";

import { app, auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "@react-native-firebase/auth";
import FirebaseError from "@react-native-firebase/app";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SignInScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const signUp = async () => {
    setLoading(true);
    if (email === "" || password === "" || name === "") {
      if (password === "") {
        setError("Provide an password to continue");
      }
      if (email === "") {
        setError("Provide an email to continue");
      }
      if (name === "") {
        setError("Provide an name to continue");
      }
    } else {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        router.replace("./additional-info");
      } catch (e: any) {
        const err = e as Error;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.signUpText}>Sign Up</Text>
      {/* Main login form for the apps own login */}
      <View style={styles.signUpForm}>
        <KeyboardAvoidingView behavior="padding">
          <Text style={styles.inputLabel}>User Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            keyboardType="default"
            placeholder="John Smith or johnSmith123"
            placeholderTextColor="gray"
          />
          {/* email input */}
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="example@email.com"
            placeholderTextColor="gray"
          />
          {/* password input */}
          <Text style={styles.inputLabel}>Password</Text>
          <View>
            <TextInput
              style={styles.textInput}
              value={password}
              onChangeText={setPassword}
              placeholder="***************"
              placeholderTextColor="gray"
              secureTextEntry={!passwordVisible} // Toggle secureTextEntry based on state
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.iconContainer}
            >
              <Ionicons
                name={passwordVisible ? "eye" : "eye-off"} // Change icon based on visibility
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signUpBtn} onPress={signUp}>
            <Text style={styles.signUpBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  signUpText: {
    fontSize: 24,
    marginBottom: "16%",
  },
  signUpForm: {
    width: "90%",
    // flex: 1,
    // justifyContent: "center",
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  textInput: {
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 12,
  },
  iconContainer: {
    position: "absolute",
    right: 20,
    top: 8, // Adjust based on your TextInput height
  },
  forgotPswd: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    textDecorationLine: "underline",
    color: "blue",
    marginBottom: 28,
  },
  errorMessage: {
    color: "red",
    marginBottom: 4,
  },
  signUpBtn: {
    backgroundColor: "#007BFF", // Button background color
    padding: 14, // Padding inside the button
    borderRadius: 24, // Rounded corners
    alignItems: "center", // Center the text
    marginBottom: 12, // Space between buttons
  },
  signUpBtnText: {
    color: "#FFFFFF", // Text color
    fontSize: 16, // Text size
    fontWeight: "bold", // Bold text
  },
});
