import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import StackNavigationHeader from '../../components/navigation/stack/StackNavigationHeader';
import {StackRoutes} from '../routes/appRoutes';
// import StackNavigationHeader from '../../components/navigation/stack/StackNavigationHeader';

const stack = createNativeStackNavigator();
const AppStackNavigation = () => {
  return (
    <stack.Navigator>
      {StackRoutes.map(route => {
        return (
          <stack.Screen
            name={route.name}
            component={route.component}
            options={{
              headerShown: false,
              header: ({navigation, options, route, back}) => {
                // if (hasCustomHeader) {
                return (
                  <StackNavigationHeader
                    showBackButton={true}
                    showAvatar={true}
                    title={route && route && route?.params?.seller?.name}
                    onBackPress={() => {
                      navigation.goBack();
                    }}
                  />
                );
                // }
                // return (
                //   <Header
                //     hasBack={true}
                //     navigation={navigation}
                //     showAvatar={showAvatar}
                //     title={label}
                //     route={route}
                //     // onBackPress={() => {
                //     //   navigation.goBack();
                //     // }}
                //   />
                // );
              },
            }}
          />
        );
      })}
    </stack.Navigator>
  );
};

export default AppStackNavigation;
