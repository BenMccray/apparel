import React, { useState } from "react";

import { app, auth } from "@/firebaseConfig.web";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
import { useRouter } from "expo-router";
import Checkbox from "expo-checkbox";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();

  const signUp = async () => {
    setLoading(true);
    if (email === "" || password === "" || name === "" || confirmPass === "") {
      if (confirmPass === "") {
        setError("Confirm your password to continue");
      }
      if (password === "") {
        setError("Provide an password to continue");
      }
      if (email === "") {
        setError("Provide an email to continue");
      }
      if (name === "") {
        setError("Provide an name to continue");
      }
    } else if (confirmPass !== password) {
      setError("Confirmation doesn't match password");
    } else {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        router.replace("./add-info");
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
      <Text style={styles.header}>_Vesta</Text>
      <Text style={styles.signUpText}>Sign Up</Text>
      {/* Main login form for the apps own login */}
      <View style={styles.signUpForm}>
        <KeyboardAvoidingView behavior="padding">
          <View>
            <Text style={styles.inputLabel}>User Name</Text>
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={setName}
              keyboardType="default"
              placeholder="John Smith or johnSmith123"
              placeholderTextColor="gray"
            />
          </View>
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
          {/* confirm password input */}
          <Text style={styles.inputLabel}>Password</Text>
          <View>
            <TextInput
              style={styles.textInput}
              value={confirmPass}
              onChangeText={setConfirmPass}
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
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <View>
            <TextInput
              style={styles.textInput}
              value={password}
              onChangeText={setPassword}
              placeholder="***************"
              placeholderTextColor="gray"
              secureTextEntry={!passwordVisible} // Toggle secureTextEntry based on state
            />
          </View>
          {error ? (
            <Text style={styles.errorMessage}>{error}</Text>
          ) : (
            <Text style={styles.errorMessage}> </Text>
          )}
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
  header: {
    fontSize: 32,
    marginTop: "16%",
    marginBottom: "4%",
  },
  signUpText: {
    fontSize: 18,
    marginBottom: "4%",
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
    // marginBottom: 4,
  },
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
  signUpBtn: {
    backgroundColor: "#007BFF", // Button background color
    flex: 1,
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
