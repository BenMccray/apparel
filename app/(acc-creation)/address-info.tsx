import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { FontAwesome } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { auth, db } from "@/firebaseConfig.web";
import { doc, addDoc, collection, setDoc } from "firebase/firestore";

export default function AddressScreen() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [focusedInput, setFocusedInput] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addr1, setAddr1] = useState("");
  const [addr2, setAddr2] = useState("");

  const router = useRouter();

  const updateUserProfile = async () => {
    const userId = auth.currentUser?.uid;
    const usersRef = collection(db, "users");
    if (userId) {
      await addDoc(
        collection(usersRef, "rtvJJPb65iMUDvJlBynmnKZfQSl1", "saved_addrs"),
        {
          addrLine1: addr1,
          addrLine2: addr2,
          city: city,
          state: state,
          zipcode: zipcode,
        }
      );
      if (phone) {
        await setDoc(
          doc(db, "users", userId),
          { userPhone: phone },
          { merge: true }
        );
      }
      router.push("/profile-info");
    } else router.reload();
  };

  return (
    <View style={styles.container}>
      {/* Address form */}
      <View style={styles.addressContainer}>
        <Text style={styles.inputLabel}>Address Line 1</Text>
        <TextInput
          style={[
            styles.textInput,
            focusedInput === "address1" && styles.focusedInput,
            { outlineStyle: "none" } as any,
          ]}
          onFocus={() => setFocusedInput("address1")}
          onBlur={() => setFocusedInput("")}
          value={addr1}
          onChangeText={setAddr1}
          //   textContentType="streetAddressLine1"
          autoComplete="address-line1"
        />
        <Text style={styles.inputLabel}>Address Line 2</Text>
        <TextInput
          style={[
            styles.textInput,
            focusedInput === "address2" && styles.focusedInput,
            { outlineStyle: "none" } as any,
          ]}
          onFocus={() => setFocusedInput("address2")}
          onBlur={() => setFocusedInput("")}
          value={addr2}
          onChangeText={setAddr2}
          autoComplete="address-line2"
        />
        <Text style={styles.inputLabel}>City</Text>
        <TextInput
          style={[
            styles.textInput,
            focusedInput === "city" && styles.focusedInput,
            { outlineStyle: "none" } as any,
          ]}
          onFocus={() => setFocusedInput("city")}
          onBlur={() => setFocusedInput("")}
          value={city}
          onChangeText={setCity}
          autoComplete="postal-address-locality"
        />

        <Text style={styles.inputLabel}>State</Text>
        <TextInput
          style={[
            styles.textInput,
            focusedInput === "state" && styles.focusedInput,
            { outlineStyle: "none" } as any,
          ]}
          onFocus={() => setFocusedInput("state")}
          onBlur={() => setFocusedInput("")}
          value={state}
          onChangeText={setState}
          autoComplete="postal-address-region"
        />

        <Text style={styles.inputLabel}>ZIP/Postal Code</Text>
        <TextInput
          autoComplete="postal-code"
          inputMode="numeric"
          style={[
            styles.textInput,
            focusedInput === "zip" && styles.focusedInput,
            { outlineStyle: "none" } as any,
          ]}
          onFocus={() => setFocusedInput("zip")}
          onBlur={() => setFocusedInput("")}
          onChangeText={setZipcode}
        />

        <Text style={styles.inputLabel}>Telephone</Text>
        <TextInput
          inputMode="tel"
          autoComplete="tel"
          style={[
            styles.textInput,
            focusedInput === "phone" && styles.focusedInput,
            { outlineStyle: "none" } as any,
          ]}
          onFocus={() => setFocusedInput("phone")}
          onBlur={() => setFocusedInput("")}
          value={phone}
          onChangeText={setPhone}
        />
        <Link href="/profile-info">Skip</Link>
        <TouchableOpacity onPress={updateUserProfile}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  },
  addressContainer: {
    marginTop: "16%",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    fontSize: 32,
    marginTop: "16%",
    marginBottom: "4%",
  },

  inputLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  textInput: {
    padding: 6,
    borderColor: "transparent", // Set other borders to transparent
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  focusedInput: {
    borderColor: "transparent", // Set other borders to transparent

    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  box: {
    width: 250,
  },
  errorMessage: {
    color: "red",
    // marginBottom: 4,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputWeb: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
