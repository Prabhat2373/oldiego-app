import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import { useTheme } from "@/theme";

interface Props extends TextInputProps {
  label?: string;
}
const Input = ({ label, ...props }: Props) => {
  const { fonts, colors, backgrounds } = useTheme();
  return (
    <View>
      <Text>{label || ""}</Text>
      <TextInput {...props} style={{ backgroundColor: "gray" }} />
    </View>
  );
};

export default Input;
