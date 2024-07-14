// // import { IconEye } from "@tabler/icons-react-native";
// import { useTheme } from "@/theme";
// import { IconEye, IconEyeOff } from "@tabler/icons-react-native";
// import React, { useState, useRef, useEffect, useCallback, memo } from "react";
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   TextInputProps,
//   TouchableOpacity,
//   Animated,
//   Text,
// } from "react-native";
// // import Icon from "react-native-vector-icons/MaterialIcons"; // Make sure you have this library installed

// interface InputProps extends TextInputProps {
//   label: string;
//   icon?: JSX.Element;
//   isPassword?: boolean;
//   error?: boolean;
// }

// const Input: React.FC<InputProps> = memo(
//   ({ label, icon, isPassword, style, error, ...props }) => {
//     const { colors, fonts } = useTheme();
//     // console.log("value", props.value,props.value);
//     const [isFocused, setIsFocused] = useState(false);
//     const [showPassword, setShowPassword] = useState(!isPassword);
//     const inputRef = useRef<TextInput>(null);
//     const animatedIsFocused = useRef(
//       new Animated.Value(props.value ? 1 : 0)
//     ).current;
//     console.log("animatedIsFocused", animatedIsFocused);
//     useEffect(() => {
//       Animated.timing(animatedIsFocused, {
//         toValue: props.value || isFocused ? 1 : 0,
//         duration: 150,
//         useNativeDriver: true,
//       }).start();
//     }, [isFocused, props.value, animatedIsFocused]);

//     const handleFocus = useCallback(() => {
//       setIsFocused(true);
//     }, []);

//     const handleBlur = useCallback(() => {
//       setIsFocused(false);
//     }, []);

//     const handleTogglePasswordVisibility = useCallback(() => {
//       setShowPassword((prev) => !prev);
//     }, []);

//     const labelStyle = {
//       fontSize: fonts.size_16.fontSize,
//       position: "absolute",
//       left: icon ? 40 : 10,
//       transform: [
//         {
//           translateY: animatedIsFocused.interpolate({
//             inputRange: [0, 1],
//             outputRange: [17, 2],
//           }),
//         },
//         {
//           scale: animatedIsFocused.interpolate({
//             inputRange: [0, 1],
//             outputRange: [1, 0.8],
//           }),
//         },
//       ],
//       color: !!error
//         ? colors.red500
//         : animatedIsFocused.interpolate({
//             inputRange: [0, 1],
//             outputRange: [colors.gray200, "#757575"],
//             // outputRange: ["blue", "red"],
//           }),
//       backgroundColor: colors.foreground_primary,
//       paddingHorizontal: 5,
//       zIndex: 10,
//     };

//     console.log("showPassword", showPassword);
//     return (
//       <View>
//         <View
//           style={[
//             styles.container,
//             style,
//             {
//               backgroundColor: colors.foreground_primary,
//             },
//           ]}
//         >
//           {icon && (
//             <View
//               style={{
//                 position: "absolute",
//                 top: 18,
//                 left: 10,
//                 width: 24,
//                 height: 24,
//                 zIndex: 2,
//               }}
//             >
//               {icon}
//             </View>
//           )}
//           <TextInput
//             selectionColor={colors.primary}
//             ref={inputRef}
//             style={[
//               styles.input,
//               {
//                 borderColor: !!error
//                   ? colors.red500
//                   : isFocused
//                   ? colors.primary
//                   : "transparent",
//                 color: colors.text,
//                 backgroundColor: colors.foreground_primary,
//                 paddingTop: 20,
//               },
//               icon ? { paddingLeft: 45 } : null,
//             ]}
//             secureTextEntry={!showPassword}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             {...props}
//           />
//           <Animated.Text
//             style={labelStyle}
//             onPress={() => inputRef.current?.focus()}
//           >
//             {label}
//           </Animated.Text>
//           {isPassword && (
//             <TouchableOpacity
//               style={styles.eyeIcon}
//               onPress={handleTogglePasswordVisibility}
//             >
//               {!showPassword ? (
//                 <IconEye color={error ? colors.red500 : colors.text_primary} />
//               ) : (
//                 <IconEyeOff
//                   color={error ? colors.red500 : colors.text_primary}
//                 />
//               )}
//             </TouchableOpacity>
//           )}
//         </View>
//         {error ? <Text style={{ color: colors.red500 }}>{error}</Text> : null}
//       </View>
//     );
//   }
// );

