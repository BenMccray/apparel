import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { auth } from "@/firebaseConfig.web";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, Slot, SplashScreen, useRouter } from "expo-router";
import GoogleSignInButton from "@/components/GoogleSignInButton";
/** Login screen as the first screen seen when downloading and opening the app
 * Users can sign in with app credentials, google, or apple if on ios
 * Sign up and forgot password functionality
 * Can skip sign in for limited access to app
 */
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      if (user) router.replace("/(tabs)/home");
    } catch (e: any) {
      alert("Sign in failed");
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
              style={[styles.textInput]}
              value={password}
              onChangeText={setPassword}
              placeholder="***************"
              placeholderTextColor="gray"
              secureTextEntry={!passwordVisible} // Toggle secureTextEntry based on state
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.passwordVisiBtn}
            >
              <Ionicons
                name={passwordVisible ? "eye" : "eye-off"} // Change icon based on visibility
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          {/* Forgot Password Button */}
          <TouchableOpacity onPress={() => console.log("pressed")}>
            <Text style={styles.forgotPswd}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* Sign In Button */}
          <TouchableOpacity style={styles.logInBtn} onPress={signIn}>
            <Text style={styles.logInBtnText}>Sign In</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>

      {/* Here is alternate signin options and a sign up option */}
      <Text style={styles.separatorText}>Or sign in with</Text>
      <View style={styles.altSignIn}>
        <GoogleSignInButton />
      </View>
      <View style={styles.noAccount}>
        <Text>Don't have an account? </Text>
        <Link style={styles.signUpBtn} href="/(acc-creation)/sign-up">
          Sign Up
        </Link>
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
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  inputFocus: {
    borderWidth: 0,
    borderBottomColor: "black",
  },
  passwordVisiBtn: {
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
    marginBottom: 16,
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
    marginVertical: 16,
  },
  altSignIn: {
    marginBottom: 8,
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
