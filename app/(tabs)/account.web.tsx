import React, { useEffect, useState } from "react";

import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { auth, db } from "@/firebaseConfig.web";

type Props = {};
const DATA = [{}];
export default function AccountScreen({}: Props) {
  const [activeSelector, setActiveSelector] = useState(0);

  useEffect(() => {
    console.log(activeSelector);
  }, [activeSelector]);

  return (
    <View style={styles.container}>
      {/* Profile Info */}
      <View style={styles.profileView}>
        <View style={styles.imgPlaceholder} />
        <View>
          <Text>Profile Name</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>Followers</Text>
            <Text>Following</Text>
          </View>

          <TouchableOpacity onPress={() => console.log("pressed")}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
      {/* Item list selectors */}
      <View style={styles.listSelectorView}>
        <TouchableOpacity
          style={[
            styles.selector,
            activeSelector === 0 ? styles.activeSelector : null,
          ]}
          onPress={() => setActiveSelector(0)}
        >
          <Text>Storefront</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.selector,
            activeSelector === 1 ? styles.activeSelector : null,
          ]}
          onPress={() => setActiveSelector(1)}
        >
          <Text>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.selector,
            activeSelector === 2 ? styles.activeSelector : null,
          ]}
          onPress={() => setActiveSelector(2)}
        >
          <Text>Purchases</Text>
        </TouchableOpacity>
      </View>
      {/* List scroll view */}
      <ScrollView>
        {DATA.map((item) => {
          return <View></View>;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  profileView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: "12%",
  },
  listSelectorView: { flexDirection: "row", justifyContent: "center" },
  selector: {
    paddingHorizontal: "8%",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  imgPlaceholder: {
    width: 96,
    aspectRatio: 1,
    overflow: "hidden",
    backgroundColor: "gray",
    borderRadius: "100%",
  },
  activeSelector: { borderBottomColor: "black" },
  listScrollView: {},
  listItem: {},
});
