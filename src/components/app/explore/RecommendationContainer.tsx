import { View, Text, Pressable } from "react-native";
import React from "react";
import Heading from "@/components/ui/view/Heading";
import AppText from "@/components/ui/view/AppText";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const RecommendationContainer = () => {
  return (
    <Container>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Heading>Recommendations</Heading>
        <Pressable onPress={() => {}}>
          <AppText>View All</AppText>
        </Pressable>
      </View>
    </Container>
  );
};

export default RecommendationContainer;
