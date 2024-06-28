import AuthNavigator from "@/navigation/auth/AuthNavigator";
import AppStackNavigation from "@/navigation/stack/AppStackNavigation";
import { useTheme } from "@/theme";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const MainAppContainer = () => {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const { navigationTheme } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <NavigationContainer theme={navigationTheme}>
        {/* <AppStackNavigation /> */}
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
};

export default MainAppContainer;
