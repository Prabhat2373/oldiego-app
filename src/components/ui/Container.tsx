import { View, Text } from "react-native";
import React, { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <View style={{ margin: 20 }}>
      <>{children}</>
    </View>
  );
};

export default Container;
