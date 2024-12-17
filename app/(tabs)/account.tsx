import React, { useState } from "react";

import StyleSheet, { View } from "react-native";
import { app, auth } from "@/firebaseConfig";

type Props = {};
export default function AccountScreen({}: Props) {
  console.log(auth.currentUser?.email);
  return auth.currentUser?.email;
}

// const styles = StyleSheet.create({});
