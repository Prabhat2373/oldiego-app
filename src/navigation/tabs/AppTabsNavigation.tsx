import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import { TabRoutes } from "../routes/appRoutes";
import { useTheme } from "@/theme";
import AppText from "@/components/ui/view/AppText";

const AppTabsNavigation = () => {
  const Tab = createBottomTabNavigator();
  const { colors, fonts } = useTheme();
  return (
    <Tab.Navigator>
      {TabRoutes.map((tab) => {
        return (
          <Tab.Screen
            name={tab.label}
            component={tab.component}
            key={tab.route}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <tab.icon color={focused ? colors.primary : colors.gray100} />
                );
              },
              tabBarLabel(props) {
                return (
                  <AppText
                    style={{
                      color: props.focused ? colors.primary : colors.gray100,
                      fontSize: fonts.size_12.fontSize,
                    }}
                  >
                    {tab.label}
                  </AppText>
                );
              },
              tabBarStyle: { height: 60, paddingBottom: 8, paddingTop: 8 },
            }}
          />
        );
      })}
      {/* <Tab.Screen name="Home" component={ExploreScreen} />
        <Tab.Screen name="Settings" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
};

export default AppTabsNavigation;
