import {createStackNavigator} from '@react-navigation/stack';
import ExploreScreen from '../../screens/explore/ExploreScreen';
// import Explore from '../../screens/explore/Explore';
// import ChatScreen from '../../screens/chat/ChatScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ExploreScreen} />
        {/* <Stack.Screen name="chat" component={ChatScreen} /> */}
        {/* <Stack.Screen name="Profile" component={Explore} />
        <Stack.Screen name="Settings" component={ChatScreen} /> */}
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
