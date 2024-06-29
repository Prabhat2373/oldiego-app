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
import {
  IconBrandApple,
  IconBrandGithub,
  IconBrandGoogle,
  IconLock,
  IconMail,
  IconRecordMail,
  IconUser,
} from "@tabler/icons-react-native";

const SignUp = ({ navigation }) => {
  const { t } = useTranslation();
  const { colors, fonts } = useTheme();
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
      <View
        style={{
          height: 200,
        }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSignup}
          validationSchema={signUpValidation}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ values, errors, handleChange, handleSubmit, touched }) => {
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
                  <Heading size={24}>
                    <TranslateText>signup</TranslateText>
                  </Heading>
                </View>

                <View style={[styles.inputs_container]}>
                  <Input
                    icon={<IconUser color={colors.gray200} />}
                    error={errors?.name}
                    label="Name"
                    id="name"
                    value={values?.name}
                    onChangeText={handleChange("name")}
                  />
                  <Input
                    icon={<IconMail color={colors.gray200} />}
                    error={errors.email}
                    label="Email"
                    id="email"
                    value={values?.email}
                    onChangeText={handleChange("email")}
                  />
                  <Input
                    icon={<IconLock color={colors.gray200} />}
                    error={errors?.password}
                    label="Password"
                    isPassword
                    id="password"
                    value={values?.password}
                    onChangeText={handleChange("password")}
                  />
                </View>
                <View style={{ marginVertical: 20 }}>
                  <Text
                    style={{
                      fontSize: fonts.size_16.fontSize,
                      color: fonts.gray200.color,
                    }}
                  >
                    By Signing Up, You agree to our{" "}
                    <Text style={{ color: colors.primary }}>
                      Terms and Conditions
                    </Text>{" "}
                    and{" "}
                    <Text style={{ color: colors.primary }}>
                      Privacy Policy
                    </Text>
                  </Text>
                </View>
                <View style={[styles.social_auth_container]}>
                  <Button onPress={handleSubmit}>Sign Up</Button>
                  <Button
                    startIcon={<IconBrandGoogle color={colors.text_primary} />}
                    onPress={() => {}}
                    variant="outline"
                    color={colors.foreground_primary}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <TranslateText>sign_up_with_google</TranslateText>
                  </Button>
                  {/* <Button
                  startIcon={
                    <IconBrandGithub
                      fill={colors.text_primary}
                      color={colors.text_primary}
                    />
                  }
                  onPress={() => {}}
                  variant="outline"
                  color={colors.foreground_primary}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <TranslateText>sign_up_with_github</TranslateText>
                </Button> */}
                  <Button
                    onPress={() => {}}
                    color={colors.foreground_primary}
                    variant="outline"
                    // style={{
                    //   borderColor: colors.primary,
                    // }}
                    startIcon={
                      <IconBrandApple
                        fill={colors.text_primary}
                        color={colors.text_primary}
                      />
                    }
                  >
                    <TranslateText>sign_up_with_apple</TranslateText>
                  </Button>
                </View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 100,
                  }}
                >
                  <Text
                    style={{
                      color: colors.gray200,
                      fontSize: fonts.size_16.fontSize,
                    }}
                  >
                    Don't Have an Account?{" "}
                    <Text
                      onPress={() => {
                        navigation.navigate("login");
                      }}
                      style={{
                        color: colors.primary,
                        fontWeight: fonts.bold.fontWeight,
                      }}
                    >
                      Sign In
                    </Text>
                  </Text>
                </View>
              </>
            );
          }}
        </Formik>
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
    marginBottom: 40,
  },
});
