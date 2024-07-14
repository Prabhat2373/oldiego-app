// import Icon, { Icons } from "../../components/Icon/Icon";
// import Parent from "../../screens/Parent";
// import Splash from "../../screens/Splash";
// import ExploreScreen from "../../screens/explore/ExploreScreen";
// import ProfileScreen from "../../screens/profile/ProfileScreen";

import PickLocation from "@/screens/explore/PickLocation";
import ExploreScreen from "../../screens/explore/ExploreScreen";
import Parent from "../../screens/Parent";
import ProfileScreen from "../../screens/profile/ProfileScreen";

export const StackRoutes = [
  //   {
  //     name: 'splash',
  //     component: Splash,
  //     headerShown: false,
  //     hasCustomHeader: false,
  //     showAvatar: false,
  //   },
  {
    name: "Parent",
    component: Parent,
    label: "Parent",
  },
  {
    name: "home",
    component: ExploreScreen,
    label: "Explore",
  },
  {
    name: "pickLocation",
    component: PickLocation,
    label: "Pick Location",
  },
  {
    name: "profile",
    component: ProfileScreen,
    label: "profile",
  },
];

// export const TabRoutes = [
//   {
//     name: "home",
//     component: ExploreScreen,
//     label: "Explore",
//   },
//   {
//     name: "profile",
//     component: ProfileScreen,
//     label: "profile",
//     level: 2,
//   },
// ];

export const TabRoutes = [
  {
    route: "explore",
    label: "explore",
    // icon: (isActive: boolean) => (
    //   <Icon
    //     type={Icons.MaterialCommunityIcons}
    //     name={isActive ? "compass" : "compass-outline"}
    //     size={30}
    //     color={isActive ? "#000" : "#888"}
    //     style={{}}
    //   />
    // ),
    component: ExploreScreen,
    level: 0,
    isHidden: false,
  },
  {
    route: "search",
    label: "search",
    // icon: (isActive: boolean) => (
    //   <Icon
    //     type={Icons.Ionicons}
    //     name={isActive ? 'search-sharp' : 'search'}
    //     size={30}
    //     color={isActive ? '#000' : '#888'}
    //     style={{}}
    //   />
    // ),
    component: ProfileScreen,
    level: 0,
    isHidden: false,
    // mainIcon: true,
  },
  // {
  //   route: "pick-location",
  //   component: PickLocation,
  //   label: "Pick Location",
  //   isHidden: true,
  // },
  // {
  //   route: "sell",
  //   label: "Sell",
  //   // icon: (isActive: boolean) => (
  //   //   <Icon
  //   //     type={Icons.MaterialCommunityIcons}
  //   //     name={isActive ? 'plus-circle' : 'plus-circle-outline'}
  //   //     size={60}
  //   //     color={isActive ? '#000' : '#888'}
  //   //     style={{}}
  //   //   />
  //   // ),
  //   component: ProfileScreen,
  //   level: 0,
  //   isHidden: false,
  //   mainIcon: false,
  // },

  {
    route: "messages",
    label: "Messages",
    // icon: (isActive: boolean) => (
    //   <Icon
    //     type={Icons.MaterialCommunityIcons}
    //     name={isActive ? 'message-badge' : 'message-badge-outline'}
    //     size={30}
    //     color={isActive ? '#000' : '#888'}
    //   />
    // ),
    component: ProfileScreen,
    level: 0,
    isHidden: false,
    // mainIcon: true,
  },

  {
    route: "profile",
    label: "profile",
    // icon: (isActive: boolean) => (
    //   <Icon
    //     type={Icons.FontAwesome}
    //     name={isActive ? 'user' : 'user-o'}
    //     size={30}
    //     color={isActive ? '#000' : '#888'}
    //   />
    // ),
    component: ProfileScreen,
    isHidden: false,
  },
];
