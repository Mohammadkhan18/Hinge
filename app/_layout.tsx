import React from "react";
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

const Layout = () => {
  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)/LandingPage" options={{ title: "Landing Page" }} />
        <Stack.Screen name="(tabs)/SignInPage" options={{ title: "Sign In Page" }} />
        <Stack.Screen name="(tabs)/SignUpPage" options={{ title: "Sign Up Page" }} />
        <Stack.Screen name="(tabs)/Verification" options={{ title: "Verification Of Number" }} />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background
  },
});

export default Layout;
