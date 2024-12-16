import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("Sign up failed" + err.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace("./(tabs)/index");
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("Sign in failed" + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signInText}>Sign In</Text>
      {/* Main login form for the apps own login */}
      <View style={styles.loginForm}>
        <KeyboardAvoidingView behavior="padding">
          {/* email input */}
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="abc@email.com"
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
            <Pressable
              onPress={togglePasswordVisibility}
              style={styles.iconContainer}
            >
              <Ionicons
                name={passwordVisible ? "eye-off" : "eye"} // Change icon based on visibility
                size={24}
                color="gray"
              />
            </Pressable>
          </View>
          \{/* Forgot Password Button */}
          <Pressable onPress={() => console.log("pressed")}>
            <Text style={styles.forgotPswd}>Forgot Password?</Text>
          </Pressable>
          {/* Sign In Button */}
          <Pressable style={styles.logInBtn} onPress={signIn}>
            <Text style={styles.logInBtnText}>Log In</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>

      {/* Here is alternate signin options and a sign up option */}
      <Text style={styles.separatorText}>Or sign in with</Text>
      <View style={styles.altSignIn}>
        {Platform.OS === "ios" ? <Pressable>Apple</Pressable> : null}
        <Pressable>Google</Pressable>
      </View>
      <View style={styles.noAccount}>
        <Text>Don't have an account? </Text>
        <Pressable onPress={signUp}>
          <Text style={styles.signUpBtn}>Sign up</Text>
        </Pressable>
      </View>
    </View>
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
  signInText: {
    fontSize: 24,
    marginBottom: "16%",
  },
  loginForm: {
    width: "90%",
    // flex: 1,
    // justifyContent: "center",
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 12,
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
  logInBtn: {
    backgroundColor: "#007BFF", // Button background color
    padding: 14, // Padding inside the button
    borderRadius: 24, // Rounded corners
    alignItems: "center", // Center the text
    marginBottom: 12, // Space between buttons
  },
  logInBtnText: {
    color: "#FFFFFF", // Text color
    fontSize: 16, // Text size
    fontWeight: "bold", // Bold text
  },
  separatorText: {
    marginVertical: 48,
  },
  altSignIn: {
    marginBottom: 32,
  },
  signUpBtn: {
    color: "blue",
    textDecorationLine: "underline",
  },
  noAccount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "75%",
  },
});
