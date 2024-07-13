import { View, Text, ScrollView } from "react-native";
import React from "react";
import Button from "@/components/ui/Button";
import { Icon360 } from "@tabler/icons-react-native";
import { useTheme } from "@/theme";

const CategoriesContainer = () => {
  const { colors } = useTheme();
  return (
    <View>
      <ScrollView style={{}} horizontal>
        <Button variant="outline">
          <Icon360 color={colors.gray200} /> <Text>Sedan</Text>
        </Button>
        <Button variant="outline">
          <Icon360 color={colors.gray200} /> <Text>Hatchback</Text>
        </Button>
      </ScrollView>
    </View>
  );
};

export default CategoriesContainer;
