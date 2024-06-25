// import {View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {useRoute, useNavigation} from '@react-navigation/native';

// const ExploreScreen = ({navigation}) => {
//   const router = useRoute();
//   const nav = useNavigation();
//   return (
//     <View>
//       <Text>ExploreScreen</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('profile')}>
//         <Text>Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ExploreScreen;

import React, {useEffect} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RefreshControl} from 'react-native';

const ExploreScreen = ({route, navigation}) => {
  const handleProductPress = productId => {
    navigation.navigate('productDetails', {id: productId});
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  // const [getProducts, {data: products}] = useLazyGetAllProductsQuery();

  // useEffect(() => {
  //   getProducts('');
  // }, []);
  // console.log('products', products);

  const renderProductCard = ({item}) => {
    console.log('item', item);

    return (
      // <ProductCard key={item.id} onPress={handleProductPress} product={item} />
      <>test</>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View></View>
        <Text style={styles.sectionTitle}>Nearby You</Text>

        <View style={styles.productCardsContainer}>
          {/* {products?.result?.docs?.length ? (
            <FlatList
              style={{width: '100%', flex: 1}}
              data={products?.result?.docs ?? []}
              renderItem={renderProductCard}
              keyExtractor={item => item?._id}
              numColumns={2}
              columnWrapperStyle={{display: 'flex', gap: 5}}
            />
          ) : (
            <Text>No Items</Text>
          )} */}
        </View>
        {/* <View style={styles.productContainer}>
          <Text style={styles.sectionTitle}>20 km Away from You</Text>
        </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchBar: {
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  productContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productCardsContainer: {
    alignItems: 'center',
  },
});

export default ExploreScreen;
