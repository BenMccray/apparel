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
import { router } from "expo-router";
// import RNPickerSelect from "react-native-picker-select";
// import DropDownPicker from "react-native-dropdown-picker";

export default function InfoScreen() {
  const [inputType, setInputType] = useState();

  const routeToHome = () => {
    router.replace("../(tabs)/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Additional Information</Text>
      <Text>
        This information helps tailor your virtual try-on images for a more
        realistic and personalized experience. Without it, the images may appear
        more generic and less reflective of how the clothes would truly fit and
        look on you.
      </Text>
      <Text>Gender</Text>
      <TextInput></TextInput>
      <Text>Height</Text>
      <TextInput keyboardType="numeric" />
      <Text>Weight</Text>
      <TextInput keyboardType="numeric" />

      <View>
        <Text>
          Want to add this information later? You can still enjoy a virtual
          try-on experience now, but it may look less personalized. Add your
          details anytime for a more realistic fit and feel!{" "}
        </Text>
        <TouchableOpacity onPress={routeToHome}>
          <Text>Skip</Text>
        </TouchableOpacity>
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
});
