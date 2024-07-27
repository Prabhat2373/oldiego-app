import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import AppText from "../view/AppText";
import { useTheme } from "@/theme";

interface IMoney {
  children: ReactNode;
}

const Money = ({ children }: IMoney) => {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text_primary }}>${children}</Text>;
};

export default Money;
