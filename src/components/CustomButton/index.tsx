import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {CustomText, CustomTextProps} from '../CustomText';

export interface CustomButtonProps extends CustomTextProps {
  onPress?: () => void;
  borderRadius?: number;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onPress,
  borderRadius = 5,
}) => {
  const buttonSizeStyles = {
    small: {paddingVertical: 5, paddingHorizontal: 10},
    medium: {paddingVertical: 10, paddingHorizontal: 15},
    large: {paddingVertical: 15, paddingHorizontal: 20},
  };

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius,
    },
  });

  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <CustomText text={text} />
    </TouchableOpacity>
  );
};
