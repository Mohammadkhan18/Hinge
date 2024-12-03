import React, { useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState(Array(6).fill("")); // Store digits as an array
  const inputsRef = Array(6)
    .fill()
    .map(() => useRef(null)); // Refs for each input field

  const handleInputChange = (text, index) => {
    if (text.length > 1) {
      return; // Prevent entering more than one digit
    }

    const updatedPhoneNumber = [...phoneNumber];
    updatedPhoneNumber[index] = text;
    setPhoneNumber(updatedPhoneNumber);

    // Automatically move to the next field if text is entered
    if (text && index < 5) {
      inputsRef[index + 1].current.focus();
    }

    // Handle backspace (focus on the previous input if empty)
    if (!text && index > 0) {
      inputsRef[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {phoneNumber.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputsRef[index]}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleInputChange(text, index)}
          />
        ))}
      </View>
    </View>
  );
};

export default PhoneNumberInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    width: 40,
    height: 50,
    marginHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    textAlign: "center",
    fontSize: 25,
    color: "#000",
    backgroundColor: "#fff",
  },
});
