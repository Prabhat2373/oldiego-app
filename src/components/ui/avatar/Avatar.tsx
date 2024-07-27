// Avatar.tsx
import { getAcronym } from "@/utils/utils";
import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface AvatarProps {
  uri?: string;
  size?: number;
  fallback?: ImageSourcePropType;
  name?: string;
}

const Avatar: React.FC<AvatarProps> = ({ uri, size = 40, fallback, name }) => {
  return (
    <View
      style={[
        styles.avatarContainer,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      {uri ? (
        <Image
          source={{ uri }}
          style={[
            styles.avatarImage,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        />
      ) : fallback ? (
        <Image
          source={fallback}
          style={[
            styles.avatarImage,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        />
      ) : (
        <Text style={[styles.fallbackText, { fontSize: size / 2.5 }]}>
          {getAcronym(name)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  fallbackText: {
    color: "#ffffff",
  },
});

export default Avatar;
