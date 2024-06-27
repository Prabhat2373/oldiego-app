import { useTheme } from "@/theme";
import { config } from "@/theme/_config";
import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  PressableProps,
  TextStyle,
  ViewStyle,
} from "react-native";

interface ButtonProps extends PressableProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
  ...props
}) => {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.purple100 : colors.primary,
        },
        styles.button,
        style,
      ]}
      {...props}
    >
      <Text style={[styles.text, textStyle, { color: colors.text_primary }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
