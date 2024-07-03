import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

const colorOptions = {
  darkBlue: '#0C1A30',
  blue: '#144390',
  gray: '#838589',
  white: '#FFFFFF',
  buttonBlue: '#164194',
};

export interface CustomTextProps {
  text: string;
  color?: keyof typeof colorOptions;
  size?: 14 | 16 | 18 | 20;
  fontWeight?: 400 | 500 | 600 | 700;
  style?: Record<string, any>;
}

export const CustomText: React.FC<CustomTextProps> = ({
  style,
  text,
  color = 'darkBlue',
  size = 16,
}) => {
  const textStyle = {
    color: colorOptions[color],
    fontSize: size,
  };

  return <Text style={[textStyle, style]}>{text}</Text>;
};

export default CustomText;
