import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignUp from "../../screens/auth/SignUp";
import Login from "../../screens/auth/Login";
import ResetPassword from "@/screens/auth/ResetPassword";
import VerifyOTP from "@/screens/auth/VerifyOTP";

const AuthNavigator = () => {
  const Auth = createNativeStackNavigator();
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="verify-otp"
        component={VerifyOTP}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="signup"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="reset-password"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
