import React, { ReactNode } from "react";
import { Text, TextProps } from "react-native";
import { useTranslation } from "react-i18next";

interface Props extends TextProps {
  children: ReactNode;
}

const TranslateText = ({ children, ...props }: Props) => {
  const { t } = useTranslation();
  return <Text {...props}>{t(children)}</Text>;
};
export default TranslateText;
