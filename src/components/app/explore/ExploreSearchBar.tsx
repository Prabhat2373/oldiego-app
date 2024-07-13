import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Input from "@/components/ui/form/Input";
import { IconSearch } from "@tabler/icons-react-native";
import { useTheme } from "@/theme";
import Container from "@/components/ui/Container";

const ExploreSearchBar = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <View>
        <Input
          label="res"
          placeholder="Search ..."
          withFloatingLabel={false}
          icon={<IconSearch color={colors.gray200} />}
        />
      </View>
    </Container>
  );
};

export default ExploreSearchBar;

export const styles = StyleSheet.create({
  container: {},
});
