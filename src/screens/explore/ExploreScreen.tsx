// // import {View, Text, TouchableOpacity} from 'react-native';
// // import React from 'react';
// // import {useRoute, useNavigation} from '@react-navigation/native';

// // const ExploreScreen = ({navigation}) => {
// //   const router = useRoute();
// //   const nav = useNavigation();
// //   return (
// //     <View>
// //       <Text>ExploreScreen</Text>
// //       <TouchableOpacity onPress={() => navigation.navigate('profile')}>
// //         <Text>Profile</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default ExploreScreen;

// import React, {useEffect} from 'react';
// import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
// import {RefreshControl} from 'react-native';

// const ExploreScreen = ({route, navigation}) => {
//   const handleProductPress = productId => {
//     navigation.navigate('productDetails', {id: productId});
//   };
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//   }, []);
//   // const [getProducts, {data: products}] = useLazyGetAllProductsQuery();

//   // useEffect(() => {
//   //   getProducts('');
//   // }, []);
//   // console.log('products', products);

//   const renderProductCard = ({item}) => {
//     console.log('item', item);

//     return (
//       // <ProductCard key={item.id} onPress={handleProductPress} product={item} />
//       <>test</>
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }>
//         <View></View>
//         <Text style={styles.sectionTitle}>Nearby You</Text>

//         <View style={styles.productCardsContainer}>
//           {/* {products?.result?.docs?.length ? (
//             <FlatList
//               style={{width: '100%', flex: 1}}
//               data={products?.result?.docs ?? []}
//               renderItem={renderProductCard}
//               keyExtractor={item => item?._id}
//               numColumns={2}
//               columnWrapperStyle={{display: 'flex', gap: 5}}
//             />
//           ) : (
//             <Text>No Items</Text>
//           )} */}
//         </View>
//         {/* <View style={styles.productContainer}>
//           <Text style={styles.sectionTitle}>20 km Away from You</Text>
//         </View> */}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   searchBar: {
//     paddingVertical: 10,
//     marginBottom: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   searchInput: {
//     height: 40,
//     backgroundColor: '#f2f2f2',
//     paddingHorizontal: 10,
//     borderRadius: 8,
//   },
//   productContainer: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   productCardsContainer: {
//     alignItems: 'center',
//   },
// });

// export default ExploreScreen;

import { useQuery } from "@tanstack/react-query";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Brand } from "../../components/molecules";
import { SafeScreen } from "../../components/template";
import { fetchOne } from "../../services/users/index";
import { useTheme } from "../../theme/index";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/view/Heading";

// import { isImageSourcePropType } from "@/types/guards/image";

// import SendImage from "@/theme/assets/images/send.png";
// import ColorsWatchImage from "@/theme/assets/images/colorswatch.png";
// import TranslateImage from "@/theme/assets/images/translate.png";

function Explore() {
  const { t } = useTranslation(["common", "welcome"]);

  const {
    colors,
    variant,
    changeTheme,
    layout,
    gutters,
    fonts,
    components,
    backgrounds,
  } = useTheme();

  const [currentId, setCurrentId] = useState(-1);

  const { isSuccess, data, isFetching } = useQuery({
    queryKey: ["example", currentId],
    queryFn: () => {
      return fetchOne(currentId);
    },
    enabled: currentId >= 0,
  });

  useEffect(() => {
    if (isSuccess) {
      Alert.alert(t("example:welcome", data.name));
    }
  }, [isSuccess, data]);

  const onChangeTheme = () => {
    changeTheme(variant === "default" ? "dark" : "default");
  };

  const onChangeLanguage = (lang: "fr" | "en") => {
    void i18next.changeLanguage(lang);
  };

  // if (
  //   !isImageSourcePropType(SendImage) ||
  //   !isImageSourcePropType(ColorsWatchImage) ||
  //   !isImageSourcePropType(TranslateImage)
  // ) {
  //   throw new Error("Image source is not valid");
  // }

  return (
    // <SafeScreen>
    //   <View
    //     style={[layout.justifyCenter, layout.itemsCenter, gutters.marginTop_80]}
    //   >
    //     <View
    //       style={[layout.relative, backgrounds.gray100, components.circle250]}
    //     />

    //     <View style={[layout.absolute, gutters.paddingTop_80]}>
    //       <Brand height={300} width={300} />
    //     </View>
    //   </View>

    //   <View style={[gutters.paddingHorizontal_32, gutters.marginTop_40]}>
    //     <View style={[gutters.marginTop_40]}>
    //       <Text style={[fonts.size_40, fonts.gray800, fonts.bold]}>
    //         {t("welcome:title")}
    //       </Text>
    //       <Text
    //         style={[
    //           fonts.gray400,
    //           fonts.bold,
    //           fonts.size_24,
    //           gutters.marginBottom_32,
    //         ]}
    //       >
    //         {t("welcome:subtitle")}
    //       </Text>
    //       <Text style={[fonts.size_16, fonts.gray200, gutters.marginBottom_40]}>
    //         {t("welcome:description")}
    //       </Text>
    //     </View>

    //     <View
    //       style={[
    //         layout.row,
    //         layout.justifyBetween,
    //         layout.fullWidth,
    //         gutters.marginTop_16,
    //       ]}
    //     >
    //       <TouchableOpacity
    //         testID="fetch-user-button"
    //         style={[components.buttonCircle, gutters.marginBottom_16]}
    //         onPress={() => setCurrentId(Math.ceil(Math.random() * 10 + 1))}
    //       >
    //         {isFetching ? (
    //           <ActivityIndicator />
    //         ) : (
    //           // <ImageVariant
    //           //   source={SendImage}
    //           //   style={{ tintColor: colors.purple500 }}
    //           // />
    //           <Text style={{ color: colors.purple500 }}>test1</Text>
    //         )}
    //       </TouchableOpacity>

    //       <TouchableOpacity
    //         testID="change-theme-button"
    //         style={[components.buttonCircle, gutters.marginBottom_16]}
    //         onPress={() => onChangeTheme()}
    //       >
    //         <Text style={{ color: colors.purple500 }}>test2</Text>
    //       </TouchableOpacity>

    //       <TouchableOpacity
    //         testID="change-language-button"
    //         style={[components.buttonCircle, gutters.marginBottom_16]}
    //         onPress={() =>
    //           onChangeLanguage(i18next.language === "fr" ? "en" : "fr")
    //         }
    //       >
    //         {/* <ImageVariant
    //             source={TranslateImage}
    //             style={{ tintColor: colors.purple500 }}
    //           /> */}
    //         <Text style={{ color: colors.purple500 }}>test3</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </SafeScreen>
    <>
      <Heading size={12}>Hello World</Heading>
      <Text style={[fonts.size_16, fonts.gray200, gutters.marginBottom_40]}>
        {t("welcome:subtitle")}
      </Text>
      <Button onPress={onChangeTheme} title="Toggle Theme"></Button>
    </>
  );
}

export default Explore;
