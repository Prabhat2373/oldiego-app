import React, { ReactNode } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { useTheme } from "@/theme";

interface BadgeProps {
  children: ReactNode;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  size?: "small" | "medium" | "large";
  variant?: "solid" | "outline" | "ghost"; // Added variant prop
}

const Badge: React.FC<BadgeProps> = ({
  children,
  color,
  backgroundColor,
  style,
  textStyle,
  size = "medium",
  variant = "solid", // Default variant
}) => {
  const { colors, fonts } = useTheme();

  // Define styles based on variant
  const variantStyles = {
    solid: {
      backgroundColor: backgroundColor || colors.primary,
      borderWidth: 0,
    },
    outline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: backgroundColor || colors.primary,
    },
    ghost: {
      backgroundColor: "transparent",
      borderWidth: 0,
    },
  };

  const badgeStyles = [
    styles.badge,
    variantStyles[variant],
    sizeStyles[size],
    style,
  ];

  const badgeTextStyles = [
    styles.text,
    {
      color:
        variant === "solid" ? color || colors.white : color || colors.primary,
      fontSize: fonts.size_16.fontSize,
    },
    textStyle,
  ];

  return (
    <View style={badgeStyles}>
      <Text style={badgeTextStyles}>{children}</Text>
    </View>
  );
};

const sizeStyles = StyleSheet.create({
  small: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  medium: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  large: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
});

const styles = StyleSheet.create({
  badge: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  text: {
    fontWeight: "bold",
  },
});

export default Badge;
