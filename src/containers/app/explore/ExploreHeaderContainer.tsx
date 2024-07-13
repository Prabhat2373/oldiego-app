import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  IconBell,
  IconLocation,
  IconMapPin,
  IconNotification,
} from "@tabler/icons-react-native";
import { useTheme } from "@/theme";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const ExploreHeaderContainer = () => {
  const { colors, fonts } = useTheme();
  return (
    <Container>
      <View style={styles.container}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 8,
          }}
        >
          <View>
            <Button
              centerIcon={<IconMapPin color={colors.gray800} />}
              variant="icon"
            ></Button>
          </View>
          <View>
            <Text style={{ color: colors.gray200 }}>Location</Text>
            <Text
              style={{
                color: colors.gray800,
                fontWeight: fonts.bold.fontWeight,
              }}
            >
              San Fransisco
            </Text>
          </View>
        </View>
        <View>
          <Button
            variant="icon"
            centerIcon={<IconBell color={colors.gray800} />}
          >
            <IconBell color={colors.gray800} />
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default ExploreHeaderContainer;

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
