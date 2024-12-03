import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import { Poppins_400Regular,
  Poppins_300Regular,
  Poppins_200Regular, 
  Poppins_700Bold,
  Poppins_200Bold,
  Poppins_300Bold,
  Poppins_400Bold,
  Poppins_500Bold,
  Poppins_600Bold, } from "@expo-google-fonts/poppins";
import { Video } from "expo-av";
import { useRouter } from "expo-router";

const LandingPage = () => {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_300Regular,
    Poppins_200Regular,
    Poppins_200Bold,
    Poppins_300Bold,
    Poppins_400Bold,
    Poppins_500Bold,
    Poppins_600Bold,
    Poppins_700Bold,
  });
  return (
    <View style={styles.container}>
      {/* Background video with reduced opacity */}
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: "https://cdn.pixabay.com/video/2023/01/25/147899-792811391_large.mp4" }}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
          shouldPlay
          isLooping
        />
        <View style={styles.videoOverlay} />
      </View>

      {/* Centered Logo and Tagline */}
      <View style={styles.centerContent}>
       <Text style={[styles.logo, { fontFamily: "Poppins_700Bold" }]}>Plenty Of Fish</Text>
        <Text style={[styles.tagline, { fontFamily: "Poppins_700Bold" }]}>
          Designed to be deleted.
        </Text>
      </View>

      {/* Bottom Content: Terms, Buttons */}
      <View style={styles.bottomContent}>
        <Text style={[styles.terms, { fontFamily: "Poppins_300Regular" }]}>
          By tapping Sign in or Create account, you agree to our Terms of Service. Learn how we process your data in our Privacy Policy and Cookies Policy.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("(tabs)/SignUpPage")}
        >
          <Text style={[styles.buttonText, { fontFamily: "Poppins_200Regular" }]}>
            Create account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("(tabs)/SignInPage")}
          style={styles.linkButton}
        >
          <Text style={[styles.linkText, { fontFamily: "Poppins_200Regular" }]}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  videoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
   fontSize: 40,
   color:"#fff",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 30,
  },
  bottomContent: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
  },
  terms: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#7A3DB8",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 100,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default LandingPage;
