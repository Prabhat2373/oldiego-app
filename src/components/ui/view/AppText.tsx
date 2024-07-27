import { View, Text, TextProps } from "react-native";
import React, { ReactNode } from "react";
import { useTheme } from "@/theme";
import TranslateText from "./TranslateText";

interface IAppText extends TextProps {
  children: ReactNode;
}

const AppText = (props: IAppText) => {
  const { colors } = useTheme();
  return (
    <Text style={[{ color: colors.gray100 }, props?.style]} {...props}>
      {props?.children}
    </Text>
  );
};

export default AppText;
