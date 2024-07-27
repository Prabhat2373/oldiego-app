import { View, Text, Image } from "react-native";
import React from "react";
import Avatar from "../avatar/Avatar";
import AppText from "../view/AppText";
import { useTheme } from "@/theme";
import Money from "../app/Money";
import { IconHeart, IconMapPin } from "@tabler/icons-react-native";
import Button from "../Button";

const ProductListCard = () => {
  const { colors, fonts } = useTheme();
  return (
    <View
      style={{
        borderColor: colors.border_foreground,
        borderWidth: 1,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: 12,
        borderRadius: 12,
        marginVertical: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Avatar name="Prabhat Tambe" />
          <AppText>Prabhat Tambe</AppText>
        </View>
        <View>
          <Button variant="ghost">
            <IconHeart color={colors.gray100} />
          </Button>
        </View>
      </View>
      <View>
        <View
          style={{
            backgroundColor: colors.primary,
            width: "100%",
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            // height: 200,
            height={200}
          />
        </View>
      </View>
      <View style={{ display: "flex", gap: 5, marginTop: 10 }}>
        <AppText>
          {/* <Money >1400</Money> */}
          <AppText style={{ fontSize: fonts.size_16.fontSize }}>$1400</AppText>
        </AppText>
        <AppText>MacBook air 13 inch new </AppText>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Text>
            <IconMapPin color={colors.gray800} size={16} />
          </Text>
          <AppText style={{ color: colors.gray800 }}>San Fransisco</AppText>
        </View>
      </View>
    </View>
  );
};

export default ProductListCard;
