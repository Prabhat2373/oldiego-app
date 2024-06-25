import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export const buttonStyles = StyleSheet.create({
  button: {
    padding: 18,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: 'white',
    fontSize: fonts.size.font16,
  },
});
