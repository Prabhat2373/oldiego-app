import {
  View,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import ProductListCard from "@/components/ui/card/ProductListCard";
import Container from "@/components/ui/Container";

const ExploreProductsContainer = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View>
      <SafeAreaView style={{}}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductListCard />}
          keyExtractor={(item) => item}
          // style={{ flex: 1 }}
        />
      </SafeAreaView>
    </View>
  );
};

export default ExploreProductsContainer;
