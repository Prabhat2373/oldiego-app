import AuthNavigator from "@/navigation/auth/AuthNavigator";
import AppStackNavigation from "@/navigation/stack/AppStackNavigation";
import { store } from "@/redux/store";
import { useTheme } from "@/theme";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Provider } from "react-redux";

const MainAppContainer = () => {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const { navigationTheme } = useTheme();

  console.log("navigationTheme", navigationTheme);
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
          }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
          <NavigationContainer theme={navigationTheme}>
            <AppStackNavigation />
            {/* <AuthNavigator /> */}
          </NavigationContainer>
        </KeyboardAvoidingView>
      </Provider>
    </>
  );
};

export default MainAppContainer;
