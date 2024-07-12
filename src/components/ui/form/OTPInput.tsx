import { useTheme } from "@/theme";
import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

interface OTPInputProps {
  length: 4 | 6;
  onComplete: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef<TextInput[]>([]);

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      width: 40,
      height: 40,
      borderWidth: 1,
      borderColor: "#000",
      textAlign: "center",
      fontSize: 18,
      borderRadius: 5,
      marginHorizontal: 5,
    },
  });

  const handleChangeText = (text: string, index: number) => {
    if (text.length > 1) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    if (newOtp.every((val) => val !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          enterKeyHint="next"
          autoComplete="one-time-code"
          key={index}
          value={digit}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          ref={(ref) => (inputs.current[index] = ref as TextInput)}
        />
      ))}
    </View>
  );
};

export default OTPInput;
