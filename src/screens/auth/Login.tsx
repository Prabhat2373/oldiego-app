import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/form/Input";
import Heading from "@/components/ui/view/Heading";
import TranslateText from "@/components/ui/view/TranslateText";
import { useLazyGetTestQuery } from "@/services/testApi";
import { useLoginMutation } from "@/services/user/userApi";
import { useTheme } from "@/theme";
import { loginValidation } from "@/validators/auth/auth.validator";
import {
  IconBrandApple,
  IconBrandGoogle,
  IconLock,
  IconMail,
} from "@tabler/icons-react-native";
import { Formik } from "formik";
import i18next from "i18next";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

const Login = ({ navigation }) => {
  const { t } = useTranslation();
  const { colors, fonts } = useTheme();
  const [login, { isLoading }] = useLoginMutation();
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

  const handleLogin = async (data: typeof initialValues) => {
    console.log("submitting", data);
    const res = await login(data);
    console.log("apires", res);
    // if(issuccess)
  };
  return (
    <Container>
      <View>
        <Formik
          initialValues={initialValues}
          onSubmit={handleLogin}
          validationSchema={loginValidation}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ values, errors, handleChange, handleSubmit, touched }) => {
            return (
              <View style={styles.main_container}>
                <View style={[styles.inputs_container]}>
                  <View
                    style={[
                      styles.heading_container,
                      {
                        backgroundColor: colors.background_primary,
                      },
                    ]}
                  >
                    <Heading size={24}>
                      <TranslateText>sign_in_to_oldiego</TranslateText>
                    </Heading>

                    <Text style={{ color: colors.gray200 }}>
                      Welcome back! Please enter your details
                    </Text>
                  </View>
                  {/* <Input
                    icon={<IconUser color={colors.gray200} />}
                    error={errors?.name}
                    label="Name"
                    id="name"
                    value={values?.name}
                    onChangeText={handleChange("name")}
                  /> */}
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
                  <View>
                    <Text
                      style={{
                        color: colors.gray200,
                        fontSize: fonts.size_16.fontSize,
                      }}
                    >
                      Forgot Password?{" "}
                      <Text
                        onPress={() => {
                          navigation.navigate("reset-password");
                        }}
                        style={{
                          color: colors.primary,
                          fontWeight: fonts.bold.fontWeight,
                        }}
                      >
                        Reset it
                      </Text>
                    </Text>
                  </View>

                  <View style={[styles.social_auth_container]}>
                    <Button onPress={handleSubmit}>Sign In</Button>
                    <Button
                      startIcon={
                        <IconBrandGoogle color={colors.text_primary} />
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
                      <TranslateText>sign_in_with_google</TranslateText>
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
                      <TranslateText>sign_in_with_apple</TranslateText>
                    </Button>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // marginTop: 100,
                  }}
                >
                  <Text
                    style={{
                      color: colors.gray800,
                      fontSize: fonts.size_16.fontSize,
                    }}
                  >
                    Don't Have an Account?{" "}
                    <Text
                      onPress={() => {
                        navigation.navigate("signup");
                      }}
                      style={{
                        color: colors.primary,
                        fontWeight: fonts.bold.fontWeight,
                      }}
                    >
                      Sign Up
                    </Text>
                  </Text>
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
    </Container>
  );
};

export default Login;

export const styles = StyleSheet.create({
  social_auth_container: {
    // flex: 1,
    display: "flex",
    gap: 12,
  },

  main_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    paddingVertical: 20,
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
    marginTop: 40,
    marginBottom: 30,
  },
});
