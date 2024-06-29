import { View, Text, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import Heading from "@/components/ui/view/Heading";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/form/Input";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme";
import i18next from "i18next";
import TranslateText from "@/components/ui/view/TranslateText";
import { useLazyGetTestQuery } from "@/services/testApi";
import { Form, Formik } from "formik";
import { signUpValidation } from "@/validators/auth/auth.validator";
import { IconBrandGoogle } from "@tabler/icons-react-native";

const SignUp = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const onChangeLanguage = (lang: "fr" | "en") => {
    void i18next.changeLanguage(lang);
  };

  const [getApi, { data, isFetching }] = useLazyGetTestQuery();

  const initialValues = useMemo(() => {
    return {
      email: "",
      name: "",
      password: "",
    };
  }, []);

  const handleSignup = async (data: typeof initialValues) => {
    console.log("submitting", data);
  };
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSignup}
        validationSchema={signUpValidation}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          return (
            <>
              <View
                style={[
                  styles.heading_container,
                  {
                    backgroundColor: colors.background_primary,
                  },
                ]}
              >
                <Heading size={32}>
                  <TranslateText>signup</TranslateText>
                </Heading>
              </View>

              <View style={[styles.inputs_container]}>
                <Input
                  error={errors?.name}
                  label="Name"
                  id="name"
                  value={values?.name}
                  onChangeText={handleChange("name")}
                />
                <Input
                  error={errors.email}
                  label="Email"
                  id="email"
                  value={values?.email}
                  onChangeText={handleChange("email")}
                />
                <Input
                  error={errors?.password}
                  label="Password"
                  isPassword
                  id="password"
                  value={values?.password}
                  onChangeText={handleChange("password")}
                />
              </View>
              <View style={[styles.social_auth_container]}>
                <Button onPress={handleSubmit}>Sign Up</Button>
                <Button onPress={() => {}} color={colors.foreground_primary}>
                  <Text style={{ color: colors.white }}>
                    <IconBrandGoogle />
                  </Text>{" "}
                  Google
                </Button>
                <Button onPress={() => {}} color={colors.foreground_primary}>
                  Github
                </Button>
              </View>
            </>
          );
        }}
      </Formik>
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

  main_container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  inputs_container: {
    // flex: 1,
    display: "flex",
    gap: 16,
    marginBottom: 20,
  },

  heading_container: {
    // flex: 1,
    // display: "flex",

    // gap: 12,
    marginTop: 90,
  },
});
