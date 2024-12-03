import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";
import { Poppins_400Regular,
  Poppins_300Regular,
  Poppins_200Regular, 
  Poppins_700Bold,
  Poppins_200Bold,
  Poppins_300Bold,
  Poppins_400Bold,
  Poppins_500Bold,
  Poppins_600Bold, } from "@expo-google-fonts/poppins";
const SignInPage = () => {
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
      <View style={styles.centerContent}>
      <Text style={[styles.logo, { fontFamily: "Poppins_700Bold" }]}>Plenty Of Fish</Text>
      <Text style={[styles.tagline, { fontFamily: "Poppins_700Bold" }]}>
          Designed to be deleted.
        </Text>
      </View>
      <View style={styles.bottomContent}>
        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.iconButton}>
            <Icon name="google" size={20} color="#000" style={styles.icon} />
            <Text style={[styles.googleText,{ fontFamily: "Poppins_200Regular" }]}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.phoneButton}>
          <View style={styles.iconButton}>
            <Icon name="phone" size={20} color="#fff" style={styles.icon} />
            <Text style={[styles.phoneText,{ fontFamily: "Poppins_200Regular" }]}>Sign in with Number</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/")} style={styles.linkButton}>
          <Text style={[styles.linkText,{ fontFamily: "Poppins_200Regular" }]}>Back</Text>
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
    color: "#fff",
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
  googleButton: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 100,
    marginBottom: 10,
  },
  googleText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
  phoneButton: {
    backgroundColor: "#7A3DB8",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 100,
    marginBottom: 10,
  },
  phoneText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SignInPage;
