/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";
import AppStackNavigation from "./navigation/stack/AppStackNavigation";
import { ThemeProvider } from "./theme";
import { MMKV } from "react-native-mmkv";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import StackNavigator from './src/navigations/stack/StackNavigator';
// import AppStackNavigation from './src/navigation/stack/AppStackNavigation';
export const storage = new MMKV();
export const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider storage={storage}>
          <StatusBar
            barStyle={isDarkMode ? "light-content" : "dark-content"}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <NavigationContainer>
            <AppStackNavigation />
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
