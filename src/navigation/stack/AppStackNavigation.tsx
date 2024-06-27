import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import StackNavigationHeader from "../../components/navigation/stack/StackNavigationHeader";
import { StackRoutes } from "../routes/appRoutes";
import { useTheme } from "@/theme";
// import StackNavigationHeader from '../../components/navigation/stack/StackNavigationHeader';

const stack = createNativeStackNavigator();
const AppStackNavigation = () => {
  const { variant, navigationTheme } = useTheme();
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      {StackRoutes.map((route) => {
        return (
          <stack.Screen
            name={route.name}
            component={route.component}
            options={{
              headerShown: false,
              // header: ({ navigation, options, route, back }) => {
              //   return (
              //     <StackNavigationHeader
              //       showBackButton={true}
              //       showAvatar={true}
              //       title={route && route && route?.params?.seller?.name}
              //       onBackPress={() => {
              //         navigation.goBack();
              //       }}
              //     />
              //   );
              // },
            }}
          />
        );
      })}
    </stack.Navigator>
  );
};

export default AppStackNavigation;
