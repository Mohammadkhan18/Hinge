import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
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

const SignUpPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
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
      <View style={styles.iconContainer}>
        <Icon name="phone" size={40} color="#000" />
      </View>

      <Text style={[styles.title,{ fontFamily: "Poppins_700Bold" }]}>What's your phone number?</Text>

      <View style={styles.phoneInputContainer}>
        <View style={styles.flagContainer}>
          <Icon name="flag" size={20} color="#fff" />
          <Text style={[styles.countryCode,{ fontFamily: "Poppins_500Bold" }]}>+91</Text>
        </View>

        <TextInput
          style={styles.phoneInput}
          keyboardType="numeric"
          placeholder="Enter your phone number"
          placeholderTextColor="#888"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <Text style={styles.helperText}>
        POF will send you a text with a verification code. Message and data rates may apply.
      </Text>

      <Text style={styles.navigationHint}>What if my number changes?</Text>

      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => router.push("(tabs)/Verification")}      >
        <Icon name="arrow-right" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
    color:"#000",
    padding: 20,
  },
  iconContainer: {
    fontSize:10,
    paddingVertical:10,
    paddingHorizontal:15,
    marginTop: 50,
    marginStart:20,
    borderWidth:1,
    borderColor:"#000",
    borderRadius:50,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 35,
    color: "#000",
    marginTop: 20,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    textAlign:"center",
    marginRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  countryCode: {
    fontSize: 25,
    color: "#000",
    marginLeft: 5,
  },
  phoneInput: {
    flex: 1,
    fontSize: 20,
    color: "#000",
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  helperText: {
    color: "#999",
    fontSize: 14,
    marginTop: 10,
  },
  navigationHint: {
    color: "#8A2BE2", 
    fontSize: 14,
    marginTop: 20,
  },
  arrowButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#fff",
    borderWidth:1,
    borderColor:"#000",
    borderRadius:50,
    paddingVertical:15,
    paddingHorizontal:17,
    alignItems: "center",
    justifyContent: "center",
  },
});
