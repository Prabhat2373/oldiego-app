import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Heading from "@/components/ui/view/Heading";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/form/Input";
import Button from "@/components/ui/Button";

const SignUp = () => {
  return (
    <Container>
      <View style={[styles.heading_container]}>
        <Heading size={32}> Sign Up</Heading>
      </View>
      <View style={[styles.inputs_container]}>
        <Input label="Email" />
        <Input label="Email" />
        <Input label="Email" />
      </View>
      <View style={[styles.social_auth_container]}>
        <Button onPress={() => {}} title="Sign Up"></Button>
        <Button onPress={() => {}} title="Google "></Button>
        <Button onPress={() => {}} title="Github"></Button>
      </View>
    </Container>
  );
};

export default SignUp;

export const styles = StyleSheet.create({
  social_auth_container: {
    // flex: 1,
    display: "flex",
    gap: 12,
  },

  inputs_container: {
    // flex: 1,
    display: "flex",
    gap: 12,
    marginBottom: 20,
  },

  heading_container: {
    // flex: 1,
    // display: "flex",

    // gap: 12,
    marginTop: 12,
  },
});
