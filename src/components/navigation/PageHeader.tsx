import { View, Text, Pressable } from "react-native";
import React from "react";
import { IconArrowNarrowLeft } from "@tabler/icons-react-native";
import { useTheme } from "@/theme";
import Button from "../ui/Button";
import { useNavigation } from "@react-navigation/native";

interface IPageHeader {
  heading: string;
  nav: string;
}

const PageHeader = ({ heading, nav }: IPageHeader) => {
  const { colors, fonts } = useTheme();
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        paddingVertical: 20,
      }}
    >
      <Pressable
        onPress={() => {
          navigate?.(nav);
        }}
        // style={{ padding: 10 }}
      >
        <IconArrowNarrowLeft color={colors.gray200} size={30} />
      </Pressable>
      <Text
        style={{ color: colors.gray800, fontWeight: fonts.bold.fontWeight }}
      >
        {heading}
      </Text>
      <View></View>
    </View>
  );
};

export default PageHeader;