// const styles = StyleSheet.create({
//   container: {
//     // marginVertical: 10,
//     position: "relative",
//     borderRadius: 16,
//     // paddingTop: 10,
//     // padding: 10,
//   },
//   input: {
//     height: 60,
//     borderWidth: 1,
//     borderRadius: 16,
//     paddingHorizontal: 14,
//     fontSize: 16,
//     tintColor: "gray",
//     paddingTop: 10,
//   },
//   icon: {
//     // position: "absolute",
//     // top: 10,
//     // left: 10,
//   },
//   eyeIcon: {
//     position: "absolute",
//     top: 20,
//     right: 20,
//   },
// });

// export default Input;

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

interface InputProps extends TextInputProps {
  label: string;
  icon?: JSX.Element;
  isPassword?: boolean;
  error?: boolean;
  withFloatingLabel?: boolean; // Added prop for floating label
}

const Input: React.FC<InputProps> = memo(
  ({
    label,
    icon,
    isPassword,
    style,
    error,
    withFloatingLabel = false,
    ...props
  }) => {
    const { colors, fonts } = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(!isPassword);
    const inputRef = useRef<TextInput>(null);
    const animatedIsFocused = useRef(
      new Animated.Value(props.value ? 1 : 0)
    ).current;

    useEffect(() => {
      if (withFloatingLabel) {
        Animated.timing(animatedIsFocused, {
          toValue: props.value || isFocused ? 1 : 0,
          duration: 150,
          useNativeDriver: true,
        }).start();
      }
    }, [isFocused, props.value, animatedIsFocused, withFloatingLabel]);

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
            outputRange: [17, 2],
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
        ? colors.red500
        : animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [colors.gray200, "#757575"],
          }),
      backgroundColor: colors.foreground_primary,
      paddingHorizontal: 5,
      zIndex: 10,
    };

    return (
      <View>
        <View
          style={[
            styles.container,
            style,
            {
              backgroundColor: colors.foreground_primary,
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
                zIndex: 2,
                paddingRight: 4,
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
                  ? colors.red500
                  : isFocused
                  ? colors.primary
                  : "transparent",
                // color: colors.gray100,
                color: colors.gray100,
                backgroundColor: colors.foreground_primary,
                paddingTop: !withFloatingLabel ? 12 : 20,
              },
              icon ? { paddingLeft: 45 } : null,
            ]}
            secureTextEntry={!showPassword}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
            placeholderTextColor={colors.gray200}
          />
          {withFloatingLabel && (
            <Animated.Text
              style={labelStyle}
              onPress={() => inputRef.current?.focus()}
            >
              {label}
            </Animated.Text>
          )}
          {!withFloatingLabel && !props.value && !isFocused && (
            <Text
              style={[
                labelStyle,
                {
                  position: "absolute",
                  top: 17,
                  left: icon ? 40 : 10,
                  transform: [],
                  scale: 1,
                  display: !withFloatingLabel ? "none" : "flex",
                },
              ]}
              onPress={() => inputRef.current?.focus()}
            >
              {label}
            </Text>
          )}
          {isPassword && (
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={handleTogglePasswordVisibility}
            >
              {!showPassword ? (
                <IconEye color={error ? colors.red500 : colors.text_primary} />
              ) : (
                <IconEyeOff
                  color={error ? colors.red500 : colors.text_primary}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
        {error ? <Text style={{ color: colors.red500 }}>{error}</Text> : null}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 16,
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    fontSize: 16,
    tintColor: "gray",
    paddingTop: 10,
    padding: 12,
  },
  icon: {},
  eyeIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export default Input;
