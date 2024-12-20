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
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

type Props = {};
const DATA = [{}];
export default function AccountScreen({}: Props) {
  const router = useRouter();
  const [activeSelector, setActiveSelector] = useState(0);

  useEffect(() => {
    console.log(activeSelector);
  }, [activeSelector]);

  const handleSignOut = async () => {
    signOut(auth);
    console.log(auth.currentUser);
    router.replace("../sign-in.web");
  };
  return (
    <View style={styles.container}>
      {/* Profile Info */}
      <View style={styles.profileView}>
        <View style={styles.imgPlaceholder} />
        <View>
          <Text>
            {auth.currentUser?.displayName
              ? auth.currentUser?.email
              : "User-" + auth.currentUser?.uid.slice(0, 12) + "..."}
          </Text>
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
          id="listed_items"
          style={[
            styles.selector,
            activeSelector === 0 ? styles.activeSelector : null,
          ]}
          onPress={() => setActiveSelector(0)}
        >
          <Text style={{ textAlign: "center" }}>Storefront</Text>
        </TouchableOpacity>
        <TouchableOpacity
          id="saved_items"
          style={[
            styles.selector,
            activeSelector === 1 ? styles.activeSelector : null,
          ]}
          onPress={() => setActiveSelector(1)}
        >
          <Text style={{ textAlign: "center" }}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity
          id="purchase_items"
          style={[
            styles.selector,
            activeSelector === 2 ? styles.activeSelector : null,
          ]}
          onPress={() => setActiveSelector(2)}
        >
          <Text style={{ textAlign: "center" }}>Purchases</Text>
        </TouchableOpacity>
      </View>
      {/* List scroll view */}
      <ScrollView>
        {DATA.map((item) => {
          return <View></View>;
        })}
      </ScrollView>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
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
  listSelectorView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    paddingHorizontal: "4%",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    width: "31%",
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
