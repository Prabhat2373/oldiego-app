// import { useTheme } from "@/theme";
// import React, { ReactNode } from "react";
// import {
//   Pressable,
//   Text,
//   StyleSheet,
//   PressableProps,
//   TextStyle,
//   ViewStyle,
//   ActivityIndicator,
//   View,
// } from "react-native";

// interface ButtonProps extends PressableProps {
//   onPress?: () => void;
//   style?: ViewStyle;
//   textStyle?: TextStyle;
//   children: ReactNode;
//   isLoading?: boolean;
//   color?: string;
//   startIcon?: string;
//   endIcon?: string;
//   centerIcon?: string;
//   variant?: "default" | "outline" | "ghost" | "link";
// }

// const Button: React.FC<ButtonProps> = ({
//   onPress,
//   style,
//   textStyle,
//   children,
//   isLoading,
//   color,
//   startIcon,
//   endIcon,
//   centerIcon,
//   variant = "default",
//   ...props
// }) => {
//   const { colors } = useTheme();

//   // Determine icon placement based on props
//   const renderStartIcon = startIcon && (
//     <View style={{ width: 24 }}>{startIcon}</View>
//   );
//   const renderEndIcon = endIcon && <>{endIcon}</>;
//   const renderCenterIcon = centerIcon && <>{centerIcon}</>;

//   // Define styles based on variant
//   let buttonStyles = {};
//   let textStyles = {};

//   switch (variant) {
//     case "outline":
//       buttonStyles = {
//         backgroundColor: colors.foreground_primary,
//         borderWidth: 2,
//         borderColor: colors.border_foreground,
//       };
//       textStyles = {
//         color: colors.text_primary,
//       };
//       break;
//     case "ghost":
//       buttonStyles = {
//         backgroundColor: "transparent",
//       };
//       textStyles = {
//         color: colors.primary,
//       };
//       break;
//     case "link":
//       textStyles = {
//         textDecorationLine: "underline",
//         color: colors.primary,
//       };
//       break;
//     default:
//       buttonStyles = {
//         backgroundColor: colors.primary,
//       };
//       textStyles = {
//         color: colors.white,
//       };
//       break;
//   }

//   return (
//     <Pressable
//       onPress={onPress}
//       style={({ pressed }) => [
//         {
//           ...buttonStyles,
//           // Adjust opacity on press
//           opacity: pressed ? 0.8 : 1,
//         },
//         styles.button,
//         style,
//       ]}
//       {...props}
//     >
//       <View style={styles.container}>
//         {renderStartIcon || <View style={{ width: 24 }}></View>}
//         {renderCenterIcon && (
//           <View style={styles.centerIcon}>{renderCenterIcon}</View>
//         )}
//         <Text style={[styles.text, textStyles, textStyle]}>
//           {isLoading ? (
//             <ActivityIndicator color={colors.white} />
//           ) : (
//             <>{children}</>
//           )}
//         </Text>
//         {renderEndIcon || <View style={{ width: 26 }}></View>}
//       </View>
//     </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     borderRadius: 16,
//     alignItems: "center",
//     width: "100%",
//   },
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "100%",
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: "center", // Center align text content
//   },
//   centerIcon: {
//     position: "absolute",
//     left: 0,
//   },
// });

// export default Button;

import { useTheme } from "@/theme";
import React, { ReactNode } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  PressableProps,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
  View,
} from "react-native";

interface ButtonProps extends PressableProps {
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children: ReactNode;
  isLoading?: boolean;
  color?: string;
  startIcon?: string;
  endIcon?: string;
  centerIcon?: ReactNode; // Updated to ReactNode to allow proper rendering
  variant?: "default" | "outline" | "ghost" | "link" | "icon"; // Added "icon" variant
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  textStyle,
  children,
  isLoading,
  color,
  startIcon,
  endIcon,
  centerIcon,
  variant = "default",
  ...props
}) => {
  const { colors } = useTheme();

  // Determine icon placement based on props
  const renderStartIcon = startIcon && (
    <View style={{ width: 24 }}>{startIcon}</View>
  );
  const renderEndIcon = endIcon && <View style={{ width: 24 }}>{endIcon}</View>;
  const renderCenterIcon = centerIcon && (
    <View style={{ width: 24 }}>
      {centerIcon}
      {/* {children} */}
    </View>
  );

  // Define styles based on variant
  let buttonStyles: ViewStyle = {};
  let textStyles: TextStyle = {};

  switch (variant) {
    case "outline":
      buttonStyles = {
        backgroundColor: colors.foreground_primary,
        borderWidth: 2,
        borderColor: colors.border_foreground,
      };
      textStyles = {
        color: colors.text_primary,
      };
      break;
    case "ghost":
      buttonStyles = {
        backgroundColor: "transparent",
      };
      textStyles = {
        color: colors.primary,
      };
      break;
    case "link":
      textStyles = {
        textDecorationLine: "underline",
        color: colors.primary,
      };
      break;
    case "icon":
      buttonStyles = {
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.gray200,
        borderRadius: 10,
      };
      break;
    default:
      buttonStyles = {
        backgroundColor: colors.primary,
      };
      textStyles = {
        color: colors.white,
      };
      break;
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          ...buttonStyles,
          // Adjust opacity on press
          opacity: pressed ? 0.8 : 1,
        },
        styles.button,
        variant === "icon" && styles.iconButton, // Apply iconButton styles if variant is "icon"
        style,
      ]}
      {...props}
    >
      {variant === "icon" ? (
        <View
          style={[
            styles.iconContainer,
            {
              borderColor: colors.gray50,
              borderRadius: 10,
              // padding: 12,
              paddingHorizontal: 8,
              paddingVertical: 13,
            },
          ]}
        >
          {renderCenterIcon}
        </View>
      ) : (
        <View style={styles.container}>
          {renderStartIcon || <View style={{ width: 24 }}></View>}
          <Text style={[styles.text, textStyles, textStyle]}>
            {isLoading ? (
              <ActivityIndicator color={colors.white} />
            ) : (
              <>{children}</>
            )}
          </Text>
          {renderEndIcon || <View style={{ width: 24 }}></View>}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    width: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center", // Center align text content
  },
  centerIcon: {
    position: "absolute",
    left: 0,
  },
  iconButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "black",
    borderWidth: 1,
  },
});

export default Button;
