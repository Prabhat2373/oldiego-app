import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {TabRoutes} from '../routes/appRoutes';

const AppTabsNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View>
      <Tab.Navigator>
        {TabRoutes.map(tab => {
          return <Tab.Screen name={tab.label} component={tab.component} />;
        })}
        {/* <Tab.Screen name="Home" component={ExploreScreen} />
        <Tab.Screen name="Settings" component={ProfileScreen} /> */}
      </Tab.Navigator>
    </View>
  );
};

export default AppTabsNavigation;
