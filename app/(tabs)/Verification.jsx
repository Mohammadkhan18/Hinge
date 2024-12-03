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
import PhoneNumberInput from "../../components/PhoneNumberInput";

const Verification = ({ navigation }) => {
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
        <Icon name="shield" size={40} color="#000" />
      </View>

      <Text style={[styles.title,{ fontFamily: "Poppins_700Bold" }]}>Enter Your Verification Code</Text>

      <Text style={[styles.helperText,{ fontFamily: "Poppins_400Regular" }]}>
        Your Number.<Text style={styles.navigationHint}>Edit</Text>
      </Text>

      <View style={styles.phoneInputContainer}>
        <PhoneNumberInput/>
      </View>
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => router.push("/")}      >
        <Icon name="arrow-right" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Verification;

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
    alignItems:"center",
    marginTop: 30,
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  countryCode: {
    fontSize: 22,
    color: "#000",
    marginLeft: 5,
  },
  phoneInput: {
    flex: 1,
    fontSize: 18,
    color: "#000",
    paddingVertical: 5,
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
    marginStart:30
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
