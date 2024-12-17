import { View, Text } from "react-native";
import React, { Fragment } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <Fragment>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="shopping-cart" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </Fragment>
  );
}
