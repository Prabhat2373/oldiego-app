import { View, Text, TextProps } from "react-native";
import React, { ReactNode } from "react";
import { useTheme } from "@/theme";
import { FontSizes } from "@/types/theme/fonts";
import { sizes } from "@/theme/_config";

type Size = (typeof sizes)[number];
interface IHeading extends TextProps {
  children: ReactNode;
  size?: Size;
}

const Heading = (props: IHeading) => {
  const fontSize = `size_${props?.size}`;
  const {
    colors,
    variant,
    changeTheme,
    layout,
    gutters,
    fonts,
    components,
    backgrounds,
  } = useTheme();
  return (
    <Text
      style={[
        fonts?.[fontSize || "size_24"],
        fonts.gray100,
        gutters.marginBottom_40,
        fonts.bold,
      ]}
    >
      {props.children}
    </Text>
  );
};

export default Heading;
