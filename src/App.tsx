/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { useColorScheme } from "react-native";



import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-native-gesture-handler";
import { MMKV } from "react-native-mmkv";
import MainAppContainer from "./containers/app/MainAppContainer";
import { ThemeProvider } from "./theme";
import "./translations/index";
// import StackNavigator from './src/navigations/stack/StackNavigator';
// import AppStackNavigation from './src/navigation/stack/AppStackNavigation';
export const storage = new MMKV();
export const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  // const { variant, navigationTheme } = useTheme();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider storage={storage}>
          <MainAppContainer />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
