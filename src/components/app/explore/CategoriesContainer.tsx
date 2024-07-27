import { View, Text, ScrollView } from "react-native";
import React from "react";
import Button from "@/components/ui/Button";
import { Icon360 } from "@tabler/icons-react-native";
import { useTheme } from "@/theme";
import Badge from "@/components/ui/Badge";

const CategoriesContainer = () => {
  const { colors } = useTheme();
  const items = [1, 2, 3, 4];
  return (
    <>
      <ScrollView
        bounces
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{
          display: "flex",
          gap: 10,
          flexDirection: "row",
        }}
      >
        {items.map((item) => {
          // return <Text style={{ width: 200 }}> Children {item}</Text>;
          return (
            <View style={{ width: 100, marginHorizontal: 10 }} key={item}>
              <Badge variant="outline" backgroundColor={colors.gray200}>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    flexDirection: "row",
                    gap: 4,
                  }}
                >
                  <Text>
                    <Icon360 color={colors.gray200} />
                  </Text>
                  <Text style={{ color: colors.gray800 }}>Sedan</Text>
                </View>
              </Badge>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default CategoriesContainer;
