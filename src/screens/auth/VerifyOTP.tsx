import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import {
  BottomSheet,
  IBottomSheetRef,
} from "@/components/ui/drawer/BottomDrawer";
import Input from "@/components/ui/form/Input";
import OTPInput from "@/components/ui/form/OTPInput";
import Heading from "@/components/ui/view/Heading";
import TranslateText from "@/components/ui/view/TranslateText";
import { useLazyGetTestQuery } from "@/services/testApi";
import { useLoginMutation } from "@/services/user/userApi";
import { useTheme } from "@/theme";
import { loginValidation } from "@/validators/auth/auth.validator";
import { IconLock } from "@tabler/icons-react-native";
import { Formik } from "formik";
import i18next from "i18next";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

const VerifyOTP = ({ navigation }) => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const bottomSheetRef = React.useRef<IBottomSheetRef>(null);
  const { t } = useTranslation();
  const { colors, fonts } = useTheme();
  const [login, { isLoading }] = useLoginMutation();
  const onChangeLanguage = (lang: "fr" | "en") => {
    void i18next.changeLanguage(lang);
  };

  const [getApi, { data, isFetching }] = useLazyGetTestQuery();

  const initialValues = useMemo(() => {
    return {
      otp: "",
    };
  }, []);

  const handleVerifyOtp = async (data: typeof initialValues) => {
    console.log("submitting", data);
    const res = await login(data);
    console.log("apires", res);
    // if(issuccess)
  };
  return (
    <>
      <Container>
        {/* <View style={styles.container}>
          <Button
            onPress={() => bottomSheetRef.current?.expand()}
            variant="default"
          >
            <Text>Show</Text>
          </Button>
        </View> */}

        <View>
          <Formik
            initialValues={initialValues}
            onSubmit={handleVerifyOtp}
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
                        <TranslateText>reset_password_heading</TranslateText>
                      </Heading>

                      <Text style={{ color: colors.gray200 }}>
                        Reset Your Password From Below!
                      </Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      <OTPInput
                        length={6}
                        onComplete={(otp) => console.log("otp", otp)}
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
                      <Input
                        icon={<IconLock color={colors.gray200} />}
                        error={errors?.password}
                        label="Confirm Password"
                        isPassword
                        id="password_confirm"
                        value={values?.password_confirm}
                        onChangeText={handleChange("password_confirm")}
                      />
                    </View>
                  </View>
                  <View style={[styles.social_auth_container]}>
                    <Button onPress={handleSubmit}>Reset</Button>
                  </View>
                </View>
              );
            }}
          </Formik>
        </View>
      </Container>
      {/* <BottomSheet ref={bottomSheetRef}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere amet
          eum alias asperiores, incidunt magni unde vero, aut deleniti
          accusantium ipsa aliquam magnam doloribus sequi! Nostrum cupiditate
          enim laborum doloribus dolores nesciunt? Voluptatibus, non, maiores
          laudantium, sed aperiam ab doloribus voluptas animi cum magni odit
          laborum repellat at rerum ducimus eius consequuntur! Quidem, ut
          dolorum! Esse sapiente voluptatum illo perferendis. Voluptas aliquam
          eius, vero nobis perspiciatis ipsum sit voluptatem nostrum beatae ea
          totam ex similique est a. Consequatur repellat excepturi sequi minus.
          Repudiandae, esse laboriosam alias iste ipsa amet eligendi sit
          voluptates minima autem similique ut quod ratione totam aliquam?
        </Text>
      </BottomSheet> */}
    </>
  );
};

export default VerifyOTP;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
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
    paddingTop: 100,
    // marginTop: 40,
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
