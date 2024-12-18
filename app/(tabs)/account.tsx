import React, { useState } from "react";

import StyleSheet, { View, ScrollView } from "react-native";
import { app, auth, db } from "@/firebaseConfig.web";

type Props = {};
const DATA = [{}];
export default function AccountScreen({}: Props) {
  return (
    <View>
      {/* Profile Info */}
      <View></View>
      {/* Item list selectors */}
      <View></View>
      {/* List scroll view */}
      <ScrollView>
        {DATA.map((item) => {
          return <View></View>;
        })}
      </ScrollView>
    </View>
  );
}

// const styles = StyleSheet.create({});
