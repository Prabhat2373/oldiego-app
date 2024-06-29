import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { useTheme } from "@/theme";

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  const { colors } = useTheme();

  return (
    <View style={{ margin: 20, backgroundColor: colors.background_primary }}>
      <>{children}</>
    </View>
  );
};

export default Container;
