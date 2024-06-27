import React from "react";
import { View } from "react-native";
import AppTabsNavigation from "../navigation/tabs/AppTabsNavigation";
// import AppTabsNavigation from '../navigation/tabs/AppTabsNavigation';

const Parent = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppTabsNavigation />
    </View>
  );
};

export default Parent;
