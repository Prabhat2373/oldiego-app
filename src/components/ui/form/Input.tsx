// import { IconEye } from "@tabler/icons-react-native";
import { useTheme } from "@/theme";
import { IconEye, IconEyeOff } from "@tabler/icons-react-native";
import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  Animated,
  Text,
} from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons"; // Make sure you have this library installed

interface InputProps extends TextInputProps {
  label: string;
  icon?: JSX.Element;
  isPassword?: boolean;
  error?: boolean;
}

const Input: React.FC<InputProps> = memo(
  ({ label, icon, isPassword, style, error, ...props }) => {
    const { colors, fonts } = useTheme();
    // console.log("value", props.value,props.value);
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(!isPassword);
    const inputRef = useRef<TextInput>(null);
    const animatedIsFocused = useRef(
      new Animated.Value(props.value ? 1 : 0)
    ).current;
    console.log("animatedIsFocused", animatedIsFocused);
    useEffect(() => {
      Animated.timing(animatedIsFocused, {
        toValue: props.value || isFocused ? 1 : 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }, [isFocused, props.value, animatedIsFocused]);

    const handleFocus = useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
      setIsFocused(false);
    }, []);

    const handleTogglePasswordVisibility = useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    const labelStyle = {
      fontSize: fonts.size_16.fontSize,
      position: "absolute",
      left: icon ? 40 : 10,
      transform: [
        {
          translateY: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 2],
          }),
        },
        {
          scale: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.8],
          }),
        },
      ],
      color: !!error
        ? colors.red_primary
        : animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [colors.gray200, "#757575"],
            // outputRange: ["blue", "red"],
          }),
      backgroundColor: colors.foreground_primary,
      paddingHorizontal: 5,
      zIndex: 10,
    };

    console.log("showPassword", showPassword);
    return (
      <View>
        <View
          style={[
            styles.container,
            style,
            {
              backgroundColor: colors.foreground_primary,
              // display: "flex",
              // alignItems: "center",
              // flexDirection: "row",
            },
          ]}
        >
          {icon && (
            <View
              style={{
                position: "absolute",
                top: 18,
                left: 10,
                width: 24,
                height: 24,
                // backgroundColor: "red",
                zIndex: 2,
              }}
            >
              {icon}
            </View>
          )}
          <TextInput
            selectionColor={colors.primary}
            ref={inputRef}
            style={[
              styles.input,
              {
                borderColor: !!error
                  ? colors.red_primary
                  : isFocused
                  ? colors.primary
                  : "transparent",
                color: colors.text,
                backgroundColor: colors.foreground_primary,
                paddingTop: 20,
              },
              icon ? { paddingLeft: 45 } : null,
            ]}
            secureTextEntry={!showPassword}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          <Animated.Text
            style={labelStyle}
            onPress={() => inputRef.current?.focus()}
          >
            {label}
          </Animated.Text>
          {isPassword && (
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={handleTogglePasswordVisibility}
            >
              {/* <Icon
              name={showPassword ? "visibility" : "visibility-off"}
              size={20}
              color="#757575"
            /> */}

              {!showPassword ? (
                <IconEye color={colors.text_primary} />
              ) : (
                <IconEyeOff color={colors.text_primary} />
              )}
            </TouchableOpacity>
          )}
        </View>
        {error ? (
          <Text style={{ color: colors.red_primary }}>{error}</Text>
        ) : null}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
    position: "relative",
    borderRadius: 16,
    // paddingTop: 10,
    // padding: 10,
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    fontSize: 16,
    tintColor: "gray",
    paddingTop: 10,
  },
  icon: {
    // position: "absolute",
    // top: 10,
    // left: 10,
  },
  eyeIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export default Input;
