import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface HeaderComponentProps {
  title: string;
  showBackButton?: boolean;
  showAvatar?: boolean;
  customRightContent?: React.ReactNode;
  onBackPress?: () => void;
}

const StackNavigationHeader: React.FC<HeaderComponentProps> = ({
  title,
  showBackButton = true,
  showAvatar = false,
  customRightContent,
  onBackPress,
}) => {
  const navigation = useNavigation();
  // const theme = useTheme();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {showBackButton && (
        // <IconButton icon="arrow-left" size={24} onPress={handleBackPress} />
        <Button title="Back" />
      )}

      {/* {showAvatar && (
        <Avatar.Image
          source={{uri: 'https://dummyurl.com/avatar.jpg'}}
          size={40}
        />
      )} */}

      <Text style={styles.title}>{title}</Text>

      {customRightContent}

      {/* Additional customizations can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f2f2f2',
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
});

export default StackNavigationHeader;
