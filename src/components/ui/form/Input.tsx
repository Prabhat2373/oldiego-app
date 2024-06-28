import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import { useTheme } from "@/theme";

interface Props extends TextInputProps {
  label?: string;
}
const Input = ({ label, ...props }: Props) => {
  const { fonts, colors, backgrounds } = useTheme();
  return (
    <View style={{ backgroundColor: "#F9FAFC", borderRadius: 8, padding: 8 }}>
      {/* {label && <Text>{label || ""}</Text>} */}
      <TextInput
        // inlineImageLeft="test"

        {...props}
        style={{
          fontSize: fonts.size_24.fontSize,
          color: fonts.gray200.color,
        }}
        placeholder="Enter Here"
      />
    </View>
  );
};

export default Input;
