import React, { useState } from "react";

import { auth, db } from "@/firebaseConfig.web";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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
import TermsCheckbox from "@/components/TermsCheckbox";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const signUp = async () => {
    setLoading(true);
    if (email === "" || password === "" || confirmPass === "" || !isChecked) {
      if (!isChecked) {
        setError("Please check the box to agree to our terms and policies");
      }
      if (confirmPass === "") {
        setError("Confirm your password to continue");
      }
      if (password === "") {
        setError("Provide an password to continue");
      }
      if (email === "") {
        setError("Provide an email to continue");
      }
    } else if (confirmPass !== password) {
      setError("Confirmation doesn't match password");
    } else {
      try {
        createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            const user = userCredential.user;
            console.log(user.uid);
            return setDoc(doc(db, "users", user.uid), {
              userId: user.uid,
              userEmail: email,
              userImageURL: "",
            });
          }
        );
        router.push("/address-info");
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
          {/* email input */}
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="example@email.com"
            placeholderTextColor="gray"
            textContentType="emailAddress"
          />
          {/* confirm password input */}
          <Text style={styles.inputLabel}>Password</Text>
          <View>
            <TextInput
              textContentType="newPassword"
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
          <TermsCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />
          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => router.push("/address-info")}
          >
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
    flexDirection: "column",

    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    paddingBottom: "auto",
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
    padding: 6,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  iconContainer: {
    position: "absolute",
    right: 14,
    top: 3, // Adjust based on your TextInput height
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
