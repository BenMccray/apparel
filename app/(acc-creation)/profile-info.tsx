import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { Camera } from "expo-camera";
import { Link, useRouter } from "expo-router";
import RNPickerSelect from "react-native-picker-select";
// import DropDownPicker from "react-native-dropdown-picker";

export default function InfoScreen() {
  const router = useRouter();
  const [height, setHeight] = useState({ ft: 5, in: 8 });
  const [weight, setWeight] = useState(140);
  const [name, setName] = useState("");

  const saveInfo = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Additional Information</Text>
      <Text style={styles.textBlob}>
        This information helps tailor your virtual try-on images for a more
        realistic and personalized experience. Without it, the images may appear
        more generic and less reflective of how the clothes would truly fit and
        look on you.
      </Text>
      <Text style={styles.inputLabel}>User Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        keyboardType="default"
        placeholder="John Smith or johnSmith123"
        placeholderTextColor="gray"
      />
      <Text style={styles.inputLabel}>Gender</Text>
      <RNPickerSelect
        pickerProps={{ style: styles.input }}
        style={pickerStyles}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Male", value: 0 },
          { label: "Female", value: 1 },
          { label: "Prefer not to say", value: 3 },
        ]}
      />
      <Text style={styles.inputLabel}>Height</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="ft"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="in"
        placeholderTextColor="gray"
      />
      <Text style={styles.inputLabel}>Weight</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="lb"
        placeholderTextColor="gray"
      />
      <View style={styles.bottomBtns}>
        <TouchableOpacity onPress={saveInfo}>
          <Text style={styles.saveInfoBtn}>Save my info</Text>
        </TouchableOpacity>

        <Link style={styles.skipLink} href="/(tabs)/home">
          Skip
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
  header: {
    marginTop: "16%",
    fontSize: 24,
  },
  textBlob: {
    marginTop: "12%",
    marginBottom: "16%",
    marginHorizontal: "12%",
    textAlign: "center",
  },
  inputLabel: {
    alignSelf: "baseline",
    fontSize: 14,
    marginBottom: 12,
  },
  dropdown: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    color: "gray",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bottomBtns: {
    width: "88%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "12%",
  },
  saveInfoBtn: {
    textDecorationLine: "underline",
  },
  skipLink: {
    textDecorationLine: "underline",
    color: "blue",
  },
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // To ensure text is not hidden behind the icon
    backgroundColor: "#FFFFFF",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#FFFFFF",
  },
});
