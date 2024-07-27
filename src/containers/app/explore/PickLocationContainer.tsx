import { View, Text } from "react-native";
import React from "react";
import {
  IconArrowNarrowLeft,
  IconChevronRight,
  IconMapPin,
} from "@tabler/icons-react-native";
import { useTheme } from "@/theme";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/form/Input";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/navigation/PageHeader";
import { useNavigation } from "@react-navigation/native";
import { APP_ROUTES } from "@/constants/route.constant";

const PickLocationContainer = () => {
  const { colors, fonts } = useTheme();
  const { navigate } = useNavigation();
  return (
    <Container>
      <PageHeader heading="Choose Your Location" nav={APP_ROUTES.EXPLORE} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "90%",
        }}
      >
        <View style={{ display: "flex", flexDirection: "column", gap: 23 }}>
          <View>
            <Input
              // label="tets"
              withFloatingLabel={false}
              placeholder="Search Location..."
              icon={<IconMapPin color={colors.gray200} />}
            />
          </View>
          <View>
            <View
              style={{
                height: 200,
                width: "100%",
                borderColor: colors.gray200,
                borderWidth: 2,
                borderRadius: 12,
              }}
            >
              <Text>MAP Component</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                borderColor: colors.foreground_primary,
                borderWidth: 1,
                padding: 20,
                borderRadius: 16,
              }}
            >
              <View style={{ display: "flex", flexDirection: "row", gap: 16 }}>
                <View
                  style={{
                    padding: 12,
                    backgroundColor: colors.foreground_primary,
                    borderRadius: 999,
                  }}
                >
                  <IconMapPin color={colors.gray100} />
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{
                      color: colors.gray100,
                      fontWeight: fonts.bold.fontWeight,
                      fontSize: fonts.size_16.fontSize,
                    }}
                  >
                    Use My Current Location
                  </Text>
                  <Text
                    style={{
                      color: colors.gray200,
                      // fontWeight: fonts.bold.fontWeight,
                      // fontSize: fonts.size_24.fontSize,
                    }}
                  >
                    Jakson Street, New York
                  </Text>
                </View>
              </View>
              <View>
                <Text>
                  <IconChevronRight color={colors.gray200} />
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Button onPress={() => navigate(APP_ROUTES.EXPLORE)}>
            {" "}
            Set Location
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default PickLocationContainer;
