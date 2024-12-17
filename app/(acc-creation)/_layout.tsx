import { Stack, useSegments, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function CreationLayout() {
  return (
    <Stack>
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="additional-info" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = "";
