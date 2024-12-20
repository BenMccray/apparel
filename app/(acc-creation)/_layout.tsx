import React from "react";

import { Stack, useSegments, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

export default function CreationLayout() {
  return (
    <Stack>
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="address-info" options={{ headerShown: false }} />
      <Stack.Screen name="profile-info" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = "";
