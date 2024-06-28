import { useTheme } from "@/theme";
import { config } from "@/theme/_config";
import React, { ReactNode } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  PressableProps,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
} from "react-native";

interface ButtonProps extends PressableProps {
  onPress: () => void;

  style?: ViewStyle;
  textStyle?: TextStyle;
  children: ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,

  style,
  textStyle,
  children,
  isLoading,
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
      <Text
        style={[
          styles.text,
          textStyle,
          { color: colors.text_primary, display: "flex", alignItems: "center" },
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <>{children}</>
        )}
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
